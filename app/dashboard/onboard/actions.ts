'use server';

import { ProfessionalSummaryValues } from '@/lib/zod/professional-summary.schema';
import { WorkExperienceValues } from '@/lib/zod/work-experience.schema';
import { EducationValues } from '@/lib/zod/education.schema';
import { SkillsValues } from '@/lib/zod/skills.schema';
import { CertificationValues } from '@/lib/zod/certification.schema';
import { getUser } from '../actions';
import { prisma } from '@/lib/prisma';
import { handlePrismaError } from '@/lib/prisma-errors';
import { revalidatePath } from 'next/cache';

export async function saveSummary(values: ProfessionalSummaryValues) {
  const user = await getUser();
  try {
    await prisma.userProfessionalSummary.upsert({
      where: { userId: user.id },
      update: {
        summary: values.summary,
      },
      create: {
        userId: user.id,
        summary: values.summary,
      },
    });

    revalidatePath('/dashboard/onboard');
  } catch (err) {
    return handlePrismaError(err);
  }
}

export async function saveWorkExperience(values: WorkExperienceValues) {
  const user = await getUser();
  try {
    await prisma.userWorkExperience.create({
      data: {
        company_name: values.company_name,
        enrollment: new Date(values.enrollment),
        completion: values.completion ? new Date(values.completion) : null,
        description: values.description,
        currentWorkPlace: values.currentWorkPlace,
        userId: user.id,
      },
    });

    revalidatePath('/dashboard/onboard');
  } catch (err) {
    return handlePrismaError(err);
  }
}

export async function saveEducation(values: EducationValues) {
  const user = await getUser();
  try {
    await prisma.userEducation.create({
      data: {
        university_name: values.university_name,
        enrollment: new Date(values.enrollment),
        completion: values.completion ? new Date(values.completion) : null,
        finished: values.finished,
        description: values.description,
        userId: user.id,
      },
    });

    revalidatePath('/dashboard/onboard');
  } catch (err) {
    return handlePrismaError(err);
  }
}

export async function saveSkills(values: SkillsValues) {
  const user = await getUser();
  try {
    await prisma.userSkill.upsert({
      where: { userId: user.id },
      update: {
        skills: values.skills,
      },
      create: {
        skills: values.skills,
        userId: user.id,
      },
    });

    revalidatePath('/dashboard/onboard');
  } catch (err) {
    return handlePrismaError(err);
  }
}

export async function saveCertification(values: CertificationValues) {
  const user = await getUser();
  try {
    await prisma.userCertification.create({
      data: {
        name: values.name,
        emittedAt: new Date(values.emittedAt),
        description: values.description,
        userId: user.id,
      },
    });

    revalidatePath('/dashboard/onboard');
  } catch (err) {
    return handlePrismaError(err);
  }
}

export async function completeOnboarding() {
  const user = await getUser();
  try {
    await prisma.onboard.upsert({
      where: { userId: user.id },
      update: {
        onboarded: true,
      },
      create: {
        userId: user.id,
        onboarded: true,
      },
    });

    revalidatePath('/dashboard/onboard');
  } catch (err) {
    return handlePrismaError(err);
  }
}

export async function getOnboardData() {
  const user = await getUser();
  try {
    const [workExperiences, educations, skills, certifications] = await Promise.all([
      prisma.userWorkExperience.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.userEducation.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.userSkill.findUnique({
        where: { userId: user.id },
      }),
      prisma.userCertification.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    return {
      workExperiences,
      educations,
      skills,
      certifications,
    };
  } catch (err) {
    return handlePrismaError(err);
  }
}
