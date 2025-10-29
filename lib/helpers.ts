import { prisma } from '@/prisma/client';

export const LOGIN_PAGE_URL = '/login';
export const ONBOARD_PAGE_URL = '/onboard';
export const APPLICATION_PAGE_URL = '/dashboard/applications';
export const PROFESSIONAL_SUMMARY_URL = '/dashboard/professional-summary';
export const ACADEMIC_URL = '/dashboard/academic';
export const PERSONAL_PROJECTS_URL = '/dashboard/personal-projects';

/**
 * Fetch complete user profile data for resume generation
 * @param userId - The user's ID
 * @returns User profile data formatted for resume generation
 */
export async function getUserProfileData(userId: string) {
  const userData = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      user_professional_summary: true,
      user_professional_experiences: {
        orderBy: { start_date: 'desc' },
      },
      user_academic_information: {
        orderBy: { start_date: 'desc' },
      },
      user_skill: true,
      personal_projects: {
        orderBy: { year_worked_on: 'desc' },
      },
    },
  });

  if (!userData) {
    return null;
  }

  // Parse skills string to array (handle empty/null cases)
  let skillsArray: string[] = [];
  if (userData.user_skill?.skills) {
    skillsArray = userData.user_skill.skills
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }

  // Transform data to match ResumeGenerationRequest['userExperience'] format
  return {
    professional_summary: userData.user_professional_summary?.summary || undefined,
    work_experience: userData.user_professional_experiences?.map((exp) => ({
      institution: exp.institution,
      role: exp.role,
      start_date: exp.start_date?.toISOString(),
      end_date: exp.end_date?.toISOString(),
      summary: exp.summary || undefined,
    })),
    skills: skillsArray.length > 0 ? skillsArray : undefined,
    education: userData.user_academic_information?.map((edu) => ({
      institution: edu.institution,
      major: edu.major,
      start_date: edu.start_date.toISOString(),
      end_date: edu.end_date?.toISOString(),
    })),
    personal_projects: userData.personal_projects?.map((proj) => ({
      name: proj.name,
      year: proj.year_worked_on,
      description: proj.description,
    })),
  };
}
