'use client';

import * as React from 'react';
import { IconSend, IconUser, IconRobot } from '@tabler/icons-react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { HtmlPreview } from '@/components/html-preview';
import type { Application, ChatMessage } from '@prisma/client';

type ApplicationWithMessages = Application & {
  messages: ChatMessage[];
};

interface ChatInterfaceProps {
  application?: ApplicationWithMessages | null;
}

export function ChatInterface({ application }: ChatInterfaceProps) {
  const [input, setInput] = React.useState('');

  const transport = React.useMemo(
    () => new DefaultChatTransport({ 
      api: '/api/chat',
      body: application ? { applicationId: application.id } : undefined,
    }),
    [application],
  );

  const { messages, sendMessage, status } = useChat({
    transport,
    id: application?.id, // Use application ID to maintain chat state
  });

  // Merge stored messages with current session messages
  const allMessages = React.useMemo(() => {
    if (!application?.messages || application.messages.length === 0) {
      return messages;
    }

    // If we have no current messages, return stored messages
    if (messages.length === 0) {
      return application.messages.map((msg) => ({
        id: msg.id,
        role: msg.role as 'user' | 'assistant',
        parts: [{ type: 'text' as const, text: msg.content }],
      }));
    }

    // Otherwise, return current messages (they include the stored ones)
    return messages;
  }, [messages, application]);

  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const isLoading = status === 'submitted' || status === 'streaming';

  React.useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        '[data-radix-scroll-area-viewport]',
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [allMessages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    sendMessage({
      role: 'user',
      parts: [{ type: 'text', text: input }],
    });
    setInput('');
  };

  // Extract HTML from assistant messages (look for code blocks or raw HTML)
  const latestHtml = React.useMemo(() => {
    // Find the last assistant message with HTML
    for (let i = allMessages.length - 1; i >= 0; i--) {
      const message = allMessages[i];
      if (message.role === 'assistant') {
        const text = message.parts
          .filter((part) => part.type === 'text')
          .map((part: any) => part.text)
          .join('');
        
        // Try to extract HTML from markdown code blocks first
        const codeBlockMatch = text.match(/```(?:html)?\s*\n([\s\S]*?)\n```/);
        if (codeBlockMatch && codeBlockMatch[1]) {
          const html = codeBlockMatch[1].trim();
          if (html.startsWith('<') && html.includes('</')) {
            return html;
          }
        }
        
        // Check if it contains raw HTML (starts with < and has tags)
        if (text.trim().startsWith('<') && text.includes('</')) {
          return text.trim();
        }
      }
    }
    return application?.generatedResumeHtml || null;
  }, [allMessages, application]);

  return (
    <div className="flex h-full">
      {/* Left Column: Chat */}
      <div className="flex flex-1 flex-col w-1/2">
        {/* Messages Area */}
        <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
          <div className="mx-auto max-w-3xl space-y-4">
            {allMessages.length === 0 ? (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <IconRobot className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">
                    {application 
                      ? `Create Resume for ${application.role} at ${application.company}`
                      : 'Create Your Perfect Resumé'}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {application 
                      ? 'I\'ll help you create a tailored resume for this position. Ask me to generate the initial draft or tell me your preferences.'
                      : 'Select an application from the sidebar to get started.'}
                  </p>
                </div>
              </div>
            ) : (
              allMessages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex gap-3',
                    message.role === 'user' ? 'justify-end' : 'justify-start',
                  )}
                >
                  {message.role === 'assistant' && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                      <IconRobot className="h-5 w-5 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={cn(
                      'max-w-[80%] rounded-lg px-4 py-2',
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted',
                    )}
                  >
                    <p className="whitespace-pre-wrap text-sm">
                      {message.parts
                        .filter((part) => part.type === 'text')
                        .map((part: any) => part.text)
                        .join('')}
                    </p>
                  </div>
                  {message.role === 'user' && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                      <IconUser className="h-5 w-5" />
                    </div>
                  )}
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                  <IconRobot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="max-w-[80%] rounded-lg bg-muted px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t bg-background/95 p-4 backdrop-blur supports-backdrop-filter:bg-background/60">
          <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={application ? "Ask me to generate a resume or request changes..." : "Select an application to start chatting..."}
                className="flex-1"
                disabled={isLoading || !application}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim() || !application}
              >
                <IconSend className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column: HTML Preview */}
      <div className="w-1/2">
        <HtmlPreview html={latestHtml} />
      </div>
    </div>
  );
}
