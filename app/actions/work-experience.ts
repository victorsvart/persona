'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/prisma/client';

interface CreateWorkExperienceInput {
  company: string;
  position: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  location?: string;
  locationType?: 'On-site' | 'Remote' | 'Hybrid';
  startDate: string;
  endDate?: string;
  isCurrentRole: boolean;
  description?: string;
  achievements: string[];
}

export async function createWorkExperience(data: CreateWorkExperienceInput) {
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

    // Convert date strings to Date objects
    const startDate = new Date(data.startDate + '-01'); // Append day for proper date
    const endDate = data.endDate ? new Date(data.endDate + '-01') : null;

    // Create work experience
    const workExperience = await prisma.workExperience.create({
      data: {
        userId: session.user.id,
        company: data.company,
        position: data.position,
        employmentType: data.employmentType,
        location: data.location || null,
        locationType: data.locationType || null,
        startDate,
        endDate,
        isCurrentRole: data.isCurrentRole,
        description: data.description || null,
        achievements: data.achievements.filter((a) => a.trim() !== ''),
        sortOrder: 0, // TODO: Calculate based on existing entries
      },
    });

    // Revalidate the dashboard page
    revalidatePath('/dashboard');

    return {
      success: true,
      data: workExperience,
    };
  } catch (error) {
    console.error('Error creating work experience:', error);
    return {
      success: false,
      error: 'Failed to save work experience. Please try again.',
    };
  }
}

export async function getWorkExperiences() {
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

    const workExperiences = await prisma.workExperience.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: [
        { sortOrder: 'asc' },
        { startDate: 'desc' },
      ],
    });

    return {
      success: true,
      data: workExperiences,
    };
  } catch (error) {
    console.error('Error fetching work experiences:', error);
    return {
      success: false,
      error: 'Failed to load work experiences.',
    };
  }
}

export async function updateWorkExperience(id: string, data: Partial<CreateWorkExperienceInput>) {
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
    const existing = await prisma.workExperience.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Work experience not found or unauthorized.',
      };
    }

    // Prepare update data
    const updateData: any = {};
    
    if (data.company) updateData.company = data.company;
    if (data.position) updateData.position = data.position;
    if (data.employmentType) updateData.employmentType = data.employmentType;
    if (data.location !== undefined) updateData.location = data.location || null;
    if (data.locationType !== undefined) updateData.locationType = data.locationType || null;
    if (data.startDate) updateData.startDate = new Date(data.startDate + '-01');
    if (data.endDate !== undefined) updateData.endDate = data.endDate ? new Date(data.endDate + '-01') : null;
    if (data.isCurrentRole !== undefined) updateData.isCurrentRole = data.isCurrentRole;
    if (data.description !== undefined) updateData.description = data.description || null;
    if (data.achievements) updateData.achievements = data.achievements.filter((a) => a.trim() !== '');

    const workExperience = await prisma.workExperience.update({
      where: { id },
      data: updateData,
    });

    revalidatePath('/dashboard');

    return {
      success: true,
      data: workExperience,
    };
  } catch (error) {
    console.error('Error updating work experience:', error);
    return {
      success: false,
      error: 'Failed to update work experience. Please try again.',
    };
  }
}

export async function deleteWorkExperience(id: string) {
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
    const existing = await prisma.workExperience.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Work experience not found or unauthorized.',
      };
    }

    await prisma.workExperience.delete({
      where: { id },
    });

    revalidatePath('/dashboard');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error deleting work experience:', error);
    return {
      success: false,
      error: 'Failed to delete work experience. Please try again.',
    };
  }
}

