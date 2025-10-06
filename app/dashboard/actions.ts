'use server';

import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { ApplicationSchemaValues } from '@/lib/zod/application.schema';
import { User } from '@/prisma/lib/generated/prisma';
import { Session } from '@/types/Session';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getSession(): Promise<Session> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_URL);
  }

  return session;
}

export async function getUser(): Promise<User> {
  const session = await getSession();
  return session.user as User;
}

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

export async function getUserApplications() {
  try {
    const user = await getUser();
    const applications = await prisma.application.findMany({
      where: {
        userId: user.id,
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
}

export async function getApplicationById(applicationId: string) {
  const user = await getUser();
  const application = await prisma.application.findFirst({
    where: {
      id: applicationId,
      userId: user.id,
    },
  });

  return application;
}

export async function handleDashboardRedirect() {
  const applications = await getUserApplications();
  
  if (applications.length === 0) {
    redirect('/dashboard/onboard');
  }
  
  redirect(`/dashboard/${applications[0].id}/curriculum`);
}
