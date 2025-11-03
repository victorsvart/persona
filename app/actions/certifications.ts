'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/prisma/client';

interface CreateCertificationInput {
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expirationDate?: string;
  doesNotExpire: boolean;
  credentialId?: string;
  credentialUrl?: string;
}

export async function createCertification(data: CreateCertificationInput) {
  try {
    // Get authenticated session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        error: 'Unauthorized. Please log in.',
      };
    }

    // Convert date strings to Date objects
    const issueDate = new Date(data.issueDate + '-01');
    const expirationDate = data.expirationDate && !data.doesNotExpire 
      ? new Date(data.expirationDate + '-01') 
      : null;

    // Create certification
    const certification = await prisma.certification.create({
      data: {
        userId: session.user.id,
        name: data.name,
        issuingOrganization: data.issuingOrganization,
        issueDate,
        expirationDate,
        doesNotExpire: data.doesNotExpire,
        credentialId: data.credentialId || null,
        credentialUrl: data.credentialUrl || null,
        sortOrder: 0, // TODO: Calculate based on existing entries
      },
    });

    // Revalidate the dashboard page
    revalidatePath('/dashboard');

    return {
      success: true,
      data: certification,
    };
  } catch (error) {
    console.error('Error creating certification:', error);
    return {
      success: false,
      error: 'Failed to save certification. Please try again.',
    };
  }
}

export async function getCertifications() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        error: 'Unauthorized. Please log in.',
      };
    }

    const certifications = await prisma.certification.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: [
        { sortOrder: 'asc' },
        { issueDate: 'desc' },
      ],
    });

    return {
      success: true,
      data: certifications,
    };
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return {
      success: false,
      error: 'Failed to load certifications.',
    };
  }
}

export async function updateCertification(id: string, data: Partial<CreateCertificationInput>) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        error: 'Unauthorized. Please log in.',
      };
    }

    // Verify ownership
    const existing = await prisma.certification.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Certification not found or unauthorized.',
      };
    }

    // Prepare update data
    const updateData: any = {};
    
    if (data.name) updateData.name = data.name;
    if (data.issuingOrganization) updateData.issuingOrganization = data.issuingOrganization;
    if (data.issueDate) updateData.issueDate = new Date(data.issueDate + '-01');
    if (data.expirationDate !== undefined) {
      updateData.expirationDate = data.expirationDate && !data.doesNotExpire
        ? new Date(data.expirationDate + '-01')
        : null;
    }
    if (data.doesNotExpire !== undefined) updateData.doesNotExpire = data.doesNotExpire;
    if (data.credentialId !== undefined) updateData.credentialId = data.credentialId || null;
    if (data.credentialUrl !== undefined) updateData.credentialUrl = data.credentialUrl || null;

    const certification = await prisma.certification.update({
      where: { id },
      data: updateData,
    });

    revalidatePath('/dashboard');

    return {
      success: true,
      data: certification,
    };
  } catch (error) {
    console.error('Error updating certification:', error);
    return {
      success: false,
      error: 'Failed to update certification. Please try again.',
    };
  }
}

export async function deleteCertification(id: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        error: 'Unauthorized. Please log in.',
      };
    }

    // Verify ownership
    const existing = await prisma.certification.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!existing || existing.userId !== session.user.id) {
      return {
        success: false,
        error: 'Certification not found or unauthorized.',
      };
    }

    await prisma.certification.delete({
      where: { id },
    });

    revalidatePath('/dashboard');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error deleting certification:', error);
    return {
      success: false,
      error: 'Failed to delete certification. Please try again.',
    };
  }
}

