'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/prisma/client';

interface CreateProjectInput {
  name: string;
  description: string;
  role?: string;
  technologies: string[];
  startDate?: string;
  endDate?: string;
  isOngoing: boolean;
  url?: string;
  githubUrl?: string;
  highlights: string[];
}

export async function createProject(data: CreateProjectInput) {
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
    const startDate = data.startDate ? new Date(data.startDate + '-01') : null;
    const endDate = data.endDate ? new Date(data.endDate + '-01') : null;

    // Create project
    const project = await prisma.project.create({
      data: {
        userId: session.user.id,
        name: data.name,
        description: data.description,
        role: data.role || null,
        technologies: data.technologies.filter((t) => t.trim() !== ''),
        startDate,
        endDate,
        isOngoing: data.isOngoing,
        url: data.url || null,
        githubUrl: data.githubUrl || null,
        highlights: data.highlights.filter((h) => h.trim() !== ''),
        sortOrder: 0, // TODO: Calculate based on existing entries
      },
    });

    // Revalidate the dashboard page
    revalidatePath('/dashboard');

    return {
      success: true,
      data: project,
    };
  } catch (error) {
    console.error('Error creating project:', error);
    return {
      success: false,
      error: 'Failed to save project. Please try again.',
    };
  }
}

export async function getProjects() {
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

    const projects = await prisma.project.findMany({
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
      data: projects,
    };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return {
      success: false,
      error: 'Failed to load projects.',
    };
  }
}

export async function updateProject(id: string, data: Partial<CreateProjectInput>) {
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
    const existing = await prisma.project.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Project not found or unauthorized.',
      };
    }

    // Prepare update data
    const updateData: any = {};
    
    if (data.name) updateData.name = data.name;
    if (data.description) updateData.description = data.description;
    if (data.role !== undefined) updateData.role = data.role || null;
    if (data.technologies) updateData.technologies = data.technologies.filter((t) => t.trim() !== '');
    if (data.startDate !== undefined) updateData.startDate = data.startDate ? new Date(data.startDate + '-01') : null;
    if (data.endDate !== undefined) updateData.endDate = data.endDate ? new Date(data.endDate + '-01') : null;
    if (data.isOngoing !== undefined) updateData.isOngoing = data.isOngoing;
    if (data.url !== undefined) updateData.url = data.url || null;
    if (data.githubUrl !== undefined) updateData.githubUrl = data.githubUrl || null;
    if (data.highlights) updateData.highlights = data.highlights.filter((h) => h.trim() !== '');

    const project = await prisma.project.update({
      where: { id },
      data: updateData,
    });

    revalidatePath('/dashboard');

    return {
      success: true,
      data: project,
    };
  } catch (error) {
    console.error('Error updating project:', error);
    return {
      success: false,
      error: 'Failed to update project. Please try again.',
    };
  }
}

export async function deleteProject(id: string) {
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
    const existing = await prisma.project.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Project not found or unauthorized.',
      };
    }

    await prisma.project.delete({
      where: { id },
    });

    revalidatePath('/dashboard');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error deleting project:', error);
    return {
      success: false,
      error: 'Failed to delete project. Please try again.',
    };
  }
}

