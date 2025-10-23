'use server';

import { prisma } from '@/prisma/client';
import { redirect } from 'next/navigation';

export async function isOnboarded(userId: string) {
  try {
    const isOnboarded = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { onboarded: true },
    });

    return isOnboarded;
  } catch (error) {
    redirect('/login');
  }
}
