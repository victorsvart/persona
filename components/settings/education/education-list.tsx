'use client';

import * as React from 'react';
import { EducationCard } from './education-card';
import { EmptyState } from '@/components/settings/empty-state';
import { getEducations } from '@/app/actions/education';
import { toast } from 'sonner';
import { Education } from '@prisma/client';

interface EducationListProps {
  onEdit: (education: Education) => void;
  refreshTrigger?: number;
}

export function EducationList({
  onEdit,
  refreshTrigger = 0,
}: EducationListProps) {
  const [educations, setEducations] = React.useState<Education[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchEducations = React.useCallback(async () => {
    setLoading(true);
    const result = await getEducations();

    if (result.success && result.data) {
      setEducations(result.data);
    } else {
      toast.error(result.error || 'Failed to load education records');
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    fetchEducations();
  }, [fetchEducations, refreshTrigger]);

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

  if (educations.length === 0) {
    return (
      <EmptyState
        title="No education added yet"
        description="Add your education to showcase your academic background"
      />
    );
  }

  return (
    <div className="space-y-4">
      {educations.map((education) => (
        <EducationCard
          key={education.id}
          education={education}
          onClick={() => onEdit(education)}
        />
      ))}
    </div>
  );
}

