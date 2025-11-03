'use client';

import * as React from 'react';
import { IconSend, IconUser, IconRobot } from '@tabler/icons-react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

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

  // Always show current session messages, or fall back to stored messages
  const allMessages = React.useMemo(() => {
    // If we have current session messages, use them
    if (messages.length > 0) {
      console.log('[ChatInterface] Using session messages:', messages.length);
      return messages;
    }
    
    // Otherwise, load from stored messages in application
    if (application?.messages && application.messages.length > 0) {
      console.log('[ChatInterface] Using stored messages:', application.messages.length);
      return application.messages.map((msg) => ({
        id: msg.id,
        role: msg.role as 'user' | 'assistant',
        parts: [{ type: 'text' as const, text: msg.content }],
      }));
    }

    console.log('[ChatInterface] No messages to display');
    return [];
  }, [messages, application]);

  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const isLoading = status === 'submitted' || status === 'streaming';
  const prevStatusRef = React.useRef(status);

  // Log status changes for debugging
  React.useEffect(() => {
    console.log('[ChatInterface] Status changed:', status, 'Messages:', messages.length);
  }, [status, messages.length]);

  // Detect when streaming completes and refresh to get persisted data
  React.useEffect(() => {
    const wasStreaming = prevStatusRef.current === 'streaming';
    const isNowIdle = status !== 'streaming' && status !== 'submitted';
    
    console.log('[ChatInterface] Refresh check:', {
      wasStreaming,
      isNowIdle,
      currentStatus: status,
      prevStatus: prevStatusRef.current,
      hasApp: !!application?.id,
      messageCount: messages.length,
    });
    
    if (wasStreaming && isNowIdle && application?.id && messages.length > 1) {
      console.log('[ChatInterface] ✅ Conditions met! Streaming completed, refreshing in 1.5 seconds...');
      // Streaming just completed, refresh the page to get updated data
      const timer = setTimeout(() => {
        console.log('[ChatInterface] 🔄 Refreshing now...');
        router.refresh();
      }, 1500); // Increased delay to ensure backend has finished saving
      
      return () => clearTimeout(timer);
    }
    
    prevStatusRef.current = status;
  }, [status, application?.id, router, messages.length]);

  // Debug: log when application data changes
  React.useEffect(() => {
    if (application) {
      console.log('[ChatInterface] Application updated:', {
        id: application.id,
        messagesCount: application.messages?.length || 0,
        hasHtml: !!application.generatedResumeHtml,
      });
    }
  }, [application]);

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

  // Only show saved HTML from database (no real-time rendering during streaming)
  const latestHtml = React.useMemo(() => {
    return application?.generatedResumeHtml || null;
  }, [application]);

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
              allMessages.map((message) => {
                const text = message.parts
                  .filter((part) => part.type === 'text')
                  .map((part: any) => part.text)
                  .join('');
                
                // Check if this message contains HTML (for assistant messages only)
                const containsHtml = message.role === 'assistant' && (
                  text.includes('```html') || 
                  text.includes('```\n<') ||
                  (text.trim().startsWith('<') && text.includes('</'))
                );
                
                return (
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
                      {containsHtml ? (
                        <div className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">
                            ✨ Resume generated! Check the preview on the right →
                          </p>
                        </div>
                      ) : (
                        <p className="whitespace-pre-wrap text-sm">{text}</p>
                      )}
                    </div>
                    {message.role === 'user' && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                        <IconUser className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                );
              })
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
