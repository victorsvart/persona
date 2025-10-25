'use server';

import { auth } from '@/lib/auth';
import { LOGIN_PAGE_URL } from '@/lib/helpers';
import { prisma } from '@/prisma/client';
import { UserApplications } from '@/prisma/generated/prisma';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

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
    });

    return application;
  } catch (error) {
    console.error('Error fetching application:', error);
    return null;
  }
}
