'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/prisma/client';

interface UpdateProfileInput {
  phone?: string | null;
  linkedinUrl?: string | null;
  githubUrl?: string | null;
  portfolioUrl?: string | null;
  location?: string | null;
}

export async function updateProfile(data: UpdateProfileInput) {
  console.log('[updateProfile] Starting with data:', data);
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    console.log('[updateProfile] Session:', session?.user?.id);

    if (!session?.user) {
      console.log('[updateProfile] No session found');
      return {
        success: false,
        error: 'Unauthorized. Please log in.',
      };
    }

    console.log('[updateProfile] Updating user:', session.user.id);

    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        phone: data.phone || null,
        linkedinUrl: data.linkedinUrl || null,
        githubUrl: data.githubUrl || null,
        portfolioUrl: data.portfolioUrl || null,
        location: data.location || null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        linkedinUrl: true,
        githubUrl: true,
        portfolioUrl: true,
        location: true,
      },
    });

    console.log('[updateProfile] Update successful:', user);

    revalidatePath('/dashboard');

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.error('[updateProfile] Error updating profile:', error);
    return {
      success: false,
      error: 'Failed to update profile. Please try again.',
    };
  }
}

export async function getProfile() {
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

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        linkedinUrl: true,
        githubUrl: true,
        portfolioUrl: true,
        location: true,
      },
    });

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.error('Error fetching profile:', error);
    return {
      success: false,
      error: 'Failed to load profile.',
    };
  }
}

