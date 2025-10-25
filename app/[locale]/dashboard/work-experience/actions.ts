'use server';

import { prisma } from '@/prisma/client';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ProfessionalExperienceValues } from '@/types/forms/work-experience.schema';
import { AuthError } from '@/types/errors/auth-error';
import { revalidatePath } from 'next/cache';
import { ProfessionalSummaryValues } from '@/types/forms/professional-summary.schema';
import { LOGIN_PAGE_URL, PROFESSIONAL_SUMMARY_URL } from '@/lib/helpers';

export async function getWorkExperiences() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    const experiences = await prisma.userProfessionalExperience.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        start_date: 'desc',
      },
    });

    return experiences;
  } catch {
    console.error('Error fetching work experiences');
    return [];
  }
}

export async function saveProfessionalSummary(
  values: ProfessionalSummaryValues,
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    await prisma.userProfessionalSummary.upsert({
      where: { userId: session.user.id },
      create: {
        userId: session.user.id,
        ...values,
      },
      update: {
        ...values,
      },
    });

    revalidatePath(PROFESSIONAL_SUMMARY_URL);
  } catch {
    throw new Error('Failed to save professional summary');
  }
}

export async function saveWorkExperience(
  values: ProfessionalExperienceValues,
  experienceId?: string,
): Promise<undefined | AuthError> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    await prisma.userProfessionalExperience.upsert({
      where: { id: experienceId },
      create: {
        userId: session.user.id,
        ...values,
      },
      update: {
        ...values,
      },
    });

    revalidatePath(PROFESSIONAL_SUMMARY_URL);
  } catch (error) {
    console.error('Error saving work experience:', error);
    return {
      message: 'Failed to save work experience',
      status: 500,
    };
  }
}

export async function deleteWorkExperience(
  experienceId: string,
): Promise<undefined | AuthError> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    await prisma.userProfessionalExperience.delete({
      where: {
        id: experienceId,
        userId: session.user.id, // Ensure user owns this experience
      },
    });

    revalidatePath(PROFESSIONAL_SUMMARY_URL);
  } catch (error) {
    console.error('Error deleting work experience:', error);
    return {
      message: 'Failed to delete work experience',
      status: 500,
    };
  }
}
