'use server';

import { prisma } from '@/prisma/client';
import {
  UserProfessionalExperience,
  UserProfessionalSummary,
} from '@/prisma/generated/prisma';

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
    throw new Error('User not onboarded');
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
