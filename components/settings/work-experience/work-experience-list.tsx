'use client';

import * as React from 'react';
import { WorkExperienceCard } from './work-experience-card';
import { EmptyState } from '@/components/settings/empty-state';
import { getWorkExperiences } from '@/app/actions/work-experience';
import { toast } from 'sonner';
import { WorkExperience } from '@prisma/client';

interface WorkExperienceListProps {
  onEdit: (workExperience: WorkExperience) => void;
  refreshTrigger?: number;
}

export function WorkExperienceList({ 
  onEdit, 
  refreshTrigger = 0 
}: WorkExperienceListProps) {
  const [workExperiences, setWorkExperiences] = React.useState<
    WorkExperience[]
  >([]);
  const [loading, setLoading] = React.useState(true);

  const fetchWorkExperiences = React.useCallback(async () => {
    setLoading(true);
    const result = await getWorkExperiences();

    if (result.success && result.data) {
      setWorkExperiences(result.data);
    } else {
      toast.error(result.error || 'Failed to load work experiences');
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    fetchWorkExperiences();
  }, [fetchWorkExperiences, refreshTrigger]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-40 bg-muted animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    );
  }

  if (workExperiences.length === 0) {
    return (
      <EmptyState
        title="No work experience added yet"
        description="Add your work experience to help create a compelling resumé"
      />
    );
  }

  return (
    <div className="space-y-4">
      {workExperiences.map((workExperience) => (
        <WorkExperienceCard
          key={workExperience.id}
          workExperience={workExperience}
          onClick={() => onEdit(workExperience)}
        />
      ))}
    </div>
  );
}

