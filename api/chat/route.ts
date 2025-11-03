import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Mock response - replace this with actual OpenAI implementation
    const lastMessage = messages[messages.length - 1];
    
    const mockResponse = `This is a mock response to: "${lastMessage.content}"\n\nThe OpenAI integration will be implemented here. For now, this is just a placeholder to demonstrate the chat interface layout.`;

    // Create a streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        // Simulate streaming by sending the response in chunks
        const words = mockResponse.split(' ');
        let index = 0;

        const interval = setInterval(() => {
          if (index < words.length) {
            const chunk = (index === 0 ? words[index] : ' ' + words[index]);
            controller.enqueue(
              encoder.encode(`0:"${chunk}"\n`)
            );
            index++;
          } else {
            clearInterval(interval);
            controller.close();
          }
        }, 50);
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Error processing chat request', { status: 500 });
  }
}

