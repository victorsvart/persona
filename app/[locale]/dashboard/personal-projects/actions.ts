'use server';

import { prisma } from '@/prisma/client';
import { UserPersonalProjects } from '@/prisma/generated/prisma';
import { revalidatePath } from 'next/cache';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import {
  personal_projects_schema,
  PersonalProjectsValues,
} from '@/types/forms/personal-projects.schema';

export async function getPersonalProjects(
  userId: string,
): Promise<Array<UserPersonalProjects>> {
  const personalProjects = await prisma.userPersonalProjects.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  return personalProjects;
}

export async function savePersonalProject(
  data: PersonalProjectsValues,
  projectId?: string,
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return { message: 'Unauthorized' };
    }

    const validatedData = personal_projects_schema.parse(data);

    await prisma.userPersonalProjects.upsert({
      where: { id: projectId || '' },
      update: {
        name: validatedData.name,
        year_worked_on: validatedData.year_worked_on,
        description: validatedData.description,
      },
      create: {
        userId: session.user.id,
        name: validatedData.name,
        year_worked_on: validatedData.year_worked_on,
        description: validatedData.description,
      },
    });

    revalidatePath('/dashboard/personal-projects');
    return null;
  } catch (error) {
    console.error('Error saving personal project:', error);
    return { message: 'Failed to save personal project' };
  }
}

export async function deletePersonalProject(projectId: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return { message: 'Unauthorized' };
    }

    await prisma.userPersonalProjects.delete({
      where: { id: projectId },
    });

    revalidatePath('/dashboard/personal-projects');
    return null;
  } catch (error) {
    console.error('Error deleting personal project:', error);
    return { message: 'Failed to delete personal project' };
  }
}
