import type { 
  WorkExperience, 
  Education, 
  Project, 
  Skill, 
  Certification, 
  Language 
} from '@prisma/client';

interface UserProfileData {
  workExperiences: WorkExperience[];
  educations: Education[];
  projects: Project[];
  skills: Skill[];
  certifications: Certification[];
  languages: Language[];
}

interface ApplicationContext {
  company: string;
  role: string;
  jobDescription: string;
}

export function generateResumeSystemPrompt(
  profile: UserProfileData,
  application: ApplicationContext
): string {
  return `You are an expert resume writer and career consultant specializing in creating ATS-optimized, tailored resumes. Your role is to help the user create a compelling resume specifically for the position they're applying for.

## APPLICATION CONTEXT
**Target Company:** ${application.company}
**Target Role:** ${application.role}
**Job Description:**
${application.jobDescription}

## USER PROFILE DATA

### Work Experience (${profile.workExperiences.length} entries)
${formatWorkExperiences(profile.workExperiences)}

### Education (${profile.educations.length} entries)
${formatEducation(profile.educations)}

### Projects (${profile.projects.length} entries)
${formatProjects(profile.projects)}

### Skills (${profile.skills.length} entries)
${formatSkills(profile.skills)}

### Certifications (${profile.certifications.length} entries)
${formatCertifications(profile.certifications)}

### Languages (${profile.languages.length} entries)
${formatLanguages(profile.languages)}

## YOUR RESPONSIBILITIES

1. **Analyze the Job Requirements**: Carefully review the job description and identify key requirements, skills, and qualifications.

2. **Tailor the Resume**: 
   - Select the most relevant experiences, skills, and projects from the user's profile
   - Prioritize content that matches the job requirements
   - Adjust achievement descriptions to emphasize relevant outcomes
   - Use keywords from the job description naturally

3. **Generate HTML Resume**:
   - Use semantic HTML5 (header, section, article, ul, li, etc.)
   - Structure: Header (name/contact) → Professional Summary → Work Experience → Education → Projects → Skills → Certifications → Languages
   - Include ONLY sections with relevant data
   - Do NOT include any CSS, inline styles, or style attributes
   - Do NOT include <html>, <head>, or <body> tags - only the content
   - Use appropriate heading levels (h1 for name, h2 for sections, h3 for job titles)
   - Format dates as "Month Year" (e.g., "January 2020")
   - Make it ATS-friendly with clear structure and standard section names

4. **Professional Summary**:
   - Craft a 2-3 sentence summary highlighting the most relevant experience
   - Align it with the target role
   - Make it compelling and specific

5. **Conversational Support**:
   - Answer questions about resume strategy
   - Explain your tailoring decisions
   - Suggest improvements
   - Iterate on the resume based on feedback
   - When generating/updating HTML, output ONLY the HTML without explanations unless asked

## OUTPUT FORMAT

When generating or updating the resume:
- Output ONLY the HTML code
- Start with <header> tag (for name and contact)
- Use semantic structure throughout
- No CSS, no styling, no style attributes
- Clean, readable, well-indented HTML

When discussing or explaining:
- Be conversational and helpful
- Explain your reasoning
- Suggest specific improvements

## EXAMPLE STRUCTURE

\`\`\`html
<header>
  <h1>Full Name</h1>
  <p>Email | Phone | Location | LinkedIn | Portfolio</p>
</header>

<section>
  <h2>Professional Summary</h2>
  <p>Compelling 2-3 sentence summary tailored to the role...</p>
</section>

<section>
  <h2>Work Experience</h2>
  <article>
    <h3>Job Title</h3>
    <p>Company Name | Location | Month Year – Present</p>
    <ul>
      <li>Achievement with quantifiable impact...</li>
      <li>Relevant accomplishment aligned with target role...</li>
    </ul>
  </article>
</section>

<!-- Additional sections as needed -->
\`\`\`

Begin by introducing yourself and asking if the user would like you to generate the initial resume draft or if they have specific requirements first.`;
}

function formatWorkExperiences(experiences: WorkExperience[]): string {
  if (experiences.length === 0) return 'No work experience provided.';
  
  return experiences
    .map((exp, idx) => {
      const endDate = exp.isCurrentRole ? 'Present' : formatDate(exp.endDate);
      return `
${idx + 1}. **${exp.position}** at **${exp.company}**
   - Employment Type: ${exp.employmentType || 'Not specified'}
   - Location: ${exp.location || 'Not specified'} (${exp.locationType || 'Not specified'})
   - Duration: ${formatDate(exp.startDate)} – ${endDate}
   - Description: ${exp.description || 'No description'}
   - Achievements:
${exp.achievements.map((a) => `     • ${a}`).join('\n')}`;
    })
    .join('\n\n');
}

function formatEducation(educations: Education[]): string {
  if (educations.length === 0) return 'No education provided.';
  
  return educations
    .map((edu, idx) => {
      const endDate = edu.isCurrentlyEnrolled ? 'Present' : formatDate(edu.endDate);
      return `
${idx + 1}. **${edu.degree}** in **${edu.fieldOfStudy}**
   - Institution: ${edu.institution}
   - Location: ${edu.location || 'Not specified'}
   - Duration: ${formatDate(edu.startDate)} – ${endDate}
   - GPA: ${edu.gpa || 'Not specified'}
   - Honors: ${edu.honors || 'None'}
   - Activities: ${edu.activities.length > 0 ? edu.activities.join(', ') : 'None'}
   - Relevant Coursework: ${edu.coursework.length > 0 ? edu.coursework.join(', ') : 'None'}`;
    })
    .join('\n\n');
}

function formatProjects(projects: Project[]): string {
  if (projects.length === 0) return 'No projects provided.';
  
  return projects
    .map((proj, idx) => {
      const duration = proj.startDate 
        ? `${formatDate(proj.startDate)} – ${proj.isOngoing ? 'Present' : formatDate(proj.endDate)}`
        : 'Duration not specified';
      return `
${idx + 1}. **${proj.name}**
   - Role: ${proj.role || 'Not specified'}
   - Duration: ${duration}
   - Description: ${proj.description}
   - Technologies: ${proj.technologies.join(', ')}
   - URL: ${proj.url || 'Not provided'}
   - GitHub: ${proj.githubUrl || 'Not provided'}
   - Highlights:
${proj.highlights.map((h) => `     • ${h}`).join('\n')}`;
    })
    .join('\n\n');
}

function formatSkills(skills: Skill[]): string {
  if (skills.length === 0) return 'No skills provided.';
  
  // Group by category
  const byCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
  
  return Object.entries(byCategory)
    .map(([category, categorySkills]) => {
      const skillsList = categorySkills
        .map((s) => {
          const details = [];
          if (s.proficiency) details.push(`Proficiency: ${s.proficiency}`);
          if (s.yearsOfExperience) details.push(`${s.yearsOfExperience} years`);
          return `   • ${s.name}${details.length > 0 ? ` (${details.join(', ')})` : ''}`;
        })
        .join('\n');
      return `**${category}:**\n${skillsList}`;
    })
    .join('\n\n');
}

function formatCertifications(certifications: Certification[]): string {
  if (certifications.length === 0) return 'No certifications provided.';
  
  return certifications
    .map((cert, idx) => {
      const expiration = cert.doesNotExpire 
        ? 'Does not expire' 
        : cert.expirationDate 
          ? `Expires: ${formatDate(cert.expirationDate)}`
          : 'Expiration not specified';
      return `
${idx + 1}. **${cert.name}**
   - Issuing Organization: ${cert.issuingOrganization}
   - Issue Date: ${formatDate(cert.issueDate)}
   - Expiration: ${expiration}
   - Credential ID: ${cert.credentialId || 'Not provided'}
   - Credential URL: ${cert.credentialUrl || 'Not provided'}`;
    })
    .join('\n\n');
}

function formatLanguages(languages: Language[]): string {
  if (languages.length === 0) return 'No languages provided.';
  
  return languages
    .map((lang, idx) => `${idx + 1}. ${lang.name} - ${lang.proficiency}`)
    .join('\n');
}

function formatDate(date: Date | null | undefined): string {
  if (!date) return 'Not specified';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

