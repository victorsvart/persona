'use server';

import { auth } from '@/lib/auth';
import { LOGIN_PAGE_URL } from '@/lib/helpers';
import { prisma } from '@/prisma/client';
import { UserApplications, UserResume } from '@/prisma/generated/prisma';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function getApplicationById(applicationId: string): Promise<UserApplications | null> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    const application = await prisma.userApplications.findFirst({
      where: {
        id: applicationId,
        userId: session.user.id,
      },
      include: {
        resumes: {
          orderBy: { version: 'desc' },
        },
      },
    });

    return application;
  } catch (error) {
    console.error('Error fetching application:', error);
    return null;
  }
}

export async function getResumesByApplicationId(applicationId: string): Promise<UserResume[]> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    const resumes = await prisma.userResume.findMany({
      where: {
        applicationId,
        userId: session.user.id,
      },
      orderBy: { version: 'desc' },
    });

    return resumes;
  } catch (error) {
    console.error('Error fetching resumes:', error);
    return [];
  }
}

export async function createResume(
  applicationId: string,
  content: string,
  title: string = 'Resume'
): Promise<{ success: boolean; resume?: UserResume; error?: string }> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    // Verify the application belongs to the user
    const application = await prisma.userApplications.findFirst({
      where: {
        id: applicationId,
        userId: session.user.id,
      },
    });

    if (!application) {
      return { success: false, error: 'Application not found' };
    }

    // Get the next version number
    const latestResume = await prisma.userResume.findFirst({
      where: { applicationId },
      orderBy: { version: 'desc' },
    });

    const nextVersion = latestResume ? latestResume.version + 1 : 1;

    // Deactivate all previous resumes for this application
    await prisma.userResume.updateMany({
      where: { applicationId },
      data: { isActive: false },
    });

    // Create new resume
    const resume = await prisma.userResume.create({
      data: {
        applicationId,
        userId: session.user.id,
        version: nextVersion,
        title,
        content,
        isActive: true,
      },
    });

    revalidatePath(`/dashboard/resume/${applicationId}`);
    return { success: true, resume };
  } catch (error) {
    console.error('Error creating resume:', error);
    return { success: false, error: 'Failed to create resume' };
  }
}

export async function updateResume(
  resumeId: string,
  content: string,
  title?: string
): Promise<{ success: boolean; resume?: UserResume; error?: string }> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    const resume = await prisma.userResume.findFirst({
      where: {
        id: resumeId,
        userId: session.user.id,
      },
    });

    if (!resume) {
      return { success: false, error: 'Resume not found' };
    }

    const updatedResume = await prisma.userResume.update({
      where: { id: resumeId },
      data: {
        content,
        ...(title && { title }),
        updatedAt: new Date(),
      },
    });

    revalidatePath(`/dashboard/resume/${resume.applicationId}`);
    return { success: true, resume: updatedResume };
  } catch (error) {
    console.error('Error updating resume:', error);
    return { success: false, error: 'Failed to update resume' };
  }
}

export async function setActiveResume(
  resumeId: string
): Promise<{ success: boolean; error?: string }> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    const resume = await prisma.userResume.findFirst({
      where: {
        id: resumeId,
        userId: session.user.id,
      },
    });

    if (!resume) {
      return { success: false, error: 'Resume not found' };
    }

    // Deactivate all resumes for this application
    await prisma.userResume.updateMany({
      where: { applicationId: resume.applicationId },
      data: { isActive: false },
    });

    // Activate the selected resume
    await prisma.userResume.update({
      where: { id: resumeId },
      data: { isActive: true },
    });

    revalidatePath(`/dashboard/resume/${resume.applicationId}`);
    return { success: true };
  } catch (error) {
    console.error('Error setting active resume:', error);
    return { success: false, error: 'Failed to set active resume' };
  }
}

export async function deleteResume(
  resumeId: string
): Promise<{ success: boolean; error?: string }> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    const resume = await prisma.userResume.findFirst({
      where: {
        id: resumeId,
        userId: session.user.id,
      },
    });

    if (!resume) {
      return { success: false, error: 'Resume not found' };
    }

    await prisma.userResume.delete({
      where: { id: resumeId },
    });

    revalidatePath(`/dashboard/resume/${resume.applicationId}`);
    return { success: true };
  } catch (error) {
    console.error('Error deleting resume:', error);
    return { success: false, error: 'Failed to delete resume' };
  }
}
