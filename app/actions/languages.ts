'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/prisma/client';

interface CreateLanguageInput {
  name: string;
  proficiency: string;
}

export async function createLanguage(data: CreateLanguageInput) {
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

    // Create language
    const language = await prisma.language.create({
      data: {
        userId: session.user.id,
        name: data.name,
        proficiency: data.proficiency,
        sortOrder: 0, // TODO: Calculate based on existing entries
      },
    });

    // Revalidate the dashboard page
    revalidatePath('/dashboard');

    return {
      success: true,
      data: language,
    };
  } catch (error) {
    console.error('Error creating language:', error);
    return {
      success: false,
      error: 'Failed to save language. Please try again.',
    };
  }
}

export async function getLanguages() {
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

    const languages = await prisma.language.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: [
        { sortOrder: 'asc' },
        { name: 'asc' },
      ],
    });

    return {
      success: true,
      data: languages,
    };
  } catch (error) {
    console.error('Error fetching languages:', error);
    return {
      success: false,
      error: 'Failed to load languages.',
    };
  }
}

export async function updateLanguage(id: string, data: Partial<CreateLanguageInput>) {
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
    const existing = await prisma.language.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Language not found or unauthorized.',
      };
    }

    // Prepare update data
    const updateData: any = {};
    
    if (data.name) updateData.name = data.name;
    if (data.proficiency) updateData.proficiency = data.proficiency;

    const language = await prisma.language.update({
      where: { id },
      data: updateData,
    });

    revalidatePath('/dashboard');

    return {
      success: true,
      data: language,
    };
  } catch (error) {
    console.error('Error updating language:', error);
    return {
      success: false,
      error: 'Failed to update language. Please try again.',
    };
  }
}

export async function deleteLanguage(id: string) {
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
    const existing = await prisma.language.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Language not found or unauthorized.',
      };
    }

    await prisma.language.delete({
      where: { id },
    });

    revalidatePath('/dashboard');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error deleting language:', error);
    return {
      success: false,
      error: 'Failed to delete language. Please try again.',
    };
  }
}

