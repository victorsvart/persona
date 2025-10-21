'use server';

import { prisma } from '@/prisma/client';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { onboardSchema, OnboardSchemaValues } from '@/types/forms/onboard.schema';
import { makeAuthError } from '@/lib/utils';
import { AuthError } from '@/types/errors/auth-error';

export async function saveOnboardingData(
  values: OnboardSchemaValues,
): Promise<undefined | AuthError> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  try {
    const validatedData = onboardSchema.parse(values);

    // Note: Basic user info (username, displayUsername) is already set during signup

    // Create professional summary
    await prisma.userProfessionalSummary.upsert({
      where: { userId: session.user.id },
      create: {
        userId: session.user.id,
        experience_years: validatedData.experience_years,
        summary: validatedData.professional_summary || null,
      },
      update: {
        experience_years: validatedData.experience_years,
        summary: validatedData.professional_summary || null,
      },
    });

    // Create professional experiences
    if (validatedData.professional_experiences?.length) {
      // Delete existing experiences
      await prisma.userProfessionalExperience.deleteMany({
        where: { userId: session.user.id },
      });

      // Create new experiences
      await prisma.userProfessionalExperience.createMany({
        data: validatedData.professional_experiences.map(exp => ({
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

    // Create academic information
    if (validatedData.academic_information?.length) {
      // Delete existing academic info
      await prisma.userAcademicInformation.deleteMany({
        where: { userId: session.user.id },
      });

      // Create new academic info
      await prisma.userAcademicInformation.createMany({
        data: validatedData.academic_information.map(acad => ({
          userId: session.user.id,
          institution: acad.institution,
          major: acad.major,
          start_date: new Date(acad.start_date),
          end_date: acad.end_date ? new Date(acad.end_date) : null,
          summary: acad.summary || null,
        })),
      });
    }

    // Create skills
    await prisma.userSkill.upsert({
      where: { userId: session.user.id },
      create: {
        userId: session.user.id,
        skills: validatedData.skills,
      },
      update: {
        skills: validatedData.skills,
      },
    });

    redirect('/dashboard');
  } catch (error) {
    console.error('Error saving onboarding data:', error);
    return makeAuthError({
      message: 'Failed to save onboarding data',
      status: 500,
    } as any);
  }
}
