import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { LOGIN_PAGE_URL } from '@/lib/helpers';
import { ResumeAgent, ResumeGenerationRequest } from '@/lib/openai';
import { prisma } from '@/prisma/client';

export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect(LOGIN_PAGE_URL);
    }

    const body = await request.json();
    const { applicationId, userMessage, userExperience } = body;

    // Get the application
    const application = await prisma.userApplications.findFirst({
      where: {
        id: applicationId,
        userId: session.user.id,
      },
    });

    if (!application) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      );
    }

    // Prepare the request for OpenAI
    const resumeRequest: ResumeGenerationRequest = {
      application: {
        company_name: application.company_name,
        role: application.role,
        job_post: application.job_post,
      },
      user: {
        name: session.user.name,
      },
      userExperience,
      userMessage,
    };

    // Generate the resume
    const result = await ResumeAgent.generateResume(resumeRequest);

    return NextResponse.json({
      success: true,
      content: result.content,
      resumeContent: result.resumeContent,
      suggestions: result.suggestions,
    });
  } catch (error) {
    console.error('Error generating resume:', error);
    return NextResponse.json(
      { error: 'Failed to generate resume' },
      { status: 500 }
    );
  }
}
