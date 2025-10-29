'use server';

import { prisma } from '@/prisma/client';
import { UserAcademicInformation } from '@/prisma/generated/prisma';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { AcademicInfoValues } from '@/types/forms/academic.schema';
import { AuthError } from '@/types/errors/auth-error';
import { revalidatePath } from 'next/cache';
import { LOGIN_PAGE_URL } from '@/lib/helpers';

export async function getAcademicInfo(
  userId: string,
): Promise<Array<UserAcademicInformation>> {
  const academicInfo = await prisma.userAcademicInformation.findMany({
    where: { userId: userId },
    orderBy: { start_date: 'desc' },
  });

  return academicInfo;
}

export async function saveAcademicInfo(
  values: AcademicInfoValues,
  academicId?: string,
): Promise<undefined | AuthError> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    // Convert date strings to Date objects
    const data = {
      institution: values.institution,
      major: values.major,
      start_date:
        typeof values.start_date === 'string'
          ? new Date(values.start_date)
          : values.start_date,
      end_date:
        values.end_date && values.end_date !== ''
          ? typeof values.end_date === 'string'
            ? new Date(values.end_date)
            : values.end_date
          : null,
      summary: values.summary || null,
    };

    await prisma.userAcademicInformation.upsert({
      where: { id: academicId || '' },
      create: {
        userId: session.user.id,
        ...data,
      },
      update: {
        ...data,
      },
    });

    revalidatePath('/dashboard/academic');
  } catch (error) {
    console.error('Error saving academic information:', error);
    return {
      message: 'Failed to save academic information',
      status: 500,
    };
  }
}

export async function deleteAcademicInfo(
  academicId: string,
): Promise<undefined | AuthError> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  try {
    await prisma.userAcademicInformation.delete({
      where: {
        id: academicId,
        userId: session.user.id, // Ensure user owns this information
      },
    });

    revalidatePath('/dashboard/academic');
  } catch (error) {
    console.error('Error deleting academic information:', error);
    return {
      message: 'Failed to delete academic information',
      status: 500,
    };
  }
}
