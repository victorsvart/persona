'use client';

import * as React from 'react';
import { CertificationCard } from './certification-card';
import { EmptyState } from '@/components/settings/empty-state';
import { getCertifications } from '@/app/actions/certifications';
import { toast } from 'sonner';
import { Certification } from '@prisma/client';

interface CertificationListProps {
  onEdit: (certification: Certification) => void;
  refreshTrigger?: number;
}

export function CertificationList({ 
  onEdit, 
  refreshTrigger = 0 
}: CertificationListProps) {
  const [certifications, setCertifications] = React.useState<Certification[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchCertifications = React.useCallback(async () => {
    setLoading(true);
    const result = await getCertifications();

    if (result.success && result.data) {
      setCertifications(result.data);
    } else {
      toast.error(result.error || 'Failed to load certifications');
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    fetchCertifications();
  }, [fetchCertifications, refreshTrigger]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-32 bg-muted animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    );
  }

  if (certifications.length === 0) {
    return (
      <EmptyState
        title="No certifications added yet"
        description="Add professional certifications to boost your credentials"
      />
    );
  }

  return (
    <div className="space-y-4">
      {certifications.map((certification) => (
        <CertificationCard
          key={certification.id}
          certification={certification}
          onClick={() => onEdit(certification)}
        />
      ))}
    </div>
  );
}

