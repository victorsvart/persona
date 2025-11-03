'use client';

import * as React from 'react';
import {
  IconBriefcase,
  IconSchool,
  IconCode,
  IconBulb,
  IconCertificate,
  IconLanguage,
  IconPlus,
  IconX,
} from '@tabler/icons-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { WorkExperienceForm } from '@/components/work-experience-form';

type SettingsSection =
  | 'work'
  | 'education'
  | 'projects'
  | 'skills'
  | 'certifications'
  | 'languages';

interface UserSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const sections = [
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

export function UserSettingsDialog({
  open,
  onOpenChange,
}: UserSettingsDialogProps) {
  const [activeSection, setActiveSection] =
    React.useState<SettingsSection>('work');
  const [workExpFormOpen, setWorkExpFormOpen] = React.useState(false);

  const handleAddNew = () => {
    if (activeSection === 'work') {
      setWorkExpFormOpen(true);
    }
    // TODO: Add handlers for other sections
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] max-w-[1400px] h-[80vh] p-0 gap-0 overflow-hidden">
        <div className="flex h-full relative">
          {/* Sidebar */}
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
                      onClick={() => setActiveSection(section.id)}
                      className={cn(
                        'w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                        activeSection === section.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="truncate text-left">
                        {section.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollArea>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col">
            <div className="border-b px-6 py-4 pr-16 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">
                  {sections.find((s) => s.id === activeSection)?.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {sections.find((s) => s.id === activeSection)?.description}
                </p>
              </div>
              <Button size="sm" onClick={handleAddNew}>
                <IconPlus className="mr-2 h-4 w-4" />
                Add New
              </Button>
            </div>

            <ScrollArea className="flex-1 p-6">
              <SectionContent section={activeSection} />
            </ScrollArea>
          </div>
        </div>
        
        {/* Work Experience Form Drawer */}
        <WorkExperienceForm
          open={workExpFormOpen}
          onOpenChange={setWorkExpFormOpen}
        />
      </DialogContent>
    </Dialog>
  );
}

function SectionContent({ section }: { section: SettingsSection }) {
  // Placeholder content - will be replaced with actual forms
  return (
    <div className="space-y-4">
      {section === 'work' && <WorkExperienceContent />}
      {section === 'education' && <EducationContent />}
      {section === 'projects' && <ProjectsContent />}
      {section === 'skills' && <SkillsContent />}
      {section === 'certifications' && <CertificationsContent />}
      {section === 'languages' && <LanguagesContent />}
    </div>
  );
}

function WorkExperienceContent() {
  return (
    <div className="space-y-4">
      <EmptyState
        title="No work experience added yet"
        description="Add your work experience to help create a compelling resumé"
      />
    </div>
  );
}

function EducationContent() {
  return (
    <div className="space-y-4">
      <EmptyState
        title="No education added yet"
        description="Add your educational background to showcase your qualifications"
      />
    </div>
  );
}

function ProjectsContent() {
  return (
    <div className="space-y-4">
      <EmptyState
        title="No projects added yet"
        description="Showcase your personal or professional projects"
      />
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="space-y-4">
      <EmptyState
        title="No skills added yet"
        description="Add your technical and soft skills to highlight your expertise"
      />
    </div>
  );
}

function CertificationsContent() {
  return (
    <div className="space-y-4">
      <EmptyState
        title="No certifications added yet"
        description="Add professional certifications to boost your credentials"
      />
    </div>
  );
}

function LanguagesContent() {
  return (
    <div className="space-y-4">
      <EmptyState
        title="No languages added yet"
        description="List the languages you speak and your proficiency level"
      />
    </div>
  );
}

function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-3 mb-4">
        <IconPlus className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
    </div>
  );
}

