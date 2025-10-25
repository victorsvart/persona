# Resume Generation Prompt Template

Generate a professional resume for the following job application:

## JOB POSTING:
**Company:** {{COMPANY_NAME}}
**Role:** {{ROLE}}
**Job Description:** {{JOB_DESCRIPTION}}

{{USER_EXPERIENCE_SECTION}}

{{USER_REQUEST_SECTION}}

## Requirements:
Please generate a professional resume that:
1. Is tailored specifically for this {{ROLE}} position at {{COMPANY_NAME}}
2. Incorporates relevant keywords from the job posting
3. Highlights the most relevant experience and skills
4. Uses professional formatting suitable for A4 printing
5. Is optimized for ATS systems
6. Fits on one page

## Output Format:
Return the resume content in HTML format using this structure:
- Header with name and contact information
- Professional Summary
- Professional Experience (with quantifiable achievements)
- Key Skills (matching job requirements)
- Education
- Certifications (if relevant)
- A note about being tailored for this specific application

## Template Placeholders:
Use the following placeholders in your HTML:
- `{{NAME}}` for the candidate's name
- `{{CONTACT}}` for contact information
- `{{SUMMARY}}` for professional summary
- `{{EXPERIENCE}}` for work experience
- `{{SKILLS}}` for skills section
- `{{EDUCATION}}` for education
- `{{CERTIFICATIONS}}` for certifications
- `{{TARGET_COMPANY}}` for the target company
- `{{TARGET_ROLE}}` for the target role
