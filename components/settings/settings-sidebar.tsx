'use client';

import * as React from 'react';
import {
  IconBriefcase,
  IconSchool,
  IconCode,
  IconBulb,
  IconCertificate,
  IconLanguage,
} from '@tabler/icons-react';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

export type SettingsSection =
  | 'work'
  | 'education'
  | 'projects'
  | 'skills'
  | 'certifications'
  | 'languages';

export const sections = [
  {
    id: 'work' as const,
    label: 'Work Experience',
    icon: IconBriefcase,
    description: 'Add your professional work history',
  },
  {
    id: 'education' as const,
    label: 'Education',
    icon: IconSchool,
    description: 'Add your academic background',
  },
  {
    id: 'projects' as const,
    label: 'Projects',
    icon: IconCode,
    description: 'Showcase your personal projects',
  },
  {
    id: 'skills' as const,
    label: 'Skills',
    icon: IconBulb,
    description: 'List your technical and soft skills',
  },
  {
    id: 'certifications' as const,
    label: 'Certifications',
    icon: IconCertificate,
    description: 'Add professional certifications',
  },
  {
    id: 'languages' as const,
    label: 'Languages',
    icon: IconLanguage,
    description: 'List languages you speak',
  },
];

interface SettingsSidebarProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

export function SettingsSidebar({
  activeSection,
  onSectionChange,
}: SettingsSidebarProps) {
  return (
    <div className="w-64 border-r bg-muted/20 flex flex-col">
      <DialogHeader className="p-6 pb-4">
        <DialogTitle>Profile Settings</DialogTitle>
        <DialogDescription>
          Manage your professional information
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 pb-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate text-left">{section.label}</span>
              </button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}

