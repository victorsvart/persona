'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ApplicationDetailDialog } from '@/components/application-detail-dialog';
import { Building2, Briefcase, Calendar } from 'lucide-react';
import { UserApplications } from '@/prisma/generated/prisma';

interface ApplicationPageClientProps {
  applications: UserApplications[];
  onApplicationUpdate?: (updatedApplication: UserApplications) => void;
}

// Helper function to format relative time
function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    return 'today';
  } else if (diffInDays === 1) {
    return 'yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else {
    const months = Math.floor(diffInDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
}

export const ApplicationPageClient: React.FC<ApplicationPageClientProps> = ({
  applications,
  onApplicationUpdate,
}) => {
  console.log('ApplicationPageClient rendered with applications:', applications.length);
  const [selectedApplication, setSelectedApplication] = useState<UserApplications | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [localApplications, setLocalApplications] = useState<UserApplications[]>(applications);

  // Update local applications when props change
  React.useEffect(() => {
    setLocalApplications(applications);
  }, [applications]);

  const handleCardClick = (application: UserApplications) => {
    console.log('Card clicked:', application);
    setSelectedApplication(application);
    setDialogOpen(true);
  };

  const handleApplicationUpdate = (updatedApplication: UserApplications) => {
    setLocalApplications(prev => 
      prev.map(app => 
        app.id === updatedApplication.id ? updatedApplication : app
      )
    );
    setSelectedApplication(updatedApplication);
    onApplicationUpdate?.(updatedApplication);
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {localApplications.map((app) => (
          <Card 
            key={app.id} 
            className="hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] border-2 hover:border-primary/20"
            onClick={() => handleCardClick(app)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    {app.company_name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-3 w-3" />
                    {app.role}
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  Applied
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    Applied {formatRelativeTime(new Date(app.createdAt))}
                  </div>
                </div>
                
                {app.job_post && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Job Posting:</p>
                    <div className="bg-muted/50 rounded-md p-3 max-h-32 overflow-y-auto">
                      <p className="text-sm text-muted-foreground line-clamp-4">
                        {app.job_post}
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground text-center">
                    Click to view details
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ApplicationDetailDialog
        application={selectedApplication}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onApplicationUpdate={handleApplicationUpdate}
      />
    </>
  );
};
