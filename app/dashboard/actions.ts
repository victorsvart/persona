'use server';

import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { ApplicationSchemaValues } from '@/lib/zod/application.schema';
import { User } from '@/prisma/lib/generated/prisma';
import { Session } from '@/types/Session';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { cache } from 'react';

const LOGIN_URL = '/auth/login';

// Cache the session fetch for the duration of the request
// This prevents multiple database calls for the same user data
export const getSession = cache(async (): Promise<Session> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_URL);
  }

  return session;
});

// Cache the user fetch - this will reuse the cached session
export const getUser = cache(async (): Promise<User> => {
  const session = await getSession();
  return session.user as User;
});

export async function createApplication(
  form: ApplicationSchemaValues,
): Promise<string> {
  const user = await getUser();
  const result = await prisma.application.create({
    data: {
      company_name: form.company_name,
      role: form.role,
      details: form.details,
      userId: user.id,
    },
  });

  return result.id;
}

export async function updateApplication(
  form: ApplicationSchemaValues,
  id: string,
): Promise<string> {
  const user = await getUser();
  const result = await prisma.application.update({
    where: { id: id, userId: user.id },
    data: {
      company_name: form.company_name,
      role: form.role,
      details: form.details,
      userId: user.id,
    },
  });

  return result.id;
}
export const getUserApplications = cache(async (userId: string) => {
  try {
    const applications = await prisma.application.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        company_name: 'asc',
      },
    });

    return applications;
  } catch (error) {
    console.error('Error fetching user applications:', error);
    return [];
  }
});


export const getApplicationById = cache(async (applicationId: string) => {
  const user = await getUser();
  const application = await prisma.application.findFirst({
    where: {
      id: applicationId,
      userId: user.id,
    },
  });

  return application;
});

export const getApplicationByIdFromCache = cache(
  async (applicationId: string) => {
    const user = await getUser();
    const applications = await getUserApplications(user.id);

    const application = applications.find((app) => app.id === applicationId);

    // Verify ownership (security check)
    if (!application) {
      return null;
    }

    return application;
  },
);

export async function handleDashboardRedirect() {
  const user = await getUser();
  const applications = await getUserApplications(user.id);

  if (applications.length === 0) {
    redirect('/dashboard/onboard');
  }

  redirect(`/dashboard/${applications[0].id}/curriculum`);
}
