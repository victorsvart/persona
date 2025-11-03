'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/prisma/client';

interface CreateSkillInput {
  name: string;
  category: string;
  proficiency?: string;
  yearsOfExperience?: number;
}

export async function createSkill(data: CreateSkillInput) {
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

    // Create skill
    const skill = await prisma.skill.create({
      data: {
        userId: session.user.id,
        name: data.name,
        category: data.category,
        proficiency: data.proficiency || null,
        yearsOfExperience: data.yearsOfExperience || null,
        sortOrder: 0, // TODO: Calculate based on existing entries
      },
    });

    // Revalidate the dashboard page
    revalidatePath('/dashboard');

    return {
      success: true,
      data: skill,
    };
  } catch (error) {
    console.error('Error creating skill:', error);
    return {
      success: false,
      error: 'Failed to save skill. Please try again.',
    };
  }
}

export async function getSkills() {
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

    const skills = await prisma.skill.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: [
        { category: 'asc' },
        { sortOrder: 'asc' },
        { name: 'asc' },
      ],
    });

    return {
      success: true,
      data: skills,
    };
  } catch (error) {
    console.error('Error fetching skills:', error);
    return {
      success: false,
      error: 'Failed to load skills.',
    };
  }
}

export async function updateSkill(id: string, data: Partial<CreateSkillInput>) {
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
    const existing = await prisma.skill.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Skill not found or unauthorized.',
      };
    }

    // Prepare update data
    const updateData: any = {};
    
    if (data.name) updateData.name = data.name;
    if (data.category) updateData.category = data.category;
    if (data.proficiency !== undefined) updateData.proficiency = data.proficiency || null;
    if (data.yearsOfExperience !== undefined) updateData.yearsOfExperience = data.yearsOfExperience || null;

    const skill = await prisma.skill.update({
      where: { id },
      data: updateData,
    });

    revalidatePath('/dashboard');

    return {
      success: true,
      data: skill,
    };
  } catch (error) {
    console.error('Error updating skill:', error);
    return {
      success: false,
      error: 'Failed to update skill. Please try again.',
    };
  }
}

export async function deleteSkill(id: string) {
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
    const existing = await prisma.skill.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Skill not found or unauthorized.',
      };
    }

    await prisma.skill.delete({
      where: { id },
    });

    revalidatePath('/dashboard');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error deleting skill:', error);
    return {
      success: false,
      error: 'Failed to delete skill. Please try again.',
    };
  }
}

