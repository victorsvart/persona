'use client';

import * as React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { WorkExperienceForm } from '@/components/work-experience-form';
import {
  SettingsSidebar,
  SettingsSection,
  sections,
} from '@/components/settings/settings-sidebar';
import { SettingsContentHeader } from '@/components/settings/settings-content-header';
import { EmptyState } from '@/components/settings/empty-state';

interface UserSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

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

  const currentSection = sections.find((s) => s.id === activeSection);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] max-w-[1400px] h-[80vh] p-0 gap-0 overflow-hidden">
        <div className="flex h-full relative">
          <SettingsSidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <div className="flex-1 flex flex-col">
            <SettingsContentHeader
              title={currentSection?.label || ''}
              description={currentSection?.description || ''}
              onAddNew={handleAddNew}
            />

            <ScrollArea className="flex-1 p-6">
              <SectionContent section={activeSection} />
            </ScrollArea>
          </div>
        </div>

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
    <EmptyState
      title="No work experience added yet"
      description="Add your work experience to help create a compelling resumé"
    />
  );
}

function EducationContent() {
  return (
    <EmptyState
      title="No education added yet"
      description="Add your educational background to showcase your qualifications"
    />
  );
}

function ProjectsContent() {
  return (
    <EmptyState
      title="No projects added yet"
      description="Showcase your personal or professional projects"
    />
  );
}

function SkillsContent() {
  return (
    <EmptyState
      title="No skills added yet"
      description="Add your technical and soft skills to highlight your expertise"
    />
  );
}

function CertificationsContent() {
  return (
    <EmptyState
      title="No certifications added yet"
      description="Add professional certifications to boost your credentials"
    />
  );
}

function LanguagesContent() {
  return (
    <EmptyState
      title="No languages added yet"
      description="List the languages you speak and your proficiency level"
    />
  );
}

