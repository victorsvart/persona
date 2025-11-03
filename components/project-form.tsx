'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { IconX } from '@tabler/icons-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NameDescriptionFields } from '@/components/settings/projects/name-description-fields';
import { UrlFields } from '@/components/settings/projects/url-fields';
import { DateFields } from '@/components/settings/projects/date-fields';
import { TechnologiesSection } from '@/components/settings/projects/technologies-section';
import { HighlightsSection } from '@/components/settings/projects/highlights-section';
import { createProject, updateProject } from '@/app/actions/projects';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Project } from '@prisma/client';
import {
  projectSchema,
  ProjectFormValues,
} from '@/lib/types/forms/project.form';

interface ProjectFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: Project | null;
}

export function ProjectForm({
  open,
  onOpenChange,
  project,
}: ProjectFormProps) {
  const [technologies, setTechnologies] = React.useState<string[]>(['']);
  const [highlights, setHighlights] = React.useState<string[]>(['']);
  const [isMobile, setIsMobile] = React.useState(false);
  const [technologyPage, setTechnologyPage] = React.useState(1);
  const [highlightPage, setHighlightPage] = React.useState(1);
  const itemsPerPage = 3;
  const isEditing = !!project;

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: project?.name || '',
      description: project?.description || '',
      role: project?.role || '',
      technologies: [],
      startDate: project?.startDate 
        ? format(new Date(project.startDate), 'yyyy-MM')
        : '',
      endDate: project?.endDate 
        ? format(new Date(project.endDate), 'yyyy-MM')
        : '',
      isOngoing: project?.isOngoing || false,
      url: project?.url || '',
      githubUrl: project?.githubUrl || '',
      highlights: [],
    },
  });

  // Load data and reset form when project changes
  React.useEffect(() => {
    if (project) {
      // Editing mode - populate form
      form.reset({
        name: project.name,
        description: project.description,
        role: project.role || '',
        technologies: [],
        startDate: project.startDate 
          ? format(new Date(project.startDate), 'yyyy-MM')
          : '',
        endDate: project.endDate 
          ? format(new Date(project.endDate), 'yyyy-MM')
          : '',
        isOngoing: project.isOngoing,
        url: project.url || '',
        githubUrl: project.githubUrl || '',
        highlights: [],
      });
      
      if (project.technologies && project.technologies.length > 0) {
        setTechnologies(project.technologies);
      } else {
        setTechnologies(['']);
      }
      
      if (project.highlights && project.highlights.length > 0) {
        setHighlights(project.highlights);
      } else {
        setHighlights(['']);
      }
    } else {
      // Create mode - reset to empty
      form.reset({
        name: '',
        description: '',
        role: '',
        technologies: [],
        startDate: '',
        endDate: '',
        isOngoing: false,
        url: '',
        githubUrl: '',
        highlights: [],
      });
      setTechnologies(['']);
      setHighlights(['']);
    }
    setTechnologyPage(1);
    setHighlightPage(1);
  }, [project, form]);

  const isOngoing = form.watch('isOngoing');

  const onSubmit = async (data: ProjectFormValues) => {
    try {
      // Filter out empty arrays
      const filteredTechnologies = technologies.filter((t) => t.trim() !== '');
      const filteredHighlights = highlights.filter((h) => h.trim() !== '');
      const formData = {
        ...data,
        technologies: filteredTechnologies,
        highlights: filteredHighlights,
      };

      // Call server action (create or update)
      const result = isEditing && project
        ? await updateProject(project.id, formData)
        : await createProject(formData);

      if (result.success) {
        toast.success(
          isEditing
            ? 'Project updated successfully!'
            : 'Project saved successfully!'
        );
        // Reset form
        form.reset();
        setTechnologies(['']);
        setHighlights(['']);
        setTechnologyPage(1);
        setHighlightPage(1);
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Failed to save project');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  // Technology management
  const addTechnology = () => {
    const newTechnologies = [...technologies, ''];
    setTechnologies(newTechnologies);
    const newPage = Math.ceil(newTechnologies.length / itemsPerPage);
    setTechnologyPage(newPage);
  };

  const updateTechnology = (index: number, value: string) => {
    const newTechnologies = [...technologies];
    newTechnologies[index] = value;
    setTechnologies(newTechnologies);
  };

  const removeTechnology = (index: number) => {
    const newTechnologies = technologies.filter((_, i) => i !== index);
    setTechnologies(newTechnologies);
    const maxPage = Math.ceil(newTechnologies.length / itemsPerPage) || 1;
    if (technologyPage > maxPage) {
      setTechnologyPage(maxPage);
    }
  };

  // Highlight management
  const addHighlight = () => {
    const newHighlights = [...highlights, ''];
    setHighlights(newHighlights);
    const newPage = Math.ceil(newHighlights.length / itemsPerPage);
    setHighlightPage(newPage);
  };

  const updateHighlight = (index: number, value: string) => {
    const newHighlights = [...highlights];
    newHighlights[index] = value;
    setHighlights(newHighlights);
  };

  const removeHighlight = (index: number) => {
    const newHighlights = highlights.filter((_, i) => i !== index);
    setHighlights(newHighlights);
    const maxPage = Math.ceil(newHighlights.length / itemsPerPage) || 1;
    if (highlightPage > maxPage) {
      setHighlightPage(maxPage);
    }
  };

  const fillDemoData = () => {
    form.setValue('name', 'AI-Powered Resume Generator');
    form.setValue('description', 'A full-stack web application that helps users create professional, ATS-optimized resumes using AI. Features include real-time collaboration, multiple templates, and PDF export.');
    form.setValue('role', 'Full-Stack Developer');
    form.setValue('startDate', '2024-01');
    form.setValue('endDate', '2024-11');
    form.setValue('isOngoing', false);
    form.setValue('url', 'https://persona-resume.vercel.app');
    form.setValue('githubUrl', 'https://github.com/username/persona');
    setTechnologies([
      'Next.js',
      'React',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'OpenAI GPT-4',
      'Tailwind CSS',
      'Shadcn UI',
    ]);
    setHighlights([
      'Implemented AI-powered content suggestions using OpenAI GPT-4',
      'Built responsive UI with 95%+ Lighthouse scores',
      'Integrated authentication with Better-Auth',
      'Designed and optimized PostgreSQL database schema',
      'Achieved 100% type safety with TypeScript and Prisma',
    ]);
  };

  // Pagination calculations
  const techTotalPages = Math.ceil(technologies.length / itemsPerPage);
  const techStartIndex = (technologyPage - 1) * itemsPerPage;
  const techEndIndex = techStartIndex + itemsPerPage;
  const currentTechnologies = technologies.slice(techStartIndex, techEndIndex);

  const highlightTotalPages = Math.ceil(highlights.length / itemsPerPage);
  const highlightStartIndex = (highlightPage - 1) * itemsPerPage;
  const highlightEndIndex = highlightStartIndex + itemsPerPage;
  const currentHighlights = highlights.slice(highlightStartIndex, highlightEndIndex);

  const isDevelopment = process.env.NODE_ENV === 'development';

  // Desktop version - contained within dialog
  if (!isMobile && open) {
    return (
      <div className="absolute inset-0 z-50 flex items-end bg-black/50 animate-in fade-in">
        <div className="bg-background w-full max-h-[85vh] flex flex-col rounded-t-lg border-t shadow-lg animate-in slide-in-from-bottom duration-300">
          <div className="border-b px-6 py-4 flex items-center justify-between shrink-0">
            <div>
              <h3 className="font-semibold text-lg">
                {isEditing ? 'Edit Project' : 'Add Project'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isEditing
                  ? 'Update your project details'
                  : 'Add details about your project'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {isDevelopment && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={fillDemoData}
                  className="text-xs"
                >
                  Fill Demo Data
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange(false)}
              >
                <IconX className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormFields
                    form={form}
                    isOngoing={isOngoing}
                    technologies={technologies}
                    currentTechnologies={currentTechnologies}
                    technologyPage={technologyPage}
                    techTotalPages={techTotalPages}
                    techStartIndex={techStartIndex}
                    setTechnologyPage={setTechnologyPage}
                    updateTechnology={updateTechnology}
                    removeTechnology={removeTechnology}
                    addTechnology={addTechnology}
                    highlights={highlights}
                    currentHighlights={currentHighlights}
                    highlightPage={highlightPage}
                    highlightTotalPages={highlightTotalPages}
                    highlightStartIndex={highlightStartIndex}
                    setHighlightPage={setHighlightPage}
                    updateHighlight={updateHighlight}
                    removeHighlight={removeHighlight}
                    addHighlight={addHighlight}
                  />
                </form>
              </Form>
            </div>
          </ScrollArea>

          <div className="border-t p-4 shrink-0 bg-background">
            <div className="flex gap-2 justify-between">
              <div>
                {isDevelopment && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={fillDemoData}
                  >
                    Fill Demo Data
                  </Button>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
                <Button onClick={form.handleSubmit(onSubmit)}>
                  {isEditing ? 'Update Project' : 'Save Project'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile version - full screen drawer
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="bottom">
      <DrawerContent className="max-h-[90vh] flex flex-col">
        <DrawerHeader className="border-b shrink-0">
          <DrawerTitle>
            {isEditing ? 'Edit Project' : 'Add Project'}
          </DrawerTitle>
          <DrawerDescription>
            {isEditing
              ? 'Update your project details'
              : 'Add details about your project'}
          </DrawerDescription>
        </DrawerHeader>

        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormFields
                  form={form}
                  isOngoing={isOngoing}
                  technologies={technologies}
                  currentTechnologies={currentTechnologies}
                  technologyPage={technologyPage}
                  techTotalPages={techTotalPages}
                  techStartIndex={techStartIndex}
                  setTechnologyPage={setTechnologyPage}
                  updateTechnology={updateTechnology}
                  removeTechnology={removeTechnology}
                  addTechnology={addTechnology}
                  highlights={highlights}
                  currentHighlights={currentHighlights}
                  highlightPage={highlightPage}
                  highlightTotalPages={highlightTotalPages}
                  highlightStartIndex={highlightStartIndex}
                  setHighlightPage={setHighlightPage}
                  updateHighlight={updateHighlight}
                  removeHighlight={removeHighlight}
                  addHighlight={addHighlight}
                />
              </form>
            </Form>
          </div>
        </ScrollArea>

        <DrawerFooter className="border-t shrink-0 bg-background">
          <div className="flex gap-2 justify-between">
            <div>
              {isDevelopment && (
                <Button variant="secondary" size="sm" onClick={fillDemoData}>
                  Fill Demo Data
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
              <Button onClick={form.handleSubmit(onSubmit)}>
                {isEditing ? 'Update Project' : 'Save Project'}
              </Button>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

// Extracted form fields component to avoid duplication
function FormFields({
  form,
  isOngoing,
  technologies,
  currentTechnologies,
  technologyPage,
  techTotalPages,
  techStartIndex,
  setTechnologyPage,
  updateTechnology,
  removeTechnology,
  addTechnology,
  highlights,
  currentHighlights,
  highlightPage,
  highlightTotalPages,
  highlightStartIndex,
  setHighlightPage,
  updateHighlight,
  removeHighlight,
  addHighlight,
}: {
  form: any;
  isOngoing: boolean;
  technologies: string[];
  currentTechnologies: string[];
  technologyPage: number;
  techTotalPages: number;
  techStartIndex: number;
  setTechnologyPage: (page: number) => void;
  updateTechnology: (index: number, value: string) => void;
  removeTechnology: (index: number) => void;
  addTechnology: () => void;
  highlights: string[];
  currentHighlights: string[];
  highlightPage: number;
  highlightTotalPages: number;
  highlightStartIndex: number;
  setHighlightPage: (page: number) => void;
  updateHighlight: (index: number, value: string) => void;
  removeHighlight: (index: number) => void;
  addHighlight: () => void;
}) {
  return (
    <>
      <NameDescriptionFields form={form} />
      <DateFields form={form} isOngoing={isOngoing} />
      <UrlFields form={form} />
      <TechnologiesSection
        technologies={technologies}
        currentTechnologies={currentTechnologies}
        technologyPage={technologyPage}
        totalPages={techTotalPages}
        startIndex={techStartIndex}
        setTechnologyPage={setTechnologyPage}
        updateTechnology={updateTechnology}
        removeTechnology={removeTechnology}
        addTechnology={addTechnology}
      />
      <HighlightsSection
        highlights={highlights}
        currentHighlights={currentHighlights}
        highlightPage={highlightPage}
        totalPages={highlightTotalPages}
        startIndex={highlightStartIndex}
        setHighlightPage={setHighlightPage}
        updateHighlight={updateHighlight}
        removeHighlight={removeHighlight}
        addHighlight={addHighlight}
      />
    </>
  );
}

