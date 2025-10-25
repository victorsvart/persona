'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { UserApplications } from '@/prisma/generated/prisma';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { ContentLoader } from '@/lib/content-loader';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ResumeChatbotProps {
  application: UserApplications;
  onResumeGenerated: (content: string) => void;
  isGenerating: boolean;
  setIsGenerating: (generating: boolean) => void;
}

export const ResumeChatbot: React.FC<ResumeChatbotProps> = ({
  application,
  onResumeGenerated,
  isGenerating,
  setIsGenerating,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleAutoGenerateResume = useCallback(async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/dashboard/resume/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicationId: application.id,
          userMessage: 'Generate my resume',
          userExperience: {
            // TODO: Add user experience data from profile
            professional_summary: '',
            work_experience: [],
            skills: [],
            education: [],
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate resume');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Generate and save the resume
      if (data.resumeContent) {
        onResumeGenerated(data.resumeContent);
      }
    } catch (error) {
      console.error('Error auto-generating resume:', error);
      toast.error('Failed to generate initial resume');
    } finally {
      setIsGenerating(false);
    }
  }, [application.id, onResumeGenerated, setIsGenerating]);

  // Initialize with welcome message and auto-generate initial resume
  useEffect(() => {
    if (messages.length === 0) {
      const loadWelcomeMessage = async () => {
        try {
          const welcomeTemplate = await ContentLoader.loadWelcomeMessage();
          const welcomeContent = ContentLoader.replacePlaceholders(welcomeTemplate, {
            ROLE: application.role,
            COMPANY_NAME: application.company_name,
          });

          const welcomeMessage: Message = {
            id: 'welcome',
            role: 'assistant',
            content: welcomeContent,
            timestamp: new Date(),
          };
          setMessages([welcomeMessage]);

          // Auto-generate initial resume
          setTimeout(() => {
            handleAutoGenerateResume();
          }, 2000);
        } catch (error) {
          console.error('Error loading welcome message:', error);
          // Fallback to hardcoded message
          const welcomeMessage: Message = {
            id: 'welcome',
            role: 'assistant',
            content: `Hello! I'm here to help you create a tailored resume for your ${application.role} position at ${application.company_name}.`,
            timestamp: new Date(),
          };
          setMessages([welcomeMessage]);
        }
      };

      loadWelcomeMessage();
    }
  }, [application, messages.length, handleAutoGenerateResume]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isGenerating) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsGenerating(true);

    try {
      // Call the real OpenAI API
      const response = await fetch('/dashboard/resume/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicationId: application.id,
          userMessage: inputValue.trim(),
          userExperience: {
            // TODO: Add user experience data from profile
            professional_summary: '',
            work_experience: [],
            skills: [],
            education: [],
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate resume');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);

      // If the response includes resume content, pass it to the parent
      if (data.resumeContent) {
        onResumeGenerated(data.resumeContent);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.role === 'assistant' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary" />
              </div>
            )}
            <div
              className={`max-w-[80%] ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              } rounded-lg p-3`}
            >
              <div className="whitespace-pre-wrap text-sm">
                {message.content}
              </div>
              <div
                className={`text-xs mt-1 ${
                  message.role === 'user'
                    ? 'text-primary-foreground/70'
                    : 'text-muted-foreground'
                }`}
              >
                {formatTime(message.timestamp)}
              </div>
            </div>
            {message.role === 'user' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
            )}
          </div>
        ))}
        {isGenerating && (
          <div className="flex gap-3 justify-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>AI is thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about your resume..."
            disabled={isGenerating}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isGenerating}
            size="sm"
            className="px-3"
          >
            {isGenerating ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="outline" className="text-xs">
            <Sparkles className="h-3 w-3 mr-1" />
            AI Powered
          </Badge>
          <span className="text-xs text-muted-foreground">
            Powered by ChatGPT
          </span>
        </div>
      </div>
    </div>
  );
};


