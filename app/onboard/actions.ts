'use server';

import { prisma } from '@/prisma/client';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { OnboardSchemaValues } from '@/types/forms/onboard.schema';
import { AuthError } from '@/types/errors/auth-error';
import { APPLICATION_PAGE_URL } from '@/lib/helpers';

export type OnboardError = {
  message: string;
  throwToStep: number;
};

export async function saveOnboardingData(
  values: OnboardSchemaValues,
): Promise<undefined | AuthError | OnboardError> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  if (
    values.experience_years > 0 &&
    values.professional_experiences.length === 0
  ) {
    return {
      message:
        'If you have more than 0 years of experience, a work experience should be added.',
      throwToStep: 3,
    };
  }

  try {
    await prisma.userProfessionalSummary.upsert({
      where: { userId: session.user.id },
      create: {
        userId: session.user.id,
        experience_years: values.experience_years,
        summary: values.professional_summary || null,
      },
      update: {
        experience_years: values.experience_years,
        summary: values.professional_summary || null,
      },
    });

    if (values.professional_experiences?.length) {
      await prisma.userProfessionalExperience.createMany({
        data: values.professional_experiences.map((exp) => ({
          userId: session.user.id,
          institution: exp.institution,
          role: exp.role,
          start_date: new Date(exp.start_date),
          end_date: exp.end_date ? new Date(exp.end_date) : null,
          summary: exp.summary || null,
          at_university: exp.at_university,
        })),
      });
    }

    if (values.academic_information?.length) {
      await prisma.userAcademicInformation.createMany({
        data: values.academic_information.map((acad) => ({
          userId: session.user.id,
          institution: acad.institution,
          major: acad.major,
          start_date: new Date(acad.start_date),
          end_date: acad.end_date ? new Date(acad.end_date) : null,
          summary: acad.summary || null,
        })),
      });
    }

    await prisma.userSkill.upsert({
      where: { userId: session.user.id },
      create: {
        userId: session.user.id,
        skills: values.skills,
      },
      update: {
        skills: values.skills,
      },
    });
  } catch (error) {
    console.error('Error saving onboarding data:', error);
    return {
      message: 'Failed to save onboarding data',
      status: 500,
    };
  }

  redirect(APPLICATION_PAGE_URL);
}
