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
import { WorkExperienceList } from '@/components/settings/work-experience/work-experience-list';
import { WorkExperience } from '@prisma/client';

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
  const [editingWorkExp, setEditingWorkExp] = React.useState<WorkExperience | null>(null);
  const [refreshTrigger, setRefreshTrigger] = React.useState(0);

  const handleAddNew = () => {
    if (activeSection === 'work') {
      setEditingWorkExp(null);
      setWorkExpFormOpen(true);
    }
    // TODO: Add handlers for other sections
  };

  const handleEditWorkExp = (workExp: WorkExperience) => {
    setEditingWorkExp(workExp);
    setWorkExpFormOpen(true);
  };

  const handleFormClose = (open: boolean) => {
    setWorkExpFormOpen(open);
    if (!open) {
      setEditingWorkExp(null);
      // Trigger refresh of the list
      setRefreshTrigger((prev) => prev + 1);
    }
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
              <SectionContent 
                section={activeSection} 
                onEditWorkExp={handleEditWorkExp}
                refreshTrigger={refreshTrigger}
              />
            </ScrollArea>
          </div>
        </div>

        <WorkExperienceForm
          open={workExpFormOpen}
          onOpenChange={handleFormClose}
          workExperience={editingWorkExp}
        />
      </DialogContent>
    </Dialog>
  );
}

function SectionContent({ 
  section,
  onEditWorkExp,
  refreshTrigger,
}: { 
  section: SettingsSection;
  onEditWorkExp: (workExp: WorkExperience) => void;
  refreshTrigger: number;
}) {
  return (
    <div className="space-y-4">
      {section === 'work' && (
        <WorkExperienceList 
          onEdit={onEditWorkExp} 
          refreshTrigger={refreshTrigger}
        />
      )}
      {section === 'education' && <EducationContent />}
      {section === 'projects' && <ProjectsContent />}
      {section === 'skills' && <SkillsContent />}
      {section === 'certifications' && <CertificationsContent />}
      {section === 'languages' && <LanguagesContent />}
    </div>
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

