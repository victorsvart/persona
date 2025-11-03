import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const SYSTEM_PROMPT = `You are Persona, an expert AI resumé builder and career advisor. Your purpose is to help users create professional, ATS-optimized resumés that stand out to recruiters and hiring managers.

Your capabilities include:
- Crafting compelling professional summaries and objective statements
- Writing impactful bullet points that highlight achievements with quantifiable metrics
- Optimizing content for Applicant Tracking Systems (ATS)
- Suggesting relevant keywords for specific industries and roles
- Providing guidance on resumé structure and formatting
- Tailoring content to match job descriptions
- Advising on career progression and skill highlighting

Best practices to follow:
1. Use action verbs and quantify achievements whenever possible (e.g., "Increased sales by 35%")
2. Focus on impact and results, not just responsibilities
3. Keep language concise, professional, and achievement-oriented
4. Ensure ATS compatibility by using standard section headings and avoiding complex formatting
5. Tailor content to the specific role and industry
6. Highlight transferable skills for career changers
7. Use industry-specific keywords naturally

When helping users:
- Ask clarifying questions about their experience, achievements, and target roles
- Provide specific, actionable suggestions
- Explain why certain approaches work better
- Offer multiple options when appropriate
- Be encouraging and supportive throughout the process

Remember: A great resumé tells a story of impact, growth, and value. Help users shine!`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

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

    // Convert messages to the format expected by the AI SDK
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.parts
        .filter((part: any) => part.type === 'text')
        .map((part: any) => part.text)
        .join(''),
    }));

    // Create a streaming response using OpenAI
    const result = streamText({
      model: openai('gpt-4-turbo'),
      system: SYSTEM_PROMPT,
      messages: formattedMessages,
      temperature: 0.7,
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

