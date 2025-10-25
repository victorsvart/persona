# Content Files

This directory contains all the external content files used by the resume generation system. This approach makes it easy to maintain and update prompts, templates, and other content without modifying the code.

## Structure

```
public/content/
├── prompts/
│   ├── system-prompt.md                    # Main system prompt for resume generation
│   ├── chatbot-welcome.md                  # Welcome message for the chatbot
│   ├── resume-generation-prompt.md         # Main prompt template for resume generation
│   └── user-experience-template.md         # Template for user experience section
├── templates/
│   ├── resume-template.html                # HTML template for resume generation
│   └── resume-content-template.html        # Resume content template
└── README.md                               # This file
```

## Files

### `prompts/system-prompt.md`
Contains the main system prompt that guides the AI in generating resumes. This includes:
- Key guidelines for resume creation
- ATS optimization instructions
- Job tailoring requirements
- Output format specifications
- Template placeholder documentation

### `prompts/chatbot-welcome.md`
Contains the welcome message displayed when users first open the resume chatbot. Supports placeholders:
- `{{ROLE}}` - The job role
- `{{COMPANY_NAME}}` - The company name

### `prompts/resume-generation-prompt.md`
Contains the main prompt template used when generating resumes. This includes:
- Job posting information structure
- User experience section placeholder
- User request section placeholder
- Resume generation requirements
- Output format specifications
- Template placeholders:
  - `{{COMPANY_NAME}}` - The company name
  - `{{ROLE}}` - The job role
  - `{{JOB_DESCRIPTION}}` - The job description
  - `{{USER_EXPERIENCE_SECTION}}` - The user experience section
  - `{{USER_REQUEST_SECTION}}` - The user request section

### `prompts/user-experience-template.md`
Contains the template for formatting user experience information. This includes:
- Professional summary section
- Work experience section
- Skills section
- Education section
- Template placeholders:
  - `{{PROFESSIONAL_SUMMARY_SECTION}}` - Professional summary content
  - `{{WORK_EXPERIENCE_SECTION}}` - Work experience content
  - `{{SKILLS_SECTION}}` - Skills content
  - `{{EDUCATION_SECTION}}` - Education content

### `templates/resume-template.html`
Contains the HTML template used for resume generation. This includes:
- Complete HTML structure with CSS styling
- A4 page optimization
- Print-friendly formatting
- Placeholder support for dynamic content
- Template placeholders:
  - `{{ROLE}}` - The job role
  - `{{CONTENT}}` - The resume content

### `templates/resume-content-template.html`
Contains the template for the actual resume content (inside the main template). This includes:
- Header with name and contact information
- Professional summary section
- Work experience section
- Skills section
- Education section
- Certifications section
- Job targeting information
- Template placeholders:
  - `{{NAME}}` - The candidate's name
  - `{{CONTACT}}` - Contact information
  - `{{TARGET_ROLE}}` - The target job role
  - `{{TARGET_COMPANY}}` - The target company
  - `{{TARGET_COMPANY_UPPER}}` - The target company in uppercase

## Usage

The content is loaded using the `ContentLoader` class in `/lib/content-loader.ts`. This class:
- Caches content for performance
- Works in both server and client environments
- Supports placeholder replacement
- Handles errors gracefully

## Adding New Content

1. Create your markdown or HTML file in the appropriate subdirectory
2. Add a method to `ContentLoader` to load the content
3. Use `ContentLoader.replacePlaceholders()` to replace placeholders
4. Update this README to document the new content

## Placeholders

All content files support placeholder replacement using the format `{{PLACEHOLDER_NAME}}`. The `ContentLoader.replacePlaceholders()` method can replace multiple placeholders at once.

## Benefits

- **Maintainability**: Content can be updated without code changes
- **Version Control**: Content changes are tracked separately from code
- **Collaboration**: Non-technical team members can update content
- **Performance**: Content is cached for better performance
- **Flexibility**: Easy to add new content types and languages
- **Single Source**: All content is in one location (`public/content/`)