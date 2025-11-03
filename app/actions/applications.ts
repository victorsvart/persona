'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/prisma/client';

interface CreateApplicationInput {
  company: string;
  role: string;
  jobDescription: string;
}

export async function createApplication(data: CreateApplicationInput) {
  try {
    // Get authenticated session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        error: 'Unauthorized. Please log in.',
      };
    }

    // Create application
    const application = await prisma.application.create({
      data: {
        userId: session.user.id,
        company: data.company,
        role: data.role,
        jobDescription: data.jobDescription,
      },
    });

    // Revalidate the dashboard page
    revalidatePath('/dashboard');

    return {
      success: true,
      data: application,
    };
  } catch (error) {
    console.error('Error creating application:', error);
    return {
      success: false,
      error: 'Failed to create application. Please try again.',
    };
  }
}

export async function getApplications() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        error: 'Unauthorized. Please log in.',
      };
    }

    const applications = await prisma.application.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        messages: {
          orderBy: {
            createdAt: 'asc',
          },
          take: 1, // Just get the first message for preview
        },
      },
    });

    return {
      success: true,
      data: applications,
    };
  } catch (error) {
    console.error('Error fetching applications:', error);
    return {
      success: false,
      error: 'Failed to load applications.',
    };
  }
}

export async function getApplication(id: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        error: 'Unauthorized. Please log in.',
      };
    }

    const application = await prisma.application.findUnique({
      where: { id },
      include: {
        messages: {
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });

    if (!application || application.userId !== session.user.id) {
      return {
        success: false,
        error: 'Application not found or unauthorized.',
      };
    }

    return {
      success: true,
      data: application,
    };
  } catch (error) {
    console.error('Error fetching application:', error);
    return {
      success: false,
      error: 'Failed to load application.',
    };
  }
}

export async function updateApplication(
  id: string,
  data: Partial<CreateApplicationInput>
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        error: 'Unauthorized. Please log in.',
      };
    }

    // Verify ownership
    const existing = await prisma.application.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Application not found or unauthorized.',
      };
    }

    const application = await prisma.application.update({
      where: { id },
      data,
    });

    revalidatePath('/dashboard');

    return {
      success: true,
      data: application,
    };
  } catch (error) {
    console.error('Error updating application:', error);
    return {
      success: false,
      error: 'Failed to update application. Please try again.',
    };
  }
}

export async function deleteApplication(id: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        error: 'Unauthorized. Please log in.',
      };
    }

    // Verify ownership
    const existing = await prisma.application.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Application not found or unauthorized.',
      };
    }

    await prisma.application.delete({
      where: { id },
    });

    revalidatePath('/dashboard');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error deleting application:', error);
    return {
      success: false,
      error: 'Failed to delete application. Please try again.',
    };
  }
}

export async function updateGeneratedResume(id: string, html: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        error: 'Unauthorized. Please log in.',
      };
    }

    // Verify ownership
    const existing = await prisma.application.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Application not found or unauthorized.',
      };
    }

    const application = await prisma.application.update({
      where: { id },
      data: {
        generatedResumeHtml: html,
      },
    });

    revalidatePath('/dashboard');

    return {
      success: true,
      data: application,
    };
  } catch (error) {
    console.error('Error updating generated resume:', error);
    return {
      success: false,
      error: 'Failed to update generated resume. Please try again.',
    };
  }
}

