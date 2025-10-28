'use server';

import { prisma } from '@/prisma/client';
import { redirect } from 'next/navigation';

export async function isOnboarded(userId: string) {
  try {
    const onboardInfo = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { onboarded: true },
    });

    return onboardInfo.onboarded;
  } catch {
    redirect('/login');
  }
}
