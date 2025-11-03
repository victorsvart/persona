'use client';

import { IconPlus } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

interface SettingsContentHeaderProps {
  title: string;
  description: string;
  onAddNew?: () => void;
}

export function SettingsContentHeader({
  title,
  description,
  onAddNew,
}: SettingsContentHeaderProps) {
  return (
    <div className="border-b px-6 py-4 pr-16 flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {onAddNew && (
        <Button size="sm" onClick={onAddNew}>
          <IconPlus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      )}
    </div>
  );
}

