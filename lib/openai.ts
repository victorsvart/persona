import OpenAI from 'openai';
import { ContentLoader } from './content-loader';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export interface ResumeGenerationRequest {
  application: {
    company_name: string;
    role: string;
    job_post: string;
  };
  user: {
    name: string;
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
  };
  userMessage?: string;
}

export interface ResumeGenerationResponse {
  content: string;
  resumeContent: string;
  suggestions?: string[];
}


export class ResumeAgent {
  private static async getSystemPrompt(): Promise<string> {
    return ContentLoader.loadSystemPrompt();
  }

  static async generateResume(request: ResumeGenerationRequest): Promise<ResumeGenerationResponse> {
    try {
      const prompt = await this.buildPrompt(request);
      const systemPrompt = await this.getSystemPrompt();
      
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 4000,
      });

      const response = completion.choices[0]?.message?.content;
      if (!response) {
        throw new Error('No response from OpenAI');
      }

      // Parse the response to extract content and resume HTML
      const { content, resumeContent } = await this.parseResponse(response, request);

      return {
        content,
        resumeContent,
        suggestions: this.generateSuggestions()
      };
    } catch (error) {
      console.error('Error generating resume:', error);
      throw new Error('Failed to generate resume. Please try again.');
    }
  }

  private static async buildPrompt(request: ResumeGenerationRequest): Promise<string> {
    const { application, userExperience, userMessage } = request;
    
    // Load the main prompt template
    const promptTemplate = await ContentLoader.loadResumeGenerationPrompt();
    
    // Build user experience section
    let userExperienceSection = '';
    if (userExperience) {
      const userExpTemplate = await ContentLoader.loadUserExperienceTemplate();
      
      let professionalSummarySection = '';
      if (userExperience.professional_summary) {
        professionalSummarySection = `**Professional Summary:** ${userExperience.professional_summary}`;
      }
      
      let workExperienceSection = '';
      if (userExperience.work_experience?.length) {
        workExperienceSection = `**Work Experience:**\n`;
        userExperience.work_experience.forEach((exp, index) => {
          workExperienceSection += `${index + 1}. ${exp.role} at ${exp.institution} (${exp.start_date} - ${exp.end_date || 'Present'})\n`;
          if (exp.summary) workExperienceSection += `   Summary: ${exp.summary}\n`;
        });
      }
      
      let skillsSection = '';
      if (userExperience.skills?.length) {
        skillsSection = `**Skills:** ${userExperience.skills.join(', ')}`;
      }
      
      let educationSection = '';
      if (userExperience.education?.length) {
        educationSection = `**Education:**\n`;
        userExperience.education.forEach((edu, index) => {
          educationSection += `${index + 1}. ${edu.major} at ${edu.institution} (${edu.start_date} - ${edu.end_date || 'Present'})\n`;
        });
      }
      
      userExperienceSection = ContentLoader.replacePlaceholders(userExpTemplate, {
        PROFESSIONAL_SUMMARY_SECTION: professionalSummarySection,
        WORK_EXPERIENCE_SECTION: workExperienceSection,
        SKILLS_SECTION: skillsSection,
        EDUCATION_SECTION: educationSection,
      });
    }
    
    // Build user request section
    let userRequestSection = '';
    if (userMessage) {
      userRequestSection = `## USER REQUEST: ${userMessage}`;
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
    
    // Extract information from the response and build the HTML
    // This is a simplified version - in practice, you'd parse the response more carefully
    
    const name = request.user.name; // Use user's name from the request
    const contact = "your.email@example.com | (555) 123-4567 | LinkedIn: linkedin.com/in/yourprofile";
    
    // Generate the resume content using the external template
    const resumeContent = ContentLoader.replacePlaceholders(contentTemplate, {
      NAME: name,
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

  private static generateSuggestions(): string[] {
    return [
      "Consider adding more quantifiable achievements to your experience",
      "Include specific technologies mentioned in the job posting",
      "Highlight leadership or team collaboration examples",
      "Add relevant certifications or training",
      "Consider including a cover letter for this application"
    ];
  }
}

export { openai };
