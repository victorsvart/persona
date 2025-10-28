'use client';

import React from 'react';
import { UserApplications, UserResume } from '@/prisma/generated/prisma';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FileText,
  Download,
  Eye,
  Loader2,
  AlertCircle,
  CheckCircle2,
  History,
  Plus,
} from 'lucide-react';
import { toast } from 'sonner';
import {
  deleteResume,
  setActiveResume,
} from '@/app/[locale]/dashboard/resume/actions';

interface HTMLResumeProps {
  resume: UserResume | null;
  application: UserApplications & {
    resumes: UserResume[];
  };
  isGenerating: boolean;
  onResumeUpdated: (resume: UserResume) => void;
}

export const HTMLResume: React.FC<HTMLResumeProps> = ({
  resume,
  application,
  isGenerating,
  onResumeUpdated,
}) => {
  const [viewMode, setViewMode] = React.useState<'preview' | 'html'>('preview');

  const handleVersionChange = async (resumeId: string) => {
    try {
      const result = await setActiveResume(resumeId);
      if (result.success) {
        const selectedResume = application.resumes.find(
          (r) => r.id === resumeId,
        );
        if (selectedResume) {
          onResumeUpdated(selectedResume);
          toast.success('Resume version switched successfully!');
        }
      } else {
        toast.error(result.error || 'Failed to switch resume version');
      }
    } catch (error) {
      console.error('Error switching resume version:', error);
      toast.error('Failed to switch resume version');
    }
  };

  const handleDeleteResume = async (resumeId: string) => {
    if (!confirm('Are you sure you want to delete this resume version?')) {
      return;
    }

    try {
      const result = await deleteResume(resumeId);
      if (result.success) {
        // If we deleted the active resume, switch to another one
        if (resume?.id === resumeId) {
          const remainingResumes = application.resumes.filter(
            (r) => r.id !== resumeId,
          );
          if (remainingResumes.length > 0) {
            const newActive =
              remainingResumes.find((r) => r.isActive) || remainingResumes[0];
            onResumeUpdated(newActive);
          } else {
            onResumeUpdated(null as unknown as UserResume);
          }
        }
        toast.success('Resume version deleted successfully!');
      } else {
        toast.error(result.error || 'Failed to delete resume version');
      }
    } catch (error) {
      console.error('Error deleting resume:', error);
      toast.error('Failed to delete resume version');
    }
  };

  const handleDownload = () => {
    if (!resume?.content) {
      toast.error('No resume content to download');
      return;
    }

    try {
      const blob = new Blob([resume.content], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `resume-${application.company_name
        .toLowerCase()
        .replace(/\s+/g, '-')}-${application.role
        .toLowerCase()
        .replace(/\s+/g, '-')}-v${resume.version}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('Resume downloaded successfully!');
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast.error('Failed to download resume');
    }
  };

  const handlePrint = () => {
    if (!resume?.content) {
      toast.error('No resume content to print');
      return;
    }

    try {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(resume.content);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
        toast.success('Resume sent to printer!');
      }
    } catch (error) {
      console.error('Error printing resume:', error);
      toast.error('Failed to print resume');
    }
  };

  if (isGenerating) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <div>
            <h3 className="font-semibold">Generating Resume...</h3>
            <p className="text-sm text-muted-foreground">
              Our AI is crafting your personalized resume
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md">
          <div className="p-4 rounded-full bg-muted mx-auto w-fit">
            <FileText className="h-8 w-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">No Resume Generated Yet</h3>
            <p className="text-sm text-muted-foreground">
              Start a conversation with the AI assistant to generate your
              personalized resume for this application.
            </p>
          </div>
          <div className="flex items-center gap-2 justify-center text-xs text-muted-foreground">
            <AlertCircle className="h-3 w-3" />
            <span>Resume will appear here once generated</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header Controls */}
      <div className="border-b bg-muted/30 px-4 py-3">
        <div className="flex flex-col gap-3">
          {/* Top row - Status and version info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                Generated
              </Badge>
              <span className="text-sm text-muted-foreground">
                Tailored for {application.company_name}
              </span>
            </div>
            {application.resumes.length > 1 && (
              <div className="flex items-center gap-2">
                <History className="h-4 w-4 text-muted-foreground" />
                <Select value={resume.id} onValueChange={handleVersionChange}>
                  <SelectTrigger className="w-28 h-8 text-xs">
                    <SelectValue placeholder="Version" />
                  </SelectTrigger>
                  <SelectContent>
                    {application.resumes.map((r) => (
                      <SelectItem key={r.id} value={r.id}>
                        <div className="flex items-center gap-2">
                          <span>v{r.version}</span>
                          {r.isActive && (
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {/* Bottom row - Action buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setViewMode(viewMode === 'preview' ? 'html' : 'preview')
                }
                className="flex items-center gap-1.5 h-8 px-3"
              >
                <Eye className="h-3.5 w-3.5" />
                <span className="text-xs">
                  {viewMode === 'preview' ? 'HTML' : 'Preview'}
                </span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrint}
                className="flex items-center gap-1.5 h-8 px-3"
              >
                <FileText className="h-3.5 w-3.5" />
                <span className="text-xs">Print</span>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={handleDownload}
                className="flex items-center gap-1.5 h-8 px-3 bg-primary hover:bg-primary/90"
              >
                <Download className="h-3.5 w-3.5" />
                <span className="text-xs">Download</span>
              </Button>
              {application.resumes.length > 1 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeleteResume(resume.id)}
                  className="flex items-center gap-1.5 h-8 px-3 text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <Plus className="h-3.5 w-3.5 rotate-45" />
                  <span className="text-xs">Delete</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="flex-1 overflow-hidden">
        {viewMode === 'preview' ? (
          <div className="h-full overflow-auto p-4 bg-white">
            <div
              className="resume-preview max-w-full bg-white"
              style={{
                maxHeight: '100%',
                overflow: 'auto',
                padding: '0',
                margin: '0',
                backgroundColor: '#ffffff',
                isolation: 'isolate',
              }}
              dangerouslySetInnerHTML={{ __html: resume.content }}
            />
          </div>
        ) : (
          <div className="h-full overflow-auto">
            <pre className="p-4 text-xs font-mono whitespace-pre-wrap break-words">
              {resume.content}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
