import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { LOGIN_PAGE_URL, getUserProfileData } from '@/lib/helpers';
import { ResumeAgent, ResumeGenerationRequest, OpenAIError } from '@/lib/openai';
import { prisma } from '@/prisma/client';

/**
 * Helper to create SSE (Server-Sent Events) response
 */
function createSSEResponse() {
  const encoder = new TextEncoder();
  
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  return {
    response: new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    }),
    sendEvent: async (event: string, data: unknown) => {
      const message = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
      await writer.write(encoder.encode(message));
    },
    close: () => writer.close(),
  };
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect(LOGIN_PAGE_URL);
    }

    const body = await request.json();
    const { applicationId, userMessage, conversationHistory, stream = false } = body;
    // Note: userExperience will be fetched from database, not from request

    // Validate request body
    if (!applicationId) {
      return NextResponse.json(
        { error: 'Application ID is required', code: 'MISSING_APPLICATION_ID' },
        { status: 400 }
      );
    }

    // Get the application
    const application = await prisma.userApplications.findFirst({
      where: {
        id: applicationId,
        userId: session.user.id,
      },
    });

    if (!application) {
      return NextResponse.json(
        { error: 'Application not found', code: 'APPLICATION_NOT_FOUND' },
        { status: 404 }
      );
    }

    // Fetch user profile data from database
    const userProfileData = await getUserProfileData(session.user.id);
    
    console.log('Fetched user profile data:', {
      hasProfile: !!userProfileData,
      hasSummary: !!userProfileData?.professional_summary,
      workExpCount: userProfileData?.work_experience?.length || 0,
      skillsCount: userProfileData?.skills?.length || 0,
      educationCount: userProfileData?.education?.length || 0,
      projectsCount: userProfileData?.personal_projects?.length || 0,
    });

    // Prepare the request for OpenAI
    const resumeRequest: ResumeGenerationRequest = {
      application: {
        company_name: application.company_name,
        role: application.role,
        job_post: application.job_post,
      },
      user: {
        name: session.user.name,
        email: session.user.email,
        // TODO: Add phone, linkedin, location from user profile when available
      },
      userExperience: userProfileData || undefined, // Use fetched data instead of request body
      userMessage,
      conversationHistory,
    };

    // Handle streaming response
    if (stream) {
      const { response, sendEvent, close } = createSSEResponse();

      // Generate resume with streaming in the background
      (async () => {
        try {
          for await (const chunk of ResumeAgent.generateResumeStream(resumeRequest)) {
            await sendEvent(chunk.type, chunk);
            
            // Close stream after done or error
            if (chunk.type === 'done' || chunk.type === 'error') {
              close();
              break;
            }
          }
        } catch (error) {
          console.error('Streaming error:', error);
          await sendEvent('error', {
            type: 'error',
            error: 'An unexpected error occurred during streaming.',
          });
          close();
        }
      })();

      return response;
    }

    // Handle non-streaming response (fallback)
    const result = await ResumeAgent.generateResume(resumeRequest);

    return NextResponse.json({
      success: true,
      content: result.content,
      resumeContent: result.resumeContent,
      suggestions: result.suggestions,
    });
  } catch (error) {
    // Handle OpenAI-specific errors
    if (error instanceof OpenAIError) {
      console.error('OpenAI Error:', {
        code: error.code,
        message: error.message,
        statusCode: error.statusCode,
      });

      return NextResponse.json(
        { 
          error: error.message,
          code: error.code,
        },
        { status: error.statusCode || 500 }
      );
    }

    // Handle generic errors
    console.error('Error generating resume:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });

    return NextResponse.json(
      { 
        error: 'An unexpected error occurred while generating your resume. Please try again.',
        code: 'INTERNAL_ERROR',
      },
      { status: 500 }
    );
  }
}

// Set a longer timeout for this route (60 seconds)
export const maxDuration = 60;
