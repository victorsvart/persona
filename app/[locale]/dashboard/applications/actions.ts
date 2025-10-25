'use server';

import { auth } from '@/lib/auth';
import { LOGIN_PAGE_URL } from '@/lib/helpers';
import { prisma } from '@/prisma/client';
import { UserApplications } from '@/prisma/generated/prisma';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { applicationSchema } from '@/types/forms/application.schema';
import { revalidatePath } from 'next/cache';

export async function getApplications(): Promise<Array<UserApplications>> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    const userApps = await prisma.userApplications.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' },
    });

    return userApps;
  } catch (error) {
    throw error;
  }
}

export async function createApplication(formData: FormData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  const rawData = {
    company_name: formData.get('company_name'),
    role: formData.get('role'),
    job_post: formData.get('job_post'),
  };

  const validatedFields = applicationSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const application = await prisma.userApplications.create({
      data: {
        company_name: validatedFields.data.company_name,
        role: validatedFields.data.role,
        job_post: validatedFields.data.job_post,
        userId: session.user.id,
      },
    });

    revalidatePath('/dashboard/applications');
    return { success: true, application };
  } catch {
    return {
      errors: {
        root: ['Failed to create application. Please try again.'],
      },
    };
  }
}

export async function updateApplication(applicationId: string, formData: FormData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  const rawData = {
    company_name: formData.get('company_name'),
    role: formData.get('role'),
    job_post: formData.get('job_post'),
  };

  const validatedFields = applicationSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // First verify the application belongs to the user
    const existingApplication = await prisma.userApplications.findFirst({
      where: {
        id: applicationId,
        userId: session.user.id,
      },
    });

    if (!existingApplication) {
      return {
        errors: {
          root: ['Application not found or you do not have permission to edit it.'],
        },
      };
    }

    const updatedApplication = await prisma.userApplications.update({
      where: {
        id: applicationId,
      },
      data: {
        company_name: validatedFields.data.company_name,
        role: validatedFields.data.role,
        job_post: validatedFields.data.job_post,
      },
    });

    revalidatePath('/dashboard/applications');
    return { success: true, application: updatedApplication };
  } catch {
    return {
      errors: {
        root: ['Failed to update application. Please try again.'],
      },
    };
  }
}
