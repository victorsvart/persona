export class ContentLoader {
  private static contentCache = new Map<string, string>();

  /**
   * Load content from a markdown or HTML file
   * This works in both server and client environments
   */
  static async loadContent(filePath: string): Promise<string> {
    // Check cache first
    if (this.contentCache.has(filePath)) {
      return this.contentCache.get(filePath)!;
    }

    try {
      let content: string;
      
      // Check if we're running on the server
      if (typeof window === 'undefined') {
        // Server-side: use file system
        const { readFileSync } = await import('fs');
        const { join } = await import('path');
        const fullPath = join(process.cwd(), 'public', 'content', filePath);
        content = readFileSync(fullPath, 'utf-8');
      } else {
        // Client-side: use fetch
        const response = await fetch(`/content/${filePath}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch content: ${response.statusText}`);
        }
        content = await response.text();
      }
      
      // Cache the content
      this.contentCache.set(filePath, content);
      
      return content;
    } catch (error) {
      console.error(`Error loading content from ${filePath}:`, error);
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
  static replacePlaceholders(content: string, replacements: Record<string, string>): string {
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
