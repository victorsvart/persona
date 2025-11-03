'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/prisma/client';

export interface CreateEducationInput {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrentlyEnrolled: boolean;
  gpa?: string;
  honors?: string;
  activities: string[];
  coursework: string[];
}

export async function createEducation(data: CreateEducationInput) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return { success: false, error: 'Unauthorized. Please log in.' };
  }

  try {
    const startDate = new Date(data.startDate + '-01');
    const endDate = data.endDate ? new Date(data.endDate + '-01') : null;

    const education = await prisma.education.create({
      data: {
        userId: session.user.id,
        institution: data.institution,
        degree: data.degree,
        fieldOfStudy: data.fieldOfStudy,
        location: data.location,
        startDate: startDate,
        endDate: endDate,
        isCurrentlyEnrolled: data.isCurrentlyEnrolled,
        gpa: data.gpa,
        honors: data.honors,
        activities: data.activities,
        coursework: data.coursework,
      },
    });

    revalidatePath('/dashboard');
    return { success: true, data: education };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getEducations() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return {
      success: false,
      error: 'Unauthorized. Please log in.',
    };
  }

  try {
    const educations = await prisma.education.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: [
        { sortOrder: 'asc' },
        { startDate: 'desc' },
      ],
    });
    return { success: true, data: educations };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateEducation(
  id: string,
  data: Partial<CreateEducationInput>,
) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return { success: false, error: 'Unauthorized. Please log in.' };
  }

  try {
    const existingEntry = await prisma.education.findUnique({
      where: { id },
    });

    if (!existingEntry || existingEntry.userId !== session.user.id) {
      return { success: false, error: 'Not found or unauthorized' };
    }

    const startDate = data.startDate
      ? new Date(data.startDate + '-01')
      : undefined;
    const endDate = data.endDate
      ? new Date(data.endDate + '-01')
      : data.endDate === ''
        ? null
        : undefined;

    const updatedEducation = await prisma.education.update({
      where: { id },
      data: {
        ...data,
        startDate,
        endDate,
      },
    });

    revalidatePath('/dashboard');
    return { success: true, data: updatedEducation };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteEducation(id: string) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return { success: false, error: 'Unauthorized. Please log in.' };
  }

  try {
    const existingEntry = await prisma.education.findUnique({
      where: { id },
    });

    if (!existingEntry || existingEntry.userId !== session.user.id) {
      return { success: false, error: 'Not found or unauthorized' };
    }

    await prisma.education.delete({
      where: { id },
    });

    revalidatePath('/dashboard');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

