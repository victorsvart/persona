import OpenAI from 'openai';
import { ContentLoader } from './content-loader';

// Validate API key
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('OPENAI_API_KEY environment variable is required');
}

// Initialize OpenAI client with best practices
const openai = new OpenAI({
  apiKey,
  maxRetries: 3, // Retry failed requests up to 3 times
  timeout: 60000, // 60 second timeout
});

// Configuration for OpenAI model
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
}

export interface StreamChunk {
  type: 'content' | 'done' | 'error';
  content?: string;
  suggestions?: string[];
  resumeContent?: string;
  error?: string;
}

// Custom error class for OpenAI errors
export class OpenAIError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly statusCode?: number,
    public readonly originalError?: unknown
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
    if (!request.application?.company_name || !request.application?.role || !request.application?.job_post) {
      throw new OpenAIError('Missing required application information', 'INVALID_REQUEST', 400);
    }

    if (!request.user?.name) {
      throw new OpenAIError('Missing required user information', 'INVALID_REQUEST', 400);
    }

    // Validate job post length (OpenAI token limits)
    if (request.application.job_post.length > 20000) {
      throw new OpenAIError('Job post is too long. Please provide a shorter version.', 'REQUEST_TOO_LARGE', 400);
    }
  }

  static async generateResume(request: ResumeGenerationRequest): Promise<ResumeGenerationResponse> {
    try {
      // Validate request
      this.validateRequest(request);

      const prompt = await this.buildPrompt(request);
      const systemPrompt = await this.getSystemPrompt();
      
      // Build messages array with conversation history if available
      const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
        {
          role: 'system',
          content: systemPrompt
        }
      ];

      // Add conversation history if present (for context continuity)
      if (request.conversationHistory && request.conversationHistory.length > 0) {
        // Limit history to last 10 messages to avoid token limits
        const recentHistory = request.conversationHistory.slice(-10);
        messages.push(...recentHistory);
      }

      // Add current user message
      messages.push({
        role: 'user',
        content: prompt
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
        throw new OpenAIError('Empty response from OpenAI', 'EMPTY_RESPONSE', 500);
      }

      // Check if response was truncated
      if (completion.choices[0]?.finish_reason === 'length') {
        console.warn('OpenAI response was truncated due to max_tokens limit');
      }

      // Parse the response to extract content and resume HTML
      const { content, resumeContent } = await this.parseResponse(response, request);

      return {
        content,
        resumeContent,
        suggestions: this.generateSuggestions(request),
      };
    } catch (error) {
      // Handle different types of errors appropriately
      if (error instanceof OpenAIError) {
        throw error;
      }

      // Handle OpenAI API errors
      if (error && typeof error === 'object' && 'status' in error) {
        const apiError = error as { status?: number; message?: string; code?: string };
        
        if (apiError.status === 429) {
          throw new OpenAIError(
            'Rate limit exceeded. Please try again in a few moments.',
            'RATE_LIMIT',
            429,
            error
          );
        }
        
        if (apiError.status === 401) {
          throw new OpenAIError(
            'Invalid API key configuration.',
            'INVALID_API_KEY',
            401,
            error
          );
        }

        if (apiError.status && apiError.status >= 500) {
          throw new OpenAIError(
            'OpenAI service is temporarily unavailable. Please try again later.',
            'SERVICE_UNAVAILABLE',
            apiError.status,
            error
          );
        }
      }

      // Log error for debugging (sanitize sensitive data)
      console.error('Error generating resume:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        company: request.application.company_name,
        role: request.application.role,
      });

      throw new OpenAIError(
        'Failed to generate resume. Please try again.',
        'GENERATION_FAILED',
        500,
        error
      );
    }
  }

  /**
   * Generate resume with streaming support
   * Returns an async generator that yields content chunks
   */
  static async *generateResumeStream(
    request: ResumeGenerationRequest
  ): AsyncGenerator<StreamChunk, void, unknown> {
    try {
      // Validate request
      this.validateRequest(request);

      const prompt = await this.buildPrompt(request);
      const systemPrompt = await this.getSystemPrompt();
      
      // Build messages array with conversation history if available
      const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
        {
          role: 'system',
          content: systemPrompt
        }
      ];

      // Add conversation history if present
      if (request.conversationHistory && request.conversationHistory.length > 0) {
        const recentHistory = request.conversationHistory.slice(-10);
        messages.push(...recentHistory);
      }

      // Add current user message
      messages.push({
        role: 'user',
        content: prompt
      });

      // Create streaming completion
      const stream = await openai.chat.completions.create({
        model: OPENAI_CONFIG.model,
        messages,
        temperature: OPENAI_CONFIG.temperature,
        max_tokens: OPENAI_CONFIG.maxTokens,
        presence_penalty: 0.1,
        frequency_penalty: 0.1,
        stream: true, // Enable streaming
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

        // Check if stream is done
        if (chunk.choices[0]?.finish_reason === 'stop') {
          // Parse the complete response
          const { resumeContent } = await this.parseResponse(fullContent, request);
          const suggestions = this.generateSuggestions(request);

          // Yield final chunk with resume and suggestions
          yield {
            type: 'done',
            content: fullContent,
            resumeContent,
            suggestions,
          };
        }
      }
    } catch (error) {
      // Handle errors
      let errorMessage = 'Failed to generate resume. Please try again.';
      let errorCode = 'GENERATION_FAILED';

      if (error instanceof OpenAIError) {
        errorMessage = error.message;
        errorCode = error.code || 'GENERATION_FAILED';
      } else if (error && typeof error === 'object' && 'status' in error) {
        const apiError = error as { status?: number; message?: string };
        
        if (apiError.status === 429) {
          errorMessage = 'Rate limit exceeded. Please try again in a few moments.';
          errorCode = 'RATE_LIMIT';
        } else if (apiError.status === 401) {
          errorMessage = 'Invalid API key configuration.';
          errorCode = 'INVALID_API_KEY';
        } else if (apiError.status && apiError.status >= 500) {
          errorMessage = 'OpenAI service is temporarily unavailable. Please try again later.';
          errorCode = 'SERVICE_UNAVAILABLE';
        }
      }

      // Log error
      console.error('Error streaming resume:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        company: request.application.company_name,
        role: request.application.role,
      });

      // Yield error chunk
      yield {
        type: 'error',
        error: errorMessage,
      };
    }
  }

  private static async buildPrompt(request: ResumeGenerationRequest): Promise<string> {
    const { application, userExperience, userMessage } = request;
    
    // Load the main prompt template
    const promptTemplate = await ContentLoader.loadResumeGenerationPrompt();
    
    // Build user experience section
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
          workExperienceSection += `${index + 1}. ${exp.role} at ${exp.institution} (${startDate} - ${endDate})\n`;
          if (exp.summary?.trim()) {
            workExperienceSection += `   ${exp.summary.trim()}\n`;
          }
        });
      }
      
      let skillsSection = '';
      if (userExperience.skills?.length) {
        const validSkills = userExperience.skills.filter(s => s?.trim());
        if (validSkills.length > 0) {
          skillsSection = `**Skills:** ${validSkills.join(', ')}`;
        }
      }
      
      let educationSection = '';
      if (userExperience.education?.length) {
        educationSection = `**Education:**\n`;
        userExperience.education.forEach((edu, index) => {
          const endDate = edu.end_date || 'Present';
          educationSection += `${index + 1}. ${edu.major} at ${edu.institution} (${edu.start_date} - ${endDate})\n`;
        });
      }

      let certificationsSection = '';
      if (userExperience.certifications?.length) {
        certificationsSection = `**Certifications:**\n`;
        userExperience.certifications.forEach((cert, index) => {
          certificationsSection += `${index + 1}. ${cert.name} - ${cert.issuer}`;
          if (cert.date) {
            certificationsSection += ` (${cert.date})`;
          }
          certificationsSection += '\n';
        });
      }
      
      userExperienceSection = ContentLoader.replacePlaceholders(userExpTemplate, {
        PROFESSIONAL_SUMMARY_SECTION: professionalSummarySection,
        WORK_EXPERIENCE_SECTION: workExperienceSection,
        SKILLS_SECTION: skillsSection,
        EDUCATION_SECTION: educationSection,
        CERTIFICATIONS_SECTION: certificationsSection,
      });
    }
    
    // Build user request section
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
  private static hasUserExperience(userExperience?: ResumeGenerationRequest['userExperience']): boolean {
    if (!userExperience) return false;
    
    return !!(
      userExperience.professional_summary?.trim() ||
      (userExperience.work_experience && userExperience.work_experience.length > 0) ||
      (userExperience.skills && userExperience.skills.length > 0) ||
      (userExperience.education && userExperience.education.length > 0) ||
      (userExperience.certifications && userExperience.certifications.length > 0)
    );
  }

  private static async parseResponse(response: string, request: ResumeGenerationRequest): Promise<{ content: string; resumeContent: string }> {
    // Extract the main content (chat response)
    const content = response;

    // Generate the resume HTML by replacing placeholders
    const resumeContent = await this.generateResumeHTML(response, request);

    return { content, resumeContent };
  }

  private static async generateResumeHTML(response: string, request: ResumeGenerationRequest): Promise<string> {
    // Load the templates
    const template = await ContentLoader.loadResumeTemplate();
    const contentTemplate = await ContentLoader.loadResumeContentTemplate();
    
    // Build contact information from user data
    const contactParts: string[] = [];
    
    if (request.user.email) {
      contactParts.push(request.user.email);
    }
    
    if (request.user.phone) {
      contactParts.push(request.user.phone);
    }
    
    if (request.user.linkedin) {
      // Format LinkedIn URL if it's not already a full URL
      const linkedinUrl = request.user.linkedin.startsWith('http') 
        ? request.user.linkedin 
        : `linkedin.com/in/${request.user.linkedin}`;
      contactParts.push(`LinkedIn: ${linkedinUrl}`);
    }
    
    if (request.user.location) {
      contactParts.push(request.user.location);
    }
    
    const contact = contactParts.length > 0 
      ? contactParts.join(' | ') 
      : 'Contact information not provided';
    
    // Generate the resume content using the external template
    const resumeContent = ContentLoader.replacePlaceholders(contentTemplate, {
      NAME: request.user.name,
      CONTACT: contact,
      TARGET_ROLE: request.application.role,
      TARGET_COMPANY: request.application.company_name,
      TARGET_COMPANY_UPPER: request.application.company_name.toUpperCase(),
    });
    
    // Generate the complete resume HTML
    const resumeHTML = ContentLoader.replacePlaceholders(template, {
      ROLE: request.application.role,
      CONTENT: resumeContent,
    });

    return resumeHTML;
  }

  private static generateSuggestions(request: ResumeGenerationRequest): string[] {
    const suggestions: string[] = [];
    const { userExperience } = request;

    // Dynamic suggestions based on what's missing or could be improved
    if (!userExperience || !this.hasUserExperience(userExperience)) {
      suggestions.push("Add your professional experience to create a more personalized resume");
      suggestions.push("Include your skills to better match job requirements");
      suggestions.push("Add your education background for a complete profile");
      return suggestions;
    }

    if (!userExperience.professional_summary?.trim()) {
      suggestions.push("Consider adding a professional summary to highlight your key strengths");
    }

    if (!userExperience.skills || userExperience.skills.length < 5) {
      suggestions.push("Add more relevant skills mentioned in the job posting");
    }

    if (!userExperience.certifications || userExperience.certifications.length === 0) {
      suggestions.push("Include relevant certifications to strengthen your profile");
    }

    // Check if work experience has quantifiable achievements
    const hasQuantifiableAchievements = userExperience.work_experience?.some(exp => 
      exp.summary && /\d+/.test(exp.summary) // Check if summary contains numbers
    );

    if (!hasQuantifiableAchievements) {
      suggestions.push("Add quantifiable achievements (e.g., increased sales by 30%, led team of 5)");
    }

    // Generic helpful suggestions
    suggestions.push("Review for keywords from the job description");
    suggestions.push("Ensure your most relevant experience is highlighted");
    suggestions.push("Consider tailoring your professional summary for this specific role");

    // Return top 5 suggestions
    return suggestions.slice(0, 5);
  }
}

export { openai };
