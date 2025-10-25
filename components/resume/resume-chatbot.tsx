'use client';

import React, { useState, useRef, useEffect } from 'react';
import { UserApplications } from '@/prisma/generated/prisma';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

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

  // Initialize with welcome message and auto-generate initial resume
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        role: 'assistant',
        content: `Hello! I'm here to help you create a tailored resume for your ${application.role} position at ${application.company_name}. 

I can analyze your experience and the job requirements to help you:
• Highlight relevant skills and achievements
• Optimize your resume for ATS systems
• Tailor your experience to match the job description
• Suggest improvements and formatting

Let me start by generating an initial resume based on your application details and the job posting. This will give us a solid foundation to work from!`,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);

      // Auto-generate initial resume
      setTimeout(() => {
        handleAutoGenerateResume();
      }, 2000);
    }
  }, [application, messages.length]);

  const handleAutoGenerateResume = async () => {
    setIsGenerating(true);
    try {
      const response = await simulateChatGPTResponse('generate my resume', application);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.content,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Generate and save the resume
      if (response.resumeContent) {
        onResumeGenerated(response.resumeContent);
      }
    } catch (error) {
      console.error('Error auto-generating resume:', error);
      toast.error('Failed to generate initial resume');
    } finally {
      setIsGenerating(false);
    }
  };

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
      // Simulate API call to ChatGPT
      const response = await simulateChatGPTResponse(inputValue.trim(), application);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.content,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);

      // If the response includes resume content, pass it to the parent
      if (response.resumeContent) {
        onResumeGenerated(response.resumeContent);
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

// Simulate ChatGPT API response
async function simulateChatGPTResponse(
  userMessage: string,
  application: UserApplications
): Promise<{ content: string; resumeContent?: string }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

  const lowerMessage = userMessage.toLowerCase();

  // Simple response simulation based on keywords
  if (lowerMessage.includes('analyze') || lowerMessage.includes('job posting')) {
    return {
      content: `I've analyzed the job posting for ${application.role} at ${application.company_name}. Here are the key requirements I found:

**Key Skills Required:**
• Technical skills relevant to the role
• Problem-solving abilities
• Team collaboration
• Communication skills

**Experience Level:**
• The role appears to require mid-level experience
• Focus on quantifiable achievements
• Emphasize relevant project experience

**Keywords to Include:**
• Industry-specific terminology
• Technical tools and technologies
• Soft skills mentioned in the posting

Would you like me to help you tailor your resume to highlight these specific requirements?`,
    };
  }

  if (lowerMessage.includes('resume') || lowerMessage.includes('generate')) {
    const resumeContent = generateSampleResume(application);
    return {
      content: `I've generated a tailored resume for your ${application.role} position at ${application.company_name}. The resume highlights your relevant experience and aligns with the job requirements.

**Key improvements made:**
• Optimized for ATS systems
• Highlighted relevant skills and achievements
• Used industry-specific keywords
• Structured for maximum impact

The resume is now displayed in the preview panel. You can ask me to make specific adjustments or improvements!`,
      resumeContent,
    };
  }

  if (lowerMessage.includes('help') || lowerMessage.includes('start')) {
    return {
      content: `I'm here to help you create the perfect resume! Here are some things I can do:

**1. Analyze the Job Posting**
Ask me to "analyze the job posting" and I'll break down the key requirements and keywords.

**2. Generate a Resume**
Say "generate my resume" and I'll create a tailored resume based on your experience and the job requirements.

**3. Optimize Content**
I can help you improve specific sections, add keywords, or restructure your experience.

**4. ATS Optimization**
I'll ensure your resume passes through Applicant Tracking Systems.

**5. Formatting & Structure**
I can suggest better ways to organize and present your information.

What would you like to work on first?`,
    };
  }

  // Default response
  return {
    content: `I understand you're asking about "${userMessage}". I'm here to help you create a compelling resume for your ${application.role} position at ${application.company_name}.

Could you be more specific about what you'd like me to help you with? For example:
• "Analyze the job posting"
• "Generate my resume"
• "Help me improve my experience section"
• "Optimize for ATS systems"

I'm ready to assist you!`,
  };
}

// Generate a sample resume (in a real app, this would call ChatGPT API)
function generateSampleResume(application: UserApplications): string {
  // Extract keywords from job post for better targeting
  const jobPost = application.job_post.toLowerCase();
  const skills = extractSkillsFromJobPost(jobPost);
  const experienceLevel = determineExperienceLevel(jobPost);
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume - ${application.role}</title>
    <style>
        .resume-preview {
            font-family: 'Times New Roman', 'Times', serif !important;
            line-height: 1.3 !important;
            color: #000 !important;
            max-width: 100%;
            width: 100%;
            margin: 0 !important;
            padding: 0.75in !important;
            background: #fff !important;
            box-sizing: border-box !important;
            overflow-x: hidden;
            font-size: 11px !important;
            all: initial;
            font-family: 'Times New Roman', 'Times', serif;
            line-height: 1.3;
            color: #000;
            background: #fff;
            font-size: 11px;
            min-height: 11in;
            max-height: 11in;
        }
        
        @media print {
            .resume-preview {
                margin: 0 !important;
                padding: 0.75in !important;
                width: 8.5in !important;
                height: 11in !important;
                max-width: 8.5in !important;
                max-height: 11in !important;
                font-size: 11px !important;
                line-height: 1.3 !important;
            }
        }
        .resume-preview .header {
            text-align: center;
            border-bottom: 1px solid #000;
            padding-bottom: 12px;
            margin-bottom: 16px;
        }
        .resume-preview .name {
            font-size: 16px;
            font-weight: bold;
            color: #000;
            margin: 0;
            word-wrap: break-word;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .resume-preview .contact {
            font-size: 10px;
            color: #000;
            margin: 6px 0;
            word-wrap: break-word;
        }
        .resume-preview .section {
            margin-bottom: 14px;
        }
        .resume-preview .section-title {
            font-size: 12px;
            font-weight: bold;
            color: #000;
            border-bottom: 1px solid #000;
            padding-bottom: 2px;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }
        .resume-preview .job {
            margin-bottom: 12px;
        }
        .resume-preview .job-title {
            font-weight: bold;
            font-size: 11px;
            color: #000;
        }
        .resume-preview .company {
            color: #000;
            font-weight: bold;
            font-size: 10px;
        }
        .resume-preview .date {
            color: #000;
            font-style: italic;
            float: right;
            font-size: 10px;
        }
        .resume-preview .description {
            margin-top: 2px;
            color: #000;
            font-size: 10px;
            line-height: 1.2;
        }
        .resume-preview .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 3px;
        }
        .resume-preview .skill {
            background: #fff;
            border: 1px solid #000;
            padding: 1px 4px;
            font-size: 9px;
            color: #000;
            margin-right: 3px;
            margin-bottom: 1px;
        }
        .resume-preview .highlight {
            background: #fff;
            border: 1px solid #000;
            padding: 1px 2px;
            font-weight: bold;
            font-size: 10px;
        }
        .resume-preview .job-requirements {
            background: #fff;
            border: 1px solid #000;
            padding: 8px;
            margin: 12px 0;
        }
        .resume-preview * {
            box-sizing: border-box;
        }
        .resume-preview .resume-container {
            max-width: 100%;
            overflow-x: hidden;
            word-wrap: break-word;
            background: #fff;
            color: #000;
        }
        .resume-preview ul {
            margin: 0;
            padding-left: 12px;
        }
        .resume-preview li {
            margin-bottom: 1px;
            font-size: 10px;
            line-height: 1.2;
        }
        .resume-preview p {
            margin: 0 0 6px 0;
            font-size: 10px;
            line-height: 1.2;
        }
        
        /* Print optimizations */
        @media print {
            .resume-preview .job-requirements {
                page-break-inside: avoid;
            }
            .resume-preview .section {
                page-break-inside: avoid;
            }
            .resume-preview .job {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="resume-preview">
        <div class="header">
            <h1 class="name">Your Name</h1>
            <div class="contact">
                your.email@example.com | (555) 123-4567 | LinkedIn: linkedin.com/in/yourprofile
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Professional Summary</h2>
            <p>${experienceLevel} professional seeking the <span class="highlight">${application.role}</span> position at <span class="highlight">${application.company_name}</span>. Proven track record of delivering results and driving innovation in dynamic environments. Passionate about leveraging technical expertise and collaborative skills to contribute to team success.</p>
        </div>

        <div class="section">
            <h2 class="section-title">Professional Experience</h2>
            
            <div class="job">
                <div class="job-title">Senior Software Engineer</div>
                <div class="company">Tech Company Inc.</div>
                <div class="date">2020 - Present</div>
                <div class="description">
                    • Led development of scalable web applications serving 100K+ users<br>
                    • Implemented CI/CD pipelines reducing deployment time by 40%<br>
                    • Mentored junior developers and conducted code reviews<br>
                    • Collaborated with cross-functional teams to deliver features on time
                </div>
            </div>

            <div class="job">
                <div class="job-title">Software Developer</div>
                <div class="company">StartupXYZ</div>
                <div class="date">2018 - 2020</div>
                <div class="description">
                    • Developed full-stack applications using modern technologies<br>
                    • Optimized database queries improving performance by 30%<br>
                    • Participated in agile development processes<br>
                    • Contributed to open-source projects
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Key Skills</h2>
            <div class="skills">
                ${skills.map(skill => `<span class="skill">${skill}</span>`).join('\n                ')}
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Education</h2>
            <div class="job">
                <div class="job-title">Bachelor of Science in Computer Science</div>
                <div class="company">University Name</div>
                <div class="date">2014 - 2018</div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Certifications</h2>
            <div class="description">
                • AWS Certified Solutions Architect<br>
                • Google Cloud Professional Developer<br>
                • Certified Scrum Master (CSM)
            </div>
        </div>

        <div class="job-requirements">
            <h3 style="margin-top: 0; color: #000; font-size: 9px; font-weight: bold;">TARGETED FOR ${application.company_name.toUpperCase()}</h3>
            <p style="margin-bottom: 0; font-size: 8px; color: #000; line-height: 1.1;">
                This resume has been tailored specifically for the ${application.role} position at ${application.company_name}, 
                incorporating relevant keywords and skills from the job posting to maximize ATS compatibility and recruiter appeal.
            </p>
        </div>
    </div>
</body>
</html>
  `.trim();
}

// Helper functions to extract information from job post
function extractSkillsFromJobPost(jobPost: string): string[] {
  const commonSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'C++', 'C#',
    'SQL', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'Kubernetes', 'AWS', 'Azure',
    'Agile', 'Scrum', 'CI/CD', 'REST APIs', 'GraphQL', 'Microservices', 'Machine Learning',
    'Data Analysis', 'Project Management', 'Leadership', 'Communication', 'Problem Solving'
  ];
  
  const foundSkills = commonSkills.filter(skill => 
    jobPost.includes(skill.toLowerCase())
  );
  
  // Add some default skills if none found
  if (foundSkills.length === 0) {
    return ['JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'Agile'];
  }
  
  return foundSkills.slice(0, 10); // Limit to 10 skills
}

function determineExperienceLevel(jobPost: string): string {
  if (jobPost.includes('senior') || jobPost.includes('lead') || jobPost.includes('principal')) {
    return 'Senior-level';
  } else if (jobPost.includes('junior') || jobPost.includes('entry') || jobPost.includes('graduate')) {
    return 'Entry-level';
  } else if (jobPost.includes('mid') || jobPost.includes('intermediate')) {
    return 'Mid-level';
  } else {
    return 'Experienced';
  }
}
