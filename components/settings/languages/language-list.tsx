'use client';

import * as React from 'react';
import { LanguageCard } from './language-card';
import { EmptyState } from '@/components/settings/empty-state';
import { getLanguages } from '@/app/actions/languages';
import { toast } from 'sonner';
import { Language } from '@prisma/client';

interface LanguageListProps {
  onEdit: (language: Language) => void;
  refreshTrigger?: number;
}

export function LanguageList({ 
  onEdit, 
  refreshTrigger = 0 
}: LanguageListProps) {
  const [languages, setLanguages] = React.useState<Language[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchLanguages = React.useCallback(async () => {
    setLoading(true);
    const result = await getLanguages();

    if (result.success && result.data) {
      setLanguages(result.data);
    } else {
      toast.error(result.error || 'Failed to load languages');
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    fetchLanguages();
  }, [fetchLanguages, refreshTrigger]);

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-16 bg-muted animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    );
  }

  if (languages.length === 0) {
    return (
      <EmptyState
        title="No languages added yet"
        description="List the languages you speak and your proficiency level"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {languages.map((language) => (
        <LanguageCard
          key={language.id}
          language={language}
          onClick={() => onEdit(language)}
        />
      ))}
    </div>
  );
}

