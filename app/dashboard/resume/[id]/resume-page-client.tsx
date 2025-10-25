'use client';

import React, { useState, useEffect } from 'react';
import { UserApplications, UserResume } from '@/prisma/generated/prisma';
import { ResumeChatbot } from '@/components/resume/resume-chatbot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, Briefcase, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { HTMLResume } from '@/components/resume/html-resume';
import { createResume } from '../actions';
import { toast } from 'sonner';

interface ResumePageClientProps {
  application: UserApplications & {
    resumes: UserResume[];
  };
}

export const ResumePageClient: React.FC<ResumePageClientProps> = ({ application }) => {
  const router = useRouter();
  const [activeResume, setActiveResume] = useState<UserResume | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Set active resume on mount
  useEffect(() => {
    if (application.resumes.length > 0) {
      const active = application.resumes.find(r => r.isActive) || application.resumes[0];
      setActiveResume(active);
    }
  }, [application.resumes]);

  const handleResumeGenerated = async (content: string) => {
    setIsGenerating(true);
    try {
      const result = await createResume(application.id, content, `Resume v${application.resumes.length + 1}`);
      if (result.success && result.resume) {
        setActiveResume(result.resume);
        toast.success('Resume saved successfully!');
      } else {
        toast.error(result.error || 'Failed to save resume');
      }
    } catch (error) {
      console.error('Error saving resume:', error);
      toast.error('Failed to save resume');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleResumeUpdated = (resume: UserResume) => {
    setActiveResume(resume);
  };

  const handleBackToApplications = () => {
    router.push('/dashboard/applications');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBackToApplications}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Applications
              </Button>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Resume Builder</h1>
                  <p className="text-sm text-muted-foreground">
                    Generate a tailored resume for your application
                  </p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Building2 className="h-3 w-3" />
              {application.company_name}
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-140px)] min-h-0">
          {/* Left Side - Chatbot */}
          <div className="flex flex-col min-h-0">
            <Card className="flex-1 flex flex-col min-h-0">
              <CardHeader className="pb-4 flex-shrink-0">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  AI Resume Assistant
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Chat with our AI to build a personalized resume for this application
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-0 min-h-0">
                <ResumeChatbot
                  application={application}
                  onResumeGenerated={handleResumeGenerated}
                  isGenerating={isGenerating}
                  setIsGenerating={setIsGenerating}
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Side - HTML Resume */}
          <div className="flex flex-col min-h-0">
            <Card className="flex-1 flex flex-col min-h-0">
              <CardHeader className="pb-4 flex-shrink-0">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Resume Preview
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Your generated resume will appear here
                </p>
              </CardHeader>
              <CardContent className="flex-1 p-0 min-h-0">
                <HTMLResume
                  resume={activeResume}
                  application={application}
                  isGenerating={isGenerating}
                  onResumeUpdated={handleResumeUpdated}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
