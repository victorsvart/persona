import OpenAI from 'openai';
import { ContentLoader } from './content-loader';
import { global_suggestions_list } from './const';
import { analyzeSkillGaps, SkillGapAnalysis } from './skills-transfer-map';

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('OPENAI_API_KEY environment variable is required');
}

// Initialize OpenAI client with best practices
const openai = new OpenAI({
  apiKey,
  maxRetries: 3,
  timeout: 60000,
});

export const OPENAI_CONFIG = {
  model: process.env.OPENAI_MODEL || 'gpt-4o',
  temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.7'),
  maxTokens: parseInt(process.env.OPENAI_MAX_TOKENS || '4000', 10),
};

export interface ResumeGenerationRequest {
  application: {
    company_name: string;
    role: string;
    job_post: string;
  };
  user: {
    name: string;
    email?: string;
    phone?: string;
    linkedin?: string;
    location?: string;
  };
  userExperience?: {
    professional_summary?: string;
    work_experience?: Array<{
      institution: string;
      role: string;
      start_date?: string;
      end_date?: string;
      summary?: string;
    }>;
    skills?: string[];
    education?: Array<{
      institution: string;
      major: string;
      start_date: string;
      end_date?: string;
    }>;
    certifications?: Array<{
      name: string;
      issuer: string;
      date?: string;
    }>;
    personal_projects?: Array<{
      name: string;
      year: number;
      description: string;
    }>;
  };
  userMessage?: string;
  conversationHistory?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

export interface ResumeGenerationResponse {
  content: string;
  resumeContent: string;
  suggestions?: string[];
  modificationsApplied?: string[]; // Feedback on what was changed
}

interface ContentModification {
  type: 'replace' | 'remove' | 'filter';
  oldValue?: string;
  newValue?: string;
  item?: string;
  section?: string;
  filterCriteria?: string;
  keepOnly?: boolean;
}

export interface StreamChunk {
  type: 'content' | 'done' | 'error';
  content?: string;
  suggestions?: string[];
  resumeContent?: string;
  modificationsApplied?: string[];
  error?: string;
}

// Custom error class for OpenAI errors
export class OpenAIError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly statusCode?: number,
    public readonly originalError?: unknown,
  ) {
    super(message);
    this.name = 'OpenAIError';
  }
}

export class ResumeAgent {
  private static async getSystemPrompt(): Promise<string> {
    return ContentLoader.loadSystemPrompt();
  }

  /**
   * Validates the resume generation request
   */
  private static validateRequest(request: ResumeGenerationRequest): void {
    if (
      !request.application?.company_name ||
      !request.application?.role ||
      !request.application?.job_post
    ) {
      throw new OpenAIError(
        'Missing required application information',
        'INVALID_REQUEST',
        400,
      );
    }

    if (!request.user?.name) {
      throw new OpenAIError(
        'Missing required user information',
        'INVALID_REQUEST',
        400,
      );
    }

    // Validate job post token limits
    if (request.application.job_post.length > 20000) {
      throw new OpenAIError(
        'Job post is too long. Please provide a shorter version.',
        'REQUEST_TOO_LARGE',
        400,
      );
    }
  }

  static async generateResume(
    request: ResumeGenerationRequest,
  ): Promise<ResumeGenerationResponse> {
    try {
      this.validateRequest(request);

      // 🎯 NEW: Perform AI-powered skill gap analysis
      let skillGapAnalysis: SkillGapAnalysis | undefined;
      if (request.userExperience?.skills && request.userExperience.skills.length > 0) {
        try {
          skillGapAnalysis = await analyzeSkillGaps(
            request.userExperience.skills,
            request.application.job_post,
            request.application.role
          );
          console.log('Skill gap analysis completed:', {
            overallMatch: skillGapAnalysis.overallMatch,
            transferableSkills: skillGapAnalysis.transferableSkills.length,
            quickWins: skillGapAnalysis.quickWins.length,
          });
        } catch (error) {
          console.error('Error performing skill gap analysis:', error);
          // Continue without skill gap analysis if it fails
        }
      }

      const prompt = await this.buildPrompt(request);
      const systemPrompt = await this.getSystemPrompt();

      // Conversation history if available
      const messages: Array<{
        role: 'system' | 'user' | 'assistant';
        content: string;
      }> = [
        {
          role: 'system',
          content: systemPrompt,
        },
      ];

      // Add conversation history if present (for context continuity)
      // Limited to the last 10 messages to avoid token limits
      if (
        request.conversationHistory &&
        request.conversationHistory.length > 0
      ) {
        const recentHistory = request.conversationHistory.slice(-10);
        messages.push(...recentHistory);
      }

      messages.push({
        role: 'user',
        content: prompt,
      });

      const completion = await openai.chat.completions.create({
        model: OPENAI_CONFIG.model,
        messages,
        temperature: OPENAI_CONFIG.temperature,
        max_tokens: OPENAI_CONFIG.maxTokens,
        presence_penalty: 0.1, // Encourage diverse content
        frequency_penalty: 0.1, // Reduce repetition
      });

      const response = completion.choices[0]?.message?.content;
      if (!response) {
        throw new OpenAIError(
          'Empty response from OpenAI',
          'EMPTY_RESPONSE',
          500,
        );
      }

      // Check if response was truncated
      if (completion.choices[0]?.finish_reason === 'length') {
        console.warn('OpenAI response was truncated due to max_tokens limit');
      }

      const { content, resumeContent, modificationsApplied } = await this.parseResponse(
        response,
        request,
        skillGapAnalysis,
      );

      return {
        content,
        resumeContent,
        suggestions: this.generateSuggestions(request, skillGapAnalysis),
        modificationsApplied,
      };
    } catch (error) {
      if (error instanceof OpenAIError) {
        throw error;
      }

      if (error && typeof error === 'object' && 'status' in error) {
        const apiError = error as {
          status?: number;
          message?: string;
          code?: string;
        };

        if (apiError.status === 429) {
          throw new OpenAIError(
            'Rate limit exceeded. Please try again in a few moments.',
            'RATE_LIMIT',
            429,
            error,
          );
        }

        if (apiError.status === 401) {
          throw new OpenAIError(
            'Invalid API key configuration.',
            'INVALID_API_KEY',
            401,
            error,
          );
        }

        if (apiError.status && apiError.status >= 500) {
          throw new OpenAIError(
            'OpenAI service is temporarily unavailable. Please try again later.',
            'SERVICE_UNAVAILABLE',
            apiError.status,
            error,
          );
        }
      }

      console.error('Error generating resume:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        company: request.application.company_name,
        role: request.application.role,
      });

      throw new OpenAIError(
        'Failed to generate resume. Please try again.',
        'GENERATION_FAILED',
        500,
        error,
      );
    }
  }

  /**
   * Generate resume with streaming support
   * Returns an async generator that yields content chunks
   */
  static async *generateResumeStream(
    request: ResumeGenerationRequest,
  ): AsyncGenerator<StreamChunk, void, unknown> {
    try {
      this.validateRequest(request);

      const prompt = await this.buildPrompt(request);
      const systemPrompt = await this.getSystemPrompt();

      // Build messages array with conversation history if available
      const messages: Array<{
        role: 'system' | 'user' | 'assistant';
        content: string;
      }> = [
        {
          role: 'system',
          content: systemPrompt,
        },
      ];

      // Add conversation history if present
      if (
        request.conversationHistory &&
        request.conversationHistory.length > 0
      ) {
        const recentHistory = request.conversationHistory.slice(-10);
        messages.push(...recentHistory);
      }

      // Add current user message
      messages.push({
        role: 'user',
        content: prompt,
      });

      // Create streaming completion
      const stream = await openai.chat.completions.create({
        model: OPENAI_CONFIG.model,
        messages,
        temperature: OPENAI_CONFIG.temperature,
        max_tokens: OPENAI_CONFIG.maxTokens,
        presence_penalty: 0.1,
        frequency_penalty: 0.1,
        stream: true,
      });

      let fullContent = '';

      // Stream the response
      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;

        if (content) {
          fullContent += content;

          // Yield content chunk
          yield {
            type: 'content',
            content,
          };
        }

        if (chunk.choices[0]?.finish_reason === 'stop') {
          const { resumeContent } = await this.parseResponse(
            fullContent,
            request,
          );
          const suggestions = this.generateSuggestions(request);

          yield {
            type: 'done',
            content: fullContent,
            resumeContent,
            suggestions,
          };
        }
      }
    } catch (error) {
      let errorMessage = 'Failed to generate resume. Please try again.';
      let errorCode = 'GENERATION_FAILED';

      if (error instanceof OpenAIError) {
        errorMessage = error.message;
        errorCode = error.code || 'GENERATION_FAILED';
      } else if (error && typeof error === 'object' && 'status' in error) {
        const apiError = error as { status?: number; message?: string };

        if (apiError.status === 429) {
          errorMessage =
            'Rate limit exceeded. Please try again in a few moments.';
          errorCode = 'RATE_LIMIT';
        } else if (apiError.status === 401) {
          errorMessage = 'Invalid API key configuration.';
          errorCode = 'INVALID_API_KEY';
        } else if (apiError.status && apiError.status >= 500) {
          errorMessage =
            'OpenAI service is temporarily unavailable. Please try again later.';
          errorCode = 'SERVICE_UNAVAILABLE';
        }
      }

      console.error('Error streaming resume:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        company: request.application.company_name,
        role: request.application.role,
      });

      yield {
        type: 'error',
        error: errorMessage,
      };
    }
  }

  private static async buildPrompt(
    request: ResumeGenerationRequest,
  ): Promise<string> {
    const { application, userExperience, userMessage } = request;

    const promptTemplate = await ContentLoader.loadResumeGenerationPrompt();
    let userExperienceSection = '';

    if (userExperience && this.hasUserExperience(userExperience)) {
      const userExpTemplate = await ContentLoader.loadUserExperienceTemplate();

      let professionalSummarySection = '';
      if (userExperience.professional_summary?.trim()) {
        professionalSummarySection = `**Professional Summary:** ${userExperience.professional_summary.trim()}`;
      }

      let workExperienceSection = '';
      if (userExperience.work_experience?.length) {
        workExperienceSection = `**Work Experience:**\n`;
        userExperience.work_experience.forEach((exp, index) => {
          const startDate = exp.start_date || 'Date not specified';
          const endDate = exp.end_date || 'Present';
          workExperienceSection += `${index + 1}. ${exp.role} at ${
            exp.institution
          } (${startDate} - ${endDate})\n`;
          if (exp.summary?.trim()) {
            workExperienceSection += `   ${exp.summary.trim()}\n`;
          }
        });
      }

      let skillsSection = '';
      if (userExperience.skills?.length) {
        const validSkills = userExperience.skills.filter((s) => s?.trim());
        if (validSkills.length > 0) {
          skillsSection = `**Skills:** ${validSkills.join(', ')}`;
        }
      }

      let educationSection = '';
      if (userExperience.education?.length) {
        educationSection = `**Education:**\n`;
        userExperience.education.forEach((edu, index) => {
          const endDate = edu.end_date || 'Present';
          educationSection += `${index + 1}. ${edu.major} at ${
            edu.institution
          } (${edu.start_date} - ${endDate})\n`;
        });
      }

      let certificationsSection = '';
      if (userExperience.certifications?.length) {
        certificationsSection = `**Certifications:**\n`;
        userExperience.certifications.forEach((cert, index) => {
          certificationsSection += `${index + 1}. ${cert.name} - ${
            cert.issuer
          }`;
          if (cert.date) {
            certificationsSection += ` (${cert.date})`;
          }
          certificationsSection += '\n';
        });
      }

      let personalProjectsSection = '';
      if (userExperience.personal_projects?.length) {
        personalProjectsSection = `**Personal Projects:**\n`;
        userExperience.personal_projects.forEach((proj, index) => {
          personalProjectsSection += `${index + 1}. ${proj.name} (${proj.year})\n`;
          if (proj.description?.trim()) {
            personalProjectsSection += `   ${proj.description.trim()}\n`;
          }
        });
      }

      userExperienceSection = ContentLoader.replacePlaceholders(
        userExpTemplate,
        {
          PROFESSIONAL_SUMMARY_SECTION: professionalSummarySection,
          WORK_EXPERIENCE_SECTION: workExperienceSection,
          SKILLS_SECTION: skillsSection,
          EDUCATION_SECTION: educationSection,
          CERTIFICATIONS_SECTION: certificationsSection,
          PERSONAL_PROJECTS_SECTION: personalProjectsSection,
        },
      );
    }

    let userRequestSection = '';
    if (userMessage?.trim()) {
      userRequestSection = `## USER REQUEST:\n${userMessage.trim()}`;
    }

    // Replace placeholders in the main prompt
    const prompt = ContentLoader.replacePlaceholders(promptTemplate, {
      COMPANY_NAME: application.company_name,
      ROLE: application.role,
      JOB_DESCRIPTION: application.job_post,
      USER_EXPERIENCE_SECTION: userExperienceSection,
      USER_REQUEST_SECTION: userRequestSection,
    });

    return prompt;
  }

  /**
   * Check if user has provided any experience data
   */
  private static hasUserExperience(
    userExperience?: ResumeGenerationRequest['userExperience'],
  ): boolean {
    if (!userExperience) return false;

    return !!(
      userExperience.professional_summary?.trim() ||
      (userExperience.work_experience &&
        userExperience.work_experience.length > 0) ||
      (userExperience.skills && userExperience.skills.length > 0) ||
      (userExperience.education && userExperience.education.length > 0) ||
      (userExperience.certifications &&
        userExperience.certifications.length > 0) ||
      (userExperience.personal_projects &&
        userExperience.personal_projects.length > 0)
    );
  }

  private static async parseResponse(
    response: string,
    request: ResumeGenerationRequest,
    skillGapAnalysis?: SkillGapAnalysis,
  ): Promise<{ content: string; resumeContent: string; modificationsApplied?: string[] }> {
    const content = response;
    const parsedData = this.parseAIResponse(response, request);
    const resumeContent = await this.generateResumeHTML(response, request, skillGapAnalysis);

    return { 
      content, 
      resumeContent,
      modificationsApplied: parsedData.modificationsApplied?.length 
        ? parsedData.modificationsApplied 
        : undefined,
    };
  }

  /**
   * Detect simple text replacement requests from user message
   * Patterns: "change X to Y", "replace X with Y", "X to Y"
   */
  private static detectSimpleReplacements(
    userMessage?: string
  ): Array<{ oldValue: string; newValue: string }> {
    if (!userMessage) return [];
    
    const replacements: Array<{ oldValue: string; newValue: string }> = [];
    
    // Pattern 1: "change X to Y" or "change X from Y"
    const changePattern = /change\s+(?:(?:the\s+)?(?:years?\s+)?(?:from\s+)?)?["']?(.+?)["']?\s+(?:from\s+)?(?:to|into)\s+["']?(.+?)["']?(?:\s|$|,|\.)/gi;
    const changeMatches = userMessage.matchAll(changePattern);
    for (const match of changeMatches) {
      if (match[1] && match[2]) {
        replacements.push({
          oldValue: match[1].trim(),
          newValue: match[2].trim(),
        });
      }
    }
    
    // Pattern 2: "replace X with Y"
    const replacePattern = /replace\s+["']?(.+?)["']?\s+with\s+["']?(.+?)["']?(?:\s|$|,|\.)/gi;
    const replaceMatches = userMessage.matchAll(replacePattern);
    for (const match of replaceMatches) {
      if (match[1] && match[2]) {
        replacements.push({
          oldValue: match[1].trim(),
          newValue: match[2].trim(),
        });
      }
    }
    
    // Pattern 3: Shorthand "X to Y" (be careful with this one)
    // Only match if it looks like a direct replacement (numbers, quoted strings, etc.)
    const shorthandPattern = /(?:^|\s)["']?(\d+\+?|[+]?\d+)["']?\s+to\s+["']?(\d+\+?|[+]?\d+)["']?(?:\s|$)/gi;
    const shorthandMatches = userMessage.matchAll(shorthandPattern);
    for (const match of shorthandMatches) {
      if (match[1] && match[2]) {
        replacements.push({
          oldValue: match[1].trim(),
          newValue: match[2].trim(),
        });
      }
    }
    
    return replacements;
  }

  /**
   * Detect item removal requests from user message
   * Patterns: "remove X", "delete X", "remove X from Y"
   */
  private static detectRemovals(
    userMessage?: string
  ): Array<{ item: string; section?: string }> {
    if (!userMessage) return [];
    
    const removals: Array<{ item: string; section?: string }> = [];
    
    // Pattern: "remove/delete X" or "remove/delete X from Y"
    const removePattern = /(?:remove|delete|drop)\s+["']?(.+?)["']?(?:\s+from\s+(?:my\s+)?(.+?))?(?:\s|$|,|\.)/gi;
    const removeMatches = userMessage.matchAll(removePattern);
    
    for (const match of removeMatches) {
      if (match[1]) {
        removals.push({
          item: match[1].trim(),
          section: match[2]?.trim().toLowerCase(),
        });
      }
    }
    
    return removals;
  }

  /**
   * Detect filter/keep only requests from user message
   * Patterns: "keep only X", "show only X", "filter to X", "only X skills"
   */
  private static detectFilters(
    userMessage?: string
  ): Array<{ criteria: string; section?: string; keepOnly: boolean }> {
    if (!userMessage) return [];
    
    const filters: Array<{ criteria: string; section?: string; keepOnly: boolean }> = [];
    
    // Pattern 1: "keep only X" or "show only X"
    const keepOnlyPattern = /(?:keep|show|display)\s+only\s+["']?(.+?)["']?(?:\s+(?:skills?|from\s+(.+?)))?(?:\s|$|,|\.)/gi;
    const keepMatches = userMessage.matchAll(keepOnlyPattern);
    
    for (const match of keepMatches) {
      if (match[1]) {
        filters.push({
          criteria: match[1].trim(),
          section: match[2]?.trim().toLowerCase() || 'skills',
          keepOnly: true,
        });
      }
    }
    
    // Pattern 2: "only X skills"
    const onlySkillsPattern = /(?:^|\s)only\s+["']?(.+?)["']?\s+skills?(?:\s|$|,|\.)/gi;
    const onlyMatches = userMessage.matchAll(onlySkillsPattern);
    
    for (const match of onlyMatches) {
      if (match[1]) {
        filters.push({
          criteria: match[1].trim(),
          section: 'skills',
          keepOnly: true,
        });
      }
    }
    
    // Pattern 3: "filter to X" or "filter skills to X"
    const filterPattern = /filter\s+(?:(?:my\s+)?(.+?)\s+)?to\s+["']?(.+?)["']?(?:\s|$|,|\.)/gi;
    const filterMatches = userMessage.matchAll(filterPattern);
    
    for (const match of filterMatches) {
      if (match[2]) {
        filters.push({
          criteria: match[2].trim(),
          section: match[1]?.trim().toLowerCase() || 'skills',
          keepOnly: true,
        });
      }
    }
    
    return filters;
  }

  /**
   * Categorize skills into types for filtering
   */
  private static categorizeSkill(skill: string): string[] {
    const skillLower = skill.toLowerCase();
    const categories: string[] = [];
    
    // Programming/Technical skills
    const programmingKeywords = [
      'javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'ruby', 'php', 'go', 'rust', 'swift', 'kotlin',
      'react', 'vue', 'angular', 'node', 'express', 'django', 'flask', 'spring',
      'html', 'css', 'sql', 'nosql', 'mongodb', 'postgresql', 'mysql',
      'git', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'ci/cd',
      'api', 'rest', 'graphql', 'microservices',
      'programming', 'coding', 'development', 'software'
    ];
    
    if (programmingKeywords.some(keyword => skillLower.includes(keyword))) {
      categories.push('programming', 'technical');
    }
    
    // Design/Creative skills
    const designKeywords = ['design', 'ui', 'ux', 'figma', 'sketch', 'photoshop', 'illustrator', 'creative'];
    if (designKeywords.some(keyword => skillLower.includes(keyword))) {
      categories.push('design', 'creative');
    }
    
    // Data/Analytics skills
    const dataKeywords = ['data', 'analytics', 'tableau', 'powerbi', 'excel', 'statistics', 'machine learning', 'ai'];
    if (dataKeywords.some(keyword => skillLower.includes(keyword))) {
      categories.push('data', 'analytics');
    }
    
    // Management/Soft skills
    const softSkills = ['leadership', 'management', 'communication', 'teamwork', 'agile', 'scrum', 'project management'];
    if (softSkills.some(keyword => skillLower.includes(keyword))) {
      categories.push('soft', 'management', 'leadership');
    }
    
    // Languages
    const languageKeywords = ['english', 'spanish', 'french', 'german', 'chinese', 'japanese', 'language'];
    if (languageKeywords.some(keyword => skillLower.includes(keyword))) {
      categories.push('language');
    }
    
    return categories;
  }

  /**
   * Apply filter operations to content
   */
  private static applyFilters(
    content: {
      summary: string;
      workExperience: Array<{
        title: string;
        company: string;
        dates: string;
        responsibilities: string[];
      }>;
      skills: string[];
      education: Array<{
        degree: string;
        institution: string;
        dates: string;
      }>;
      personalProjects: Array<{
        name: string;
        year: number;
        description: string;
      }>;
      certifications: string[];
    },
    filters: Array<{ criteria: string; section?: string; keepOnly: boolean }>
  ): typeof content {
    if (filters.length === 0) return content;
    
    const modified = { ...content };
    
    filters.forEach(({ criteria, section, keepOnly }) => {
      const criteriaLower = criteria.toLowerCase();
      
      // Filter skills (most common case)
      if (!section || section === 'skills' || section === 'skill') {
        if (keepOnly) {
          // Keep only skills that match the criteria
          modified.skills = modified.skills.filter(skill => {
            const skillLower = skill.toLowerCase();
            const categories = this.categorizeSkill(skill);
            
            // Check if skill matches the criteria directly
            if (skillLower.includes(criteriaLower)) {
              return true;
            }
            
            // Check if skill belongs to the requested category
            if (categories.some(cat => criteriaLower.includes(cat) || cat.includes(criteriaLower))) {
              return true;
            }
            
            return false;
          });
        }
      }
      
      // Could extend to filter other sections (projects, experience, etc.)
    });
    
    return modified;
  }

  /**
   * Apply text replacements to all content
   */
  private static applyReplacements(
    content: {
      summary: string;
      workExperience: Array<{
        title: string;
        company: string;
        dates: string;
        responsibilities: string[];
      }>;
      skills: string[];
      education: Array<{
        degree: string;
        institution: string;
        dates: string;
      }>;
      personalProjects: Array<{
        name: string;
        year: number;
        description: string;
      }>;
      certifications: string[];
    },
    replacements: Array<{ oldValue: string; newValue: string }>
  ): typeof content {
    if (replacements.length === 0) return content;
    
    const modified = { ...content };
    
    replacements.forEach(({ oldValue, newValue }) => {
      // Create regex for case-insensitive replacement
      // Also handle variations like "3+", "+3", "3", "3 years", etc.
      const escapedOld = oldValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(escapedOld, 'gi');
      
      // Apply to summary
      if (modified.summary) {
        modified.summary = modified.summary.replace(pattern, newValue);
      }
      
      // Apply to work experience responsibilities
      modified.workExperience = modified.workExperience.map(exp => ({
        ...exp,
        responsibilities: exp.responsibilities.map(resp =>
          resp.replace(pattern, newValue)
        ),
      }));
      
      // Apply to skills (exact match)
      modified.skills = modified.skills.map(skill =>
        skill.toLowerCase() === oldValue.toLowerCase() ? newValue : skill
      );
      
      // Apply to education degrees
      modified.education = modified.education.map(edu => ({
        ...edu,
        degree: edu.degree.replace(pattern, newValue),
      }));
      
      // Apply to personal projects
      modified.personalProjects = modified.personalProjects.map(proj => ({
        ...proj,
        name: proj.name.replace(pattern, newValue),
        description: proj.description.replace(pattern, newValue),
      }));
      
      // Apply to certifications
      modified.certifications = modified.certifications.map(cert =>
        cert.replace(pattern, newValue)
      );
    });
    
    return modified;
  }

  /**
   * Apply item removals from content
   */
  private static applyRemovals(
    content: {
      summary: string;
      workExperience: Array<{
        title: string;
        company: string;
        dates: string;
        responsibilities: string[];
      }>;
      skills: string[];
      education: Array<{
        degree: string;
        institution: string;
        dates: string;
      }>;
      personalProjects: Array<{
        name: string;
        year: number;
        description: string;
      }>;
      certifications: string[];
    },
    removals: Array<{ item: string; section?: string }>
  ): typeof content {
    if (removals.length === 0) return content;
    
    const modified = { ...content };
    
    removals.forEach(({ item, section }) => {
      const itemLower = item.toLowerCase();
      
      // Remove from skills (most common)
      if (!section || section === 'skills' || section === 'skill') {
        modified.skills = modified.skills.filter(
          skill => !skill.toLowerCase().includes(itemLower)
        );
      }
      
      // Remove from work experience (if company/role mentioned)
      if (!section || section === 'experience' || section === 'work') {
        modified.workExperience = modified.workExperience.filter(
          exp => 
            !exp.company.toLowerCase().includes(itemLower) &&
            !exp.title.toLowerCase().includes(itemLower)
        );
      }
      
      // Remove from personal projects
      if (!section || section === 'projects' || section === 'project') {
        modified.personalProjects = modified.personalProjects.filter(
          proj => !proj.name.toLowerCase().includes(itemLower)
        );
      }
      
      // Remove from certifications
      if (!section || section === 'certifications' || section === 'certification') {
        modified.certifications = modified.certifications.filter(
          cert => !cert.toLowerCase().includes(itemLower)
        );
      }
    });
    
    return modified;
  }

  /**
   * Parse AI response and apply tailoring to user data
   * This function intelligently applies AI suggestions to the user's actual data
   */
  private static parseAIResponse(
    response: string,
    request: ResumeGenerationRequest,
    skillGapAnalysis?: SkillGapAnalysis,
  ): {
    summary: string;
    workExperience: Array<{
      title: string;
      company: string;
      dates: string;
      responsibilities: string[];
    }>;
    skills: string[];
    education: Array<{
      degree: string;
      institution: string;
      dates: string;
    }>;
    personalProjects: Array<{
      name: string;
      year: number;
      description: string;
    }>;
    certifications: string[];
    modificationsApplied?: string[];
  } {
    const result = {
      summary: '',
      workExperience: [] as Array<{
        title: string;
        company: string;
        dates: string;
        responsibilities: string[];
      }>,
      skills: [] as string[],
      education: [] as Array<{
        degree: string;
        institution: string;
        dates: string;
      }>,
      personalProjects: [] as Array<{
        name: string;
        year: number;
        description: string;
      }>,
      certifications: [] as string[],
      modificationsApplied: [] as string[],
    };

    const userExp = request.userExperience;
    
    if (!userExp) {
      return result;
    }

    // Extract AI guidance/keywords from response
    const aiGuidance = this.extractAIGuidance(response, request.userMessage);

    // Professional summary - apply AI enhancements if available
    if (userExp.professional_summary) {
      result.summary = this.enhanceSummary(
        userExp.professional_summary,
        aiGuidance,
        skillGapAnalysis,
      );
    }

    // Work experience - format and potentially reorder based on AI guidance
    if (userExp.work_experience) {
      result.workExperience = this.formatWorkExperience(
        userExp.work_experience,
        aiGuidance
      );
    }

    // Skills - reorder based on relevance and AI suggestions
    if (userExp.skills) {
      result.skills = this.prioritizeSkills(
        userExp.skills,
        aiGuidance,
        request.application.job_post
      );
    }

    // Education - format from user data
    if (userExp.education) {
      result.education = userExp.education.map((edu) => {
        const startDate = new Date(edu.start_date).toLocaleDateString('en-US', {
          year: 'numeric',
        });
        const endDate = edu.end_date
          ? new Date(edu.end_date).toLocaleDateString('en-US', {
              year: 'numeric',
            })
          : 'Present';

        return {
          degree: edu.major,
          institution: edu.institution,
          dates: `${startDate} - ${endDate}`,
        };
      });
    }

    // Personal projects
    if (userExp.personal_projects) {
      result.personalProjects = userExp.personal_projects;
    }

    // Certifications
    if (userExp.certifications) {
      result.certifications = userExp.certifications.map(
        (cert) =>
          `${cert.name} - ${cert.issuer}${cert.date ? ` (${cert.date})` : ''}`
      );
    }

    // ✨ NEW: Detect and apply content modifications
    const replacements = this.detectSimpleReplacements(request.userMessage);
    const removals = this.detectRemovals(request.userMessage);
    const filters = this.detectFilters(request.userMessage);

    // Apply filters first (keep only operations)
    if (filters.length > 0) {
      const skillsBefore = result.skills.length;
      const afterFilter = this.applyFilters(result, filters);
      
      // Update result with filtered content
      Object.assign(result, afterFilter);
      
      // Track what was filtered
      filters.forEach(({ criteria, section }) => {
        const skillsAfter = result.skills.length;
        const removed = skillsBefore - skillsAfter;
        const sectionText = section || 'skills';
        result.modificationsApplied?.push(
          `Filtered ${sectionText} to keep only "${criteria}" (removed ${removed} skills)`
        );
      });
    }

    // Apply replacements
    if (replacements.length > 0) {
      const beforeModification = { ...result };
      const afterModification = this.applyReplacements(result, replacements);
      
      // Update result with modified content
      Object.assign(result, afterModification);
      
      // Track what was changed
      replacements.forEach(({ oldValue, newValue }) => {
        result.modificationsApplied?.push(
          `Changed "${oldValue}" to "${newValue}"`
        );
      });
    }

    // Apply removals
    if (removals.length > 0) {
      const beforeRemoval = { ...result };
      const afterRemoval = this.applyRemovals(result, removals);
      
      // Update result with modified content
      Object.assign(result, afterRemoval);
      
      // Track what was removed
      removals.forEach(({ item, section }) => {
        const sectionText = section ? ` from ${section}` : '';
        result.modificationsApplied?.push(
          `Removed "${item}"${sectionText}`
        );
      });
    }

    return result;
  }

  /**
   * Extract guidance and keywords from AI response
   */
  private static extractAIGuidance(
    response: string,
    userMessage?: string,
  ): {
    emphasis: string[];
    keywords: string[];
    tone: string;
  } {
    const guidance = {
      emphasis: [] as string[],
      keywords: [] as string[],
      tone: 'professional',
    };

    if (!userMessage) {
      return guidance;
    }

    const messageLower = userMessage.toLowerCase();

    // Detect emphasis requests
    if (messageLower.includes('technical') || messageLower.includes('technology')) {
      guidance.emphasis.push('technical');
      guidance.tone = 'technical';
    }
    if (messageLower.includes('leadership') || messageLower.includes('manage')) {
      guidance.emphasis.push('leadership');
    }
    if (messageLower.includes('creative') || messageLower.includes('design')) {
      guidance.emphasis.push('creative');
    }
    if (messageLower.includes('data') || messageLower.includes('analytics')) {
      guidance.emphasis.push('data');
    }
    if (messageLower.includes('sales') || messageLower.includes('business development')) {
      guidance.emphasis.push('sales');
    }

    // Extract specific skills mentioned
    const skillPatterns = [
      /focus on (\w+)/gi,
      /emphasize (\w+)/gi,
      /highlight (\w+)/gi,
      /more about (\w+)/gi,
    ];

    skillPatterns.forEach((pattern) => {
      const matches = messageLower.matchAll(pattern);
      for (const match of matches) {
        if (match[1]) {
          guidance.keywords.push(match[1]);
        }
      }
    });

    return guidance;
  }

  /**
   * Enhance professional summary based on AI guidance
   */
  private static enhanceSummary(
    originalSummary: string,
    guidance: { emphasis: string[]; keywords: string[]; tone: string },
    skillGapAnalysis?: SkillGapAnalysis,
  ): string {
    let enhanced = originalSummary;

    // Add transferable skills framing using AI analysis
    const transferableSkillsText = this.generateTransferableSkillsText(skillGapAnalysis);
    if (transferableSkillsText) {
      // Add transferable skills framing to summary
      enhanced = enhanced.replace(/\.$/, `. ${transferableSkillsText}`);
    }

    // Apply emphasis - add relevant keywords naturally
    if (guidance.emphasis.includes('technical') && !enhanced.toLowerCase().includes('technical')) {
      enhanced = enhanced.replace(
        /\.(?!.*\.)/,  // Replace last period
        ', with strong technical expertise in modern technologies and best practices.'
      );
    }

    if (guidance.emphasis.includes('leadership') && !enhanced.toLowerCase().includes('leader')) {
      enhanced = enhanced.replace(
        /\.(?!.*\.)/,  // Replace last period
        ', demonstrated through effective team leadership and mentoring.'
      );
    }

    return enhanced;
  }

  /**
   * Generate transferable skills text for summary enhancement
   * Uses AI-powered skill gap analysis
   */
  private static generateTransferableSkillsText(
    skillGapAnalysis?: SkillGapAnalysis
  ): string {
    if (!skillGapAnalysis || skillGapAnalysis.transferableSkills.length === 0) {
      return '';
    }

    // Use AI-generated bridge language for top transferable skills
    const bridgeStatements = skillGapAnalysis.transferableSkills
      .filter(t => t.confidenceLevel === 'high' || t.confidenceLevel === 'medium')
      .slice(0, 2)
      .map(t => t.bridgeLanguage);

    return bridgeStatements.join('. ');
  }

  /**
   * Format work experience and prioritize relevant ones
   */
  private static formatWorkExperience(
    experiences: Array<{
      institution: string;
      role: string;
      start_date?: string;
      end_date?: string;
      summary?: string;
    }>,
    guidance: { emphasis: string[]; keywords: string[]; tone: string },
  ): Array<{
    title: string;
    company: string;
    dates: string;
    responsibilities: string[];
  }> {
    return experiences.map((exp) => {
      const startDate = exp.start_date
        ? new Date(exp.start_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
          })
        : 'N/A';
      const endDate = exp.end_date
        ? new Date(exp.end_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
          })
        : 'Present';

      // Split summary into bullet points
      let responsibilities = exp.summary
        ? exp.summary.split('\n').filter((line) => line.trim().length > 0)
        : [];

      // Prioritize responsibilities based on guidance
      if (guidance.emphasis.length > 0 || guidance.keywords.length > 0) {
        responsibilities = this.prioritizeResponsibilities(responsibilities, guidance);
      }

      return {
        title: exp.role,
        company: exp.institution,
        dates: `${startDate} - ${endDate}`,
        responsibilities,
      };
    });
  }

  /**
   * Prioritize responsibilities based on guidance
   */
  private static prioritizeResponsibilities(
    responsibilities: string[],
    guidance: { emphasis: string[]; keywords: string[]; tone: string },
  ): string[] {
    const scored = responsibilities.map((resp) => {
      let score = 0;
      const respLower = resp.toLowerCase();

      // Score based on emphasis
      guidance.emphasis.forEach((emphasis) => {
        if (respLower.includes(emphasis)) {
          score += 10;
        }
      });

      // Score based on keywords
      guidance.keywords.forEach((keyword) => {
        if (respLower.includes(keyword)) {
          score += 5;
        }
      });

      // Boost technical terms if technical emphasis
      if (guidance.emphasis.includes('technical')) {
        const techTerms = ['api', 'database', 'system', 'code', 'develop', 'architect', 'infrastructure'];
        techTerms.forEach((term) => {
          if (respLower.includes(term)) {
            score += 3;
          }
        });
      }

      // Boost leadership terms if leadership emphasis
      if (guidance.emphasis.includes('leadership')) {
        const leadershipTerms = ['led', 'managed', 'mentored', 'team', 'coordinated', 'supervised'];
        leadershipTerms.forEach((term) => {
          if (respLower.includes(term)) {
            score += 3;
          }
        });
      }

      return { resp, score };
    });

    // Sort by score (highest first) and return
    return scored
      .sort((a, b) => b.score - a.score)
      .map((item) => item.resp);
  }

  /**
   * Prioritize skills based on job posting and AI guidance
   */
  private static prioritizeSkills(
    skills: string[],
    guidance: { emphasis: string[]; keywords: string[]; tone: string },
    jobPost: string,
  ): string[] {
    const jobPostLower = jobPost.toLowerCase();
    
    const scored = skills.map((skill) => {
      let score = 0;
      const skillLower = skill.toLowerCase();

      // High priority: mentioned in job posting
      if (jobPostLower.includes(skillLower)) {
        score += 20;
      }

      // Medium priority: matches guidance keywords
      guidance.keywords.forEach((keyword) => {
        if (skillLower.includes(keyword.toLowerCase())) {
          score += 10;
        }
      });

      // Medium priority: matches emphasis
      guidance.emphasis.forEach((emphasis) => {
        if (skillLower.includes(emphasis)) {
          score += 8;
        }
      });

      // Boost relevant categories
      if (guidance.emphasis.includes('technical')) {
        const techSkills = ['javascript', 'python', 'java', 'react', 'node', 'sql', 'aws', 'docker', 'kubernetes'];
        if (techSkills.some((tech) => skillLower.includes(tech))) {
          score += 5;
        }
      }

      return { skill, score };
    });

    // Sort by score (highest first) and return
    return scored
      .sort((a, b) => b.score - a.score)
      .map((item) => item.skill);
  }

  private static async generateResumeHTML(
    response: string,
    request: ResumeGenerationRequest,
    skillGapAnalysis?: SkillGapAnalysis,
  ): Promise<string> {
    // Import HTML generation utilities
    const {
      generateResumeHeader,
      generateProfessionalSummary,
      generateWorkExperience,
      generateSkills,
      generateEducation,
      generatePersonalProjects,
      generateCertifications,
      generateTargetingFooter,
      assembleResumeContent,
    } = await import('./resume-html-generator');

    // Load the HTML template with styles
    const template = await ContentLoader.loadResumeTemplate();

    // Prepare contact information
    const contactParts: string[] = [];
    if (request.user.email) {
      contactParts.push(request.user.email);
    }
    if (request.user.phone) {
      contactParts.push(request.user.phone);
    }
    if (request.user.linkedin) {
      const linkedinUrl = request.user.linkedin.startsWith('http')
        ? request.user.linkedin
        : `linkedin.com/in/${request.user.linkedin}`;
      contactParts.push(`LinkedIn: ${linkedinUrl}`);
    }
    if (request.user.location) {
      contactParts.push(request.user.location);
    }
    const contact =
      contactParts.length > 0
        ? contactParts.join(' | ')
        : 'Contact information not provided';

    // Parse AI response to extract structured content
    const parsedContent = this.parseAIResponse(response, request, skillGapAnalysis);

    // Generate HTML sections
    const header = generateResumeHeader(request.user.name, contact);
    const summary = generateProfessionalSummary(parsedContent.summary);
    const experience = generateWorkExperience(parsedContent.workExperience);
    const skills = generateSkills(parsedContent.skills);
    const education = generateEducation(parsedContent.education);
    const projects = generatePersonalProjects(parsedContent.personalProjects);
    const certifications = generateCertifications(parsedContent.certifications);
    const footer = generateTargetingFooter(
      request.application.company_name,
      request.application.role
    );

    // Assemble complete resume content
    const resumeContent = assembleResumeContent({
      header,
      summary,
      experience,
      skills,
      education,
      projects,
      certifications,
      footer,
    });

    // Insert content into template
    const resumeHTML = ContentLoader.replacePlaceholders(template, {
      ROLE: request.application.role,
      CONTENT: resumeContent,
    });

    return resumeHTML;
  }

  private static generateSuggestions(
    request: ResumeGenerationRequest,
    skillGapAnalysis?: SkillGapAnalysis,
  ): string[] {
    const { userExperience } = request;
    const suggestions: string[] = [];

    // Check if user has no profile data at all
    if (!userExperience || !this.hasUserExperience(userExperience)) {
      suggestions.push(...global_suggestions_list.profile);
      return suggestions;
    }

    // ✨ NEW: Add Quick Win suggestions from AI skill gap analysis
    const quickWins = this.generateQuickWinSuggestions(skillGapAnalysis);
    if (quickWins.length > 0) {
      suggestions.push(...quickWins);
    }

    // Check for missing professional summary
    if (!userExperience.professional_summary?.trim()) {
      suggestions.push(...global_suggestions_list.professional_summary);
    }

    // Check for missing or insufficient work experience
    if (!userExperience.work_experience || userExperience.work_experience.length === 0) {
      suggestions.push('Add your work experience to showcase your professional background');
    } else {
      // Check if work experience descriptions are too short
      const hasShortDescriptions = userExperience.work_experience.some(
        (exp) => !exp.summary || exp.summary.trim().length < 50
      );
      if (hasShortDescriptions) {
        suggestions.push('Add more detailed descriptions to your work experience entries');
      }

      // Check if work experience has quantifiable achievements
      const hasQuantifiableAchievements = userExperience.work_experience.some(
        (exp) => exp.summary && /\d+/.test(exp.summary), // Check if summary contains numbers
      );

      if (!hasQuantifiableAchievements) {
        suggestions.push(...global_suggestions_list.qualifiable);
      }
    }

    // Check for missing or insufficient skills
    if (!userExperience.skills || userExperience.skills.length === 0) {
      suggestions.push('Add skills to your profile to match job requirements');
    } else if (userExperience.skills.length < 5) {
      suggestions.push(...global_suggestions_list.skills);
    }

    // Check for missing education
    if (!userExperience.education || userExperience.education.length === 0) {
      suggestions.push('Add your educational background to complete your profile');
    }

    // Check for missing personal projects
    if (!userExperience.personal_projects || userExperience.personal_projects.length === 0) {
      suggestions.push('Consider adding personal projects to demonstrate your skills and initiative');
    }

    // Check for missing certifications
    if (
      !userExperience.certifications ||
      userExperience.certifications.length === 0
    ) {
      suggestions.push(...global_suggestions_list.certifications);
    }

    // Check for missing contact information
    const { user } = request;
    if (!user.phone) {
      suggestions.push('Add your phone number for recruiters to contact you');
    }
    if (!user.linkedin) {
      suggestions.push('Add your LinkedIn profile to strengthen your professional presence');
    }
    if (!user.location) {
      suggestions.push('Add your location to help with location-specific job searches');
    }

    // Always include general suggestions
    suggestions.push(...global_suggestions_list.general);

    // Return top 6 suggestions (increased from 5 to show more helpful info)
    return suggestions.slice(0, 6);
  }

  /**
   * Generate Quick Win suggestions for skill gaps
   * Uses AI-powered skill gap analysis
   */
  private static generateQuickWinSuggestions(
    skillGapAnalysis?: SkillGapAnalysis
  ): string[] {
    if (!skillGapAnalysis || skillGapAnalysis.quickWins.length === 0) {
      return [];
    }

    // Use AI-generated quick wins, prioritize minimal/moderate effort ones
    const quickWins = skillGapAnalysis.quickWins
      .filter(qw => qw.effort === 'minimal' || qw.effort === 'moderate')
      .slice(0, 2)
      .map(qw => {
        const emoji = qw.effort === 'minimal' ? '💡' : '🎯';
        return `${emoji} ${qw.suggestion}`;
      });

    return quickWins;
  }
}

export { openai };
