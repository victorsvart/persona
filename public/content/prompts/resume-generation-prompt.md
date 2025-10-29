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
6. **APPLIES ANY SPECIFIC USER REQUESTS** (if provided above)

## Instructions for User Requests:

**If the user has requested specific changes or emphasis**, you MUST apply those changes by providing guidance on:

1. **Professional Summary**: How should it be rewritten? What should be emphasized?
2. **Work Experience**: Which responsibilities should be highlighted? What language should be used?
3. **Skills**: Which skills should be featured? In what order?
4. **Tone & Style**: What adjustments to language and presentation?

**Examples:**
- If user says "make it more technical" → suggest emphasizing technical achievements, using technical terminology
- If user says "focus on leadership" → suggest highlighting team management, mentoring experiences
- If user says "emphasize [X skill]" → suggest placing that skill prominently and relating experiences to it

Provide your response as structured guidance that will be used to tailor the user's actual profile data.
