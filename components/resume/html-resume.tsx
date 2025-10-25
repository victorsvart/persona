'use client';

import React from 'react';
import { UserApplications } from '@/prisma/generated/prisma';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Eye, 
  Loader2, 
  AlertCircle,
  CheckCircle2 
} from 'lucide-react';
import { toast } from 'sonner';

interface HTMLResumeProps {
  content: string;
  application: UserApplications;
  isGenerating: boolean;
}

export const HTMLResume: React.FC<HTMLResumeProps> = ({
  content,
  application,
  isGenerating,
}) => {
  const [viewMode, setViewMode] = React.useState<'preview' | 'html'>('preview');

  const handleDownload = () => {
    if (!content) {
      toast.error('No resume content to download');
      return;
    }

    try {
      const blob = new Blob([content], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `resume-${application.company_name.toLowerCase().replace(/\s+/g, '-')}-${application.role.toLowerCase().replace(/\s+/g, '-')}.html`;
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
    if (!content) {
      toast.error('No resume content to print');
      return;
    }

    try {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(content);
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

  if (!content) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md">
          <div className="p-4 rounded-full bg-muted mx-auto w-fit">
            <FileText className="h-8 w-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">No Resume Generated Yet</h3>
            <p className="text-sm text-muted-foreground">
              Start a conversation with the AI assistant to generate your personalized resume for this application.
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
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" />
              Generated
            </Badge>
            <span className="text-sm text-muted-foreground">
              Tailored for {application.company_name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode(viewMode === 'preview' ? 'html' : 'preview')}
              className="flex items-center gap-2"
            >
              <Eye className="h-4 w-4" />
              {viewMode === 'preview' ? 'View HTML' : 'View Preview'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Print
            </Button>
            <Button
              size="sm"
              onClick={handleDownload}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="flex-1 overflow-hidden">
        {viewMode === 'preview' ? (
          <div className="h-full overflow-auto p-4">
            <div 
              className="resume-preview"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        ) : (
          <div className="h-full overflow-auto">
            <pre className="p-4 text-xs font-mono whitespace-pre-wrap break-words">
              {content}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
