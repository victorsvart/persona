'use client';

import * as React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { WorkExperienceForm } from '@/components/work-experience-form';
import { EducationForm } from '@/components/education-form';
import { ProjectForm } from '@/components/project-form';
import { SkillForm } from '@/components/skill-form';
import { CertificationForm } from '@/components/certification-form';
import { LanguageForm } from '@/components/language-form';
import {
  SettingsSidebar,
  SettingsSection,
  sections,
} from '@/components/settings/settings-sidebar';
import { SettingsContentHeader } from '@/components/settings/settings-content-header';
import { EmptyState } from '@/components/settings/empty-state';
import { WorkExperienceList } from '@/components/settings/work-experience/work-experience-list';
import { EducationList } from '@/components/settings/education/education-list';
import { ProjectList } from '@/components/settings/projects/project-list';
import { SkillList } from '@/components/settings/skills/skill-list';
import { CertificationList } from '@/components/settings/certifications/certification-list';
import { LanguageList } from '@/components/settings/languages/language-list';
import { ProfileForm } from '@/components/settings/profile/profile-form';
import { WorkExperience, Education, Project, Skill, Certification, Language } from '@prisma/client';

interface UserSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UserSettingsDialog({
  open,
  onOpenChange,
}: UserSettingsDialogProps) {
  const [activeSection, setActiveSection] =
    React.useState<SettingsSection>('profile');
  const [workExpFormOpen, setWorkExpFormOpen] = React.useState(false);
  const [educationFormOpen, setEducationFormOpen] = React.useState(false);
  const [projectFormOpen, setProjectFormOpen] = React.useState(false);
  const [skillFormOpen, setSkillFormOpen] = React.useState(false);
  const [certificationFormOpen, setCertificationFormOpen] = React.useState(false);
  const [languageFormOpen, setLanguageFormOpen] = React.useState(false);
  const [editingWorkExp, setEditingWorkExp] = React.useState<WorkExperience | null>(null);
  const [editingEducation, setEditingEducation] = React.useState<Education | null>(null);
  const [editingProject, setEditingProject] = React.useState<Project | null>(null);
  const [editingSkill, setEditingSkill] = React.useState<Skill | null>(null);
  const [editingCertification, setEditingCertification] = React.useState<Certification | null>(null);
  const [editingLanguage, setEditingLanguage] = React.useState<Language | null>(null);
  const [refreshTrigger, setRefreshTrigger] = React.useState(0);

  const handleAddNew = () => {
    if (activeSection === 'profile') {
      // Profile section doesn't have "add new" functionality
      return;
    } else if (activeSection === 'work') {
      setEditingWorkExp(null);
      setWorkExpFormOpen(true);
    } else if (activeSection === 'education') {
      setEditingEducation(null);
      setEducationFormOpen(true);
    } else if (activeSection === 'projects') {
      setEditingProject(null);
      setProjectFormOpen(true);
    } else if (activeSection === 'skills') {
      setEditingSkill(null);
      setSkillFormOpen(true);
    } else if (activeSection === 'certifications') {
      setEditingCertification(null);
      setCertificationFormOpen(true);
    } else if (activeSection === 'languages') {
      setEditingLanguage(null);
      setLanguageFormOpen(true);
    }
  };

  const handleEditWorkExp = (workExp: WorkExperience) => {
    setEditingWorkExp(workExp);
    setWorkExpFormOpen(true);
  };

  const handleEditEducation = (education: Education) => {
    setEditingEducation(education);
    setEducationFormOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setProjectFormOpen(true);
  };

  const handleEditSkill = (skill: Skill) => {
    setEditingSkill(skill);
    setSkillFormOpen(true);
  };

  const handleEditCertification = (certification: Certification) => {
    setEditingCertification(certification);
    setCertificationFormOpen(true);
  };

  const handleEditLanguage = (language: Language) => {
    setEditingLanguage(language);
    setLanguageFormOpen(true);
  };

  const handleWorkExpFormClose = (open: boolean) => {
    setWorkExpFormOpen(open);
    if (!open) {
      setEditingWorkExp(null);
      // Trigger refresh of the list
      setRefreshTrigger((prev) => prev + 1);
    }
  };

  const handleEducationFormClose = (open: boolean) => {
    setEducationFormOpen(open);
    if (!open) {
      setEditingEducation(null);
      // Trigger refresh of the list
      setRefreshTrigger((prev) => prev + 1);
    }
  };

  const handleProjectFormClose = (open: boolean) => {
    setProjectFormOpen(open);
    if (!open) {
      setEditingProject(null);
      // Trigger refresh of the list
      setRefreshTrigger((prev) => prev + 1);
    }
  };

  const handleSkillFormClose = (open: boolean) => {
    setSkillFormOpen(open);
    if (!open) {
      setEditingSkill(null);
      // Trigger refresh of the list
      setRefreshTrigger((prev) => prev + 1);
    }
  };

  const handleCertificationFormClose = (open: boolean) => {
    setCertificationFormOpen(open);
    if (!open) {
      setEditingCertification(null);
      // Trigger refresh of the list
      setRefreshTrigger((prev) => prev + 1);
    }
  };

  const handleLanguageFormClose = (open: boolean) => {
    setLanguageFormOpen(open);
    if (!open) {
      setEditingLanguage(null);
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
              onAddNew={activeSection !== 'profile' ? handleAddNew : undefined}
            />

            <ScrollArea className="flex-1 p-6">
              <SectionContent 
                section={activeSection} 
                onEditWorkExp={handleEditWorkExp}
                onEditEducation={handleEditEducation}
                onEditProject={handleEditProject}
                onEditSkill={handleEditSkill}
                onEditCertification={handleEditCertification}
                onEditLanguage={handleEditLanguage}
                refreshTrigger={refreshTrigger}
              />
            </ScrollArea>
          </div>
        </div>

        <WorkExperienceForm
          open={workExpFormOpen}
          onOpenChange={handleWorkExpFormClose}
          workExperience={editingWorkExp}
        />

        <EducationForm
          open={educationFormOpen}
          onOpenChange={handleEducationFormClose}
          education={editingEducation}
        />

        <ProjectForm
          open={projectFormOpen}
          onOpenChange={handleProjectFormClose}
          project={editingProject}
        />

        <SkillForm
          open={skillFormOpen}
          onOpenChange={handleSkillFormClose}
          skill={editingSkill}
        />

        <CertificationForm
          open={certificationFormOpen}
          onOpenChange={handleCertificationFormClose}
          certification={editingCertification}
        />

        <LanguageForm
          open={languageFormOpen}
          onOpenChange={handleLanguageFormClose}
          language={editingLanguage}
        />
      </DialogContent>
    </Dialog>
  );
}

function SectionContent({ 
  section,
  onEditWorkExp,
  onEditEducation,
  onEditProject,
  onEditSkill,
  onEditCertification,
  onEditLanguage,
  refreshTrigger,
}: { 
  section: SettingsSection;
  onEditWorkExp: (workExp: WorkExperience) => void;
  onEditEducation: (education: Education) => void;
  onEditProject: (project: Project) => void;
  onEditSkill: (skill: Skill) => void;
  onEditCertification: (certification: Certification) => void;
  onEditLanguage: (language: Language) => void;
  refreshTrigger: number;
}) {
  return (
    <div className="space-y-4">
      {section === 'profile' && <ProfileForm />}
      {section === 'work' && (
        <WorkExperienceList 
          onEdit={onEditWorkExp} 
          refreshTrigger={refreshTrigger}
        />
      )}
      {section === 'education' && (
        <EducationList
          onEdit={onEditEducation}
          refreshTrigger={refreshTrigger}
        />
      )}
      {section === 'projects' && (
        <ProjectList
          onEdit={onEditProject}
          refreshTrigger={refreshTrigger}
        />
      )}
      {section === 'skills' && (
        <SkillList
          onEdit={onEditSkill}
          refreshTrigger={refreshTrigger}
        />
      )}
      {section === 'certifications' && (
        <CertificationList
          onEdit={onEditCertification}
          refreshTrigger={refreshTrigger}
        />
      )}
      {section === 'languages' && (
        <LanguageList
          onEdit={onEditLanguage}
          refreshTrigger={refreshTrigger}
        />
      )}
    </div>
  );
}

