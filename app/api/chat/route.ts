import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/prisma/client';
import { generateResumeSystemPrompt } from '@/lib/prompts/resume-system-prompt';

// Note: Cannot use edge runtime with Prisma
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { messages, applicationId } = await req.json();

    // Get authenticated user
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session?.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate API key
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Fetch application if provided
    let systemPrompt = `You are Persona, an expert AI resumé builder and career advisor. Help users create professional, ATS-optimized resumés.`;
    
    if (applicationId) {
      // Fetch application with all user profile data
      const application = await prisma.application.findUnique({
        where: { 
          id: applicationId,
          userId: session.user.id, // Ensure user owns this application
        },
      });

      if (!application) {
        return new Response(
          JSON.stringify({ error: 'Application not found' }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Fetch user and all profile data
      const [user, workExperiences, educations, projects, skills, certifications, languages] = await Promise.all([
        prisma.user.findUnique({
          where: { id: session.user.id },
          select: {
            name: true,
            email: true,
            phone: true,
            linkedinUrl: true,
            githubUrl: true,
            portfolioUrl: true,
            location: true,
          },
        }),
        prisma.workExperience.findMany({
          where: { userId: session.user.id },
          orderBy: [{ sortOrder: 'asc' }, { startDate: 'desc' }],
        }),
        prisma.education.findMany({
          where: { userId: session.user.id },
          orderBy: [{ sortOrder: 'asc' }, { startDate: 'desc' }],
        }),
        prisma.project.findMany({
          where: { userId: session.user.id },
          orderBy: [{ sortOrder: 'asc' }, { startDate: 'desc' }],
        }),
        prisma.skill.findMany({
          where: { userId: session.user.id },
          orderBy: [{ sortOrder: 'asc' }, { category: 'asc' }],
        }),
        prisma.certification.findMany({
          where: { userId: session.user.id },
          orderBy: [{ sortOrder: 'asc' }, { issueDate: 'desc' }],
        }),
        prisma.language.findMany({
          where: { userId: session.user.id },
          orderBy: { sortOrder: 'asc' },
        }),
      ]);

      if (!user) {
        return new Response(
          JSON.stringify({ error: 'User not found' }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Generate comprehensive system prompt
      systemPrompt = generateResumeSystemPrompt(
        {
          user,
          workExperiences,
          educations,
          projects,
          skills,
          certifications,
          languages,
        },
        {
          company: application.company,
          role: application.role,
          jobDescription: application.jobDescription,
        }
      );
    }

    // Convert messages to the format expected by the AI SDK
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.parts
        .filter((part: any) => part.type === 'text')
        .map((part: any) => part.text)
        .join(''),
    }));

    // Save user message to database if applicationId is provided
    if (applicationId && formattedMessages.length > 0) {
      const lastMessage = formattedMessages[formattedMessages.length - 1];
      if (lastMessage.role === 'user') {
        await prisma.chatMessage.create({
          data: {
            applicationId,
            role: 'user',
            content: lastMessage.content,
          },
        });
      }
    }

    // Create a streaming response using OpenAI
    const result = streamText({
      model: openai('gpt-4-turbo'),
      system: systemPrompt,
      messages: formattedMessages,
      temperature: 0.7,
      onFinish: async ({ text }) => {
        // Save assistant response to database
        if (applicationId) {
          await prisma.chatMessage.create({
            data: {
              applicationId,
              role: 'assistant',
              content: text,
            },
          });

          // Extract HTML from response (check for code blocks or raw HTML)
          let html = null;
          
          // Try to extract from markdown code block first
          const codeBlockMatch = text.match(/```(?:html)?\s*\n([\s\S]*?)\n```/);
          if (codeBlockMatch && codeBlockMatch[1]) {
            const extractedHtml = codeBlockMatch[1].trim();
            if (extractedHtml.startsWith('<') && extractedHtml.includes('</')) {
              html = extractedHtml;
            }
          }
          
          // If no code block, check for raw HTML
          if (!html && text.trim().startsWith('<') && text.includes('</')) {
            html = text.trim();
          }

          // If HTML was found, update the application
          if (html) {
            await prisma.application.update({
              where: { id: applicationId },
              data: { generatedResumeHtml: html },
            });
          }
        }
      },
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Error processing chat request',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

