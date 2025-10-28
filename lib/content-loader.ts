import { loadPublicFile } from './utils';

export class ContentLoader {
  private static contentCache = new Map<
    string,
    { content: string; timestamp: number }
  >();
  private static readonly CACHE_TTL = 1000 * 60 * 60; // 1 hour cache TTL in production
  private static readonly isDevelopment =
    process.env.NODE_ENV === 'development';

  /**
   * Load content from a markdown or HTML file
   * This works in both server and client environments
   */
  static async loadContent(filePath: string): Promise<string> {
    // In development, skip cache to allow for hot reloading
    if (!this.isDevelopment) {
      // Check cache first
      const cached = this.contentCache.get(filePath);
      if (cached) {
        const age = Date.now() - cached.timestamp;
        if (age < this.CACHE_TTL) {
          return cached.content;
        } else {
          // Cache expired, remove it
          this.contentCache.delete(filePath);
        }
      }
    }

    try {
      let content: string = await loadPublicFile(filePath);
      if (!content || content.trim().length === 0) {
        throw new Error(`Content file is empty: ${filePath}`);
      }

      // Cache the content
      if (!this.isDevelopment) {
        this.contentCache.set(filePath, {
          content,
          timestamp: Date.now(),
        });
      }

      return content;
    } catch (error) {
      console.error(`Error loading content from ${filePath}:`, {
        message: error instanceof Error ? error.message : 'Unknown error',
        filePath,
      });

      if (error instanceof Error) {
        throw error;
      }

      throw new Error(`Failed to load content from ${filePath}`);
    }
  }

  /**
   * Load system prompt for resume generation
   */
  static async loadSystemPrompt(): Promise<string> {
    return this.loadContent('prompts/system-prompt.md');
  }

  /**
   * Load resume HTML template
   */
  static async loadResumeTemplate(): Promise<string> {
    return this.loadContent('templates/resume-template.html');
  }

  /**
   * Load resume content template
   */
  static async loadResumeContentTemplate(): Promise<string> {
    return this.loadContent('templates/resume-content-template.html');
  }

  /**
   * Load chatbot welcome message
   */
  static async loadWelcomeMessage(): Promise<string> {
    return this.loadContent('prompts/chatbot-welcome.md');
  }

  /**
   * Load resume generation prompt template
   */
  static async loadResumeGenerationPrompt(): Promise<string> {
    return this.loadContent('prompts/resume-generation-prompt.md');
  }

  /**
   * Load user experience template
   */
  static async loadUserExperienceTemplate(): Promise<string> {
    return this.loadContent('prompts/user-experience-template.md');
  }

  /**
   * Replace placeholders in content with actual values
   */
  static replacePlaceholders(
    content: string,
    replacements: Record<string, string>,
  ): string {
    let result = content;

    for (const [placeholder, value] of Object.entries(replacements)) {
      const regex = new RegExp(`{{${placeholder}}}`, 'g');
      result = result.replace(regex, value);
    }

    return result;
  }

  /**
   * Clear the content cache (useful for development)
   */
  static clearCache(): void {
    this.contentCache.clear();
  }
}
