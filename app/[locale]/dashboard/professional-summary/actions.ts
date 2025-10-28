'use server';

import { ONBOARD_PAGE_URL } from '@/lib/helpers';
import { prisma } from '@/prisma/client';
import {
  UserProfessionalExperience,
  UserProfessionalSummary,
} from '@/prisma/generated/prisma';
import { redirect } from 'next/navigation';

export type UserProfessionalInfo = UserProfessionalSummary & {
  experiences: Array<UserProfessionalExperience>;
};

export async function getUserProfessionalInfo(
  userId: string,
): Promise<UserProfessionalInfo> {
  const userProfessionalSummary =
    await prisma.userProfessionalSummary.findFirst({
      orderBy: {
        version: 'desc',
      },
      where: { userId: userId },
    });

  if (!userProfessionalSummary) {
    redirect(ONBOARD_PAGE_URL);
  }

  const userProfessionalExperience =
    await prisma.userProfessionalExperience.findMany({
      where: { userId: userId },
    });

  return {
    ...userProfessionalSummary,
    experiences: userProfessionalExperience,
  };
}
