/**
 * HTML Generation utilities for AI-powered resume generation
 * These functions take AI-generated content and format it into styled HTML
 */

interface WorkExperience {
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  institution: string;
  dates: string;
}

interface PersonalProject {
  name: string;
  year: number;
  description: string;
}

/**
 * Generate HTML for resume header with contact info
 * ATS-friendly format with clear hierarchy
 */
export function generateResumeHeader(name: string, contact: string): string {
  return `<div class="header">
  <div class="name">${escapeHtml(name)}</div>
  <div class="contact">${escapeHtml(contact)}</div>
</div>`;
}

/**
 * Generate HTML for professional summary section
 * ATS-friendly with clear section heading
 */
export function generateProfessionalSummary(summary: string): string {
  if (!summary?.trim()) return '';
  
  return `<div class="section">
  <div class="section-title">Professional Summary</div>
  <div class="summary-text">${escapeHtml(summary.trim())}</div>
</div>`;
}

/**
 * Generate HTML for work experience section
 * ATS-friendly format with clear structure
 */
export function generateWorkExperience(experiences: WorkExperience[]): string {
  if (!experiences || experiences.length === 0) return '';
  
  const experienceItems = experiences.map(exp => {
    const responsibilities = exp.responsibilities.length > 0
      ? exp.responsibilities.map(resp => `• ${escapeHtml(resp)}`).join('<br>\n      ')
      : '';
    
    return `  <div class="job">
    <div class="job-header">
      <div class="job-title">${escapeHtml(exp.title)}</div>
      <div class="date">${escapeHtml(exp.dates)}</div>
    </div>
    <div class="company">${escapeHtml(exp.company)}</div>
    ${responsibilities ? `<div class="description">\n      ${responsibilities}\n    </div>` : ''}
  </div>`;
  }).join('\n');

  return `<div class="section">
  <div class="section-title">Professional Experience</div>
  ${experienceItems}
</div>`;
}

/**
 * Generate HTML for skills section
 * ATS-friendly: Uses comma-separated text instead of badges/boxes
 */
export function generateSkills(skills: string[]): string {
  if (!skills || skills.length === 0) return '';
  
  const skillsText = skills.map(skill => escapeHtml(skill)).join(' • ');

  return `<div class="section">
  <div class="section-title">Skills</div>
  <div class="skills-list">${skillsText}</div>
</div>`;
}

/**
 * Generate HTML for education section
 * ATS-friendly with consistent structure
 */
export function generateEducation(education: Education[]): string {
  if (!education || education.length === 0) return '';
  
  const educationItems = education.map(edu => `  <div class="job">
    <div class="job-header">
      <div class="job-title">${escapeHtml(edu.degree)}</div>
      <div class="date">${escapeHtml(edu.dates)}</div>
    </div>
    <div class="company">${escapeHtml(edu.institution)}</div>
  </div>`).join('\n');

  return `<div class="section">
  <div class="section-title">Education</div>
  ${educationItems}
</div>`;
}

/**
 * Generate HTML for personal projects section
 * ATS-friendly with project-specific styling
 */
export function generatePersonalProjects(projects: PersonalProject[]): string {
  if (!projects || projects.length === 0) return '';
  
  const projectItems = projects.map(proj => `  <div class="project">
    <div class="project-header">
      <div class="project-name">${escapeHtml(proj.name)}</div>
      <div class="project-year">${proj.year}</div>
    </div>
    <div class="project-description">${escapeHtml(proj.description)}</div>
  </div>`).join('\n');

  return `<div class="section">
  <div class="section-title">Projects</div>
  ${projectItems}
</div>`;
}

/**
 * Generate HTML for certifications section
 * ATS-friendly bullet list format
 */
export function generateCertifications(certifications: string[]): string {
  if (!certifications || certifications.length === 0) return '';
  
  const certList = certifications.map(cert => 
    `• ${escapeHtml(cert)}`
  ).join('<br>\n    ');

  return `<div class="section">
  <div class="section-title">Certifications</div>
  <div class="description">
    ${certList}
  </div>
</div>`;
}

/**
 * Generate targeting footer
 * Subtle note about resume customization
 */
export function generateTargetingFooter(
  companyName: string,
  role: string
): string {
  return `<div class="targeting-note">
  This resume has been tailored for the ${escapeHtml(role)} position at ${escapeHtml(companyName)}
</div>`;
}

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Assemble complete resume content from sections
 */
export function assembleResumeContent(sections: {
  header: string;
  summary: string;
  experience: string;
  skills: string;
  education: string;
  projects: string;
  certifications: string;
  footer: string;
}): string {
  return `<div class="resume-container">
${sections.header}
${sections.summary}
${sections.experience}
${sections.skills}
${sections.projects}
${sections.education}
${sections.certifications}
${sections.footer}
</div>`;
}

