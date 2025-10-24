'use server';

import { prisma } from '@/prisma/client';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  professional_experiences,
  ProfessionalExperienceValues,
} from '@/types/forms/work-experience.schema';
import { makeAuthError } from '@/lib/utils';
import { AuthError } from '@/types/errors/auth-error';
import { revalidatePath } from 'next/cache';

export async function saveWorkExperience(
  values: ProfessionalExperienceValues,
  experienceId?: string
): Promise<undefined | AuthError> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  try {
    const experienceData = {
      institution: values.institution,
      role: values.role,
      start_date: new Date(values.start_date),
      end_date: values.end_date ? new Date(values.end_date) : null,
      summary: values.summary || null,
      at_university: values.at_university,
    };

    if (experienceId) {
      // Update existing experience
      await prisma.userProfessionalExperience.update({
        where: {
          id: experienceId,
          userId: session.user.id, // Ensure user owns this experience
        },
        data: experienceData,
      });
    } else {
      // Create new experience
      await prisma.userProfessionalExperience.create({
        data: {
          ...experienceData,
          userId: session.user.id,
        },
      });
    }

    revalidatePath('/dashboard');
  } catch (error) {
    console.error('Error saving work experience:', error);
    return makeAuthError({
      message: 'Failed to save work experience',
      status: 500,
    } as any);
  }
}

export async function deleteWorkExperience(
  experienceId: string
): Promise<undefined | AuthError> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  try {
    await prisma.userProfessionalExperience.delete({
      where: {
        id: experienceId,
        userId: session.user.id, // Ensure user owns this experience
      },
    });

    revalidatePath('/dashboard');
  } catch (error) {
    console.error('Error deleting work experience:', error);
    return makeAuthError({
      message: 'Failed to delete work experience',
      status: 500,
    } as any);
  }
}

export async function getWorkExperiences() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
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
  } catch (error) {
    console.error('Error fetching work experiences:', error);
    return [];
  }
}
