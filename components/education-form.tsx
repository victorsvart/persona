'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
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
import { IconX } from '@tabler/icons-react';
import { createEducation, updateEducation } from '@/app/actions/education';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Education } from '@prisma/client';
import {
  educationSchema,
  EducationFormValues,
} from '@/lib/types/forms/education.form';
import { InstitutionDegreeFields } from '@/components/settings/education/institution-degree-fields';
import { EducationDateFields } from '@/components/settings/education/education-date-fields';
import { GpaHonorsFields } from '@/components/settings/education/gpa-honors-fields';
import { ActivitiesSection } from '@/components/settings/education/activities-section';
import { CourseworkSection } from '@/components/settings/education/coursework-section';

interface EducationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  education?: Education | null;
}

const isDevelopment = process.env.NODE_ENV === 'development';

export function EducationForm({
  open,
  onOpenChange,
  education,
}: EducationFormProps) {
  const [activities, setActivities] = React.useState<string[]>(['']);
  const [coursework, setCoursework] = React.useState<string[]>(['']);
  const [isMobile, setIsMobile] = React.useState(false);
  const [activityPage, setActivityPage] = React.useState(1);
  const [courseworkPage, setCourseworkPage] = React.useState(1);
  const itemsPerPage = 3;
  const isEditing = !!education;

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      institution: education?.institution || '',
      degree: education?.degree || '',
      fieldOfStudy: education?.fieldOfStudy || '',
      location: education?.location || '',
      startDate: education?.startDate
        ? format(new Date(education.startDate), 'yyyy-MM')
        : '',
      endDate: education?.endDate
        ? format(new Date(education.endDate), 'yyyy-MM')
        : '',
      isCurrentlyEnrolled: education?.isCurrentlyEnrolled || false,
      gpa: education?.gpa || '',
      honors: education?.honors || '',
      activities: [],
      coursework: [],
    },
  });

  // Load activities and coursework when editing
  React.useEffect(() => {
    if (education) {
      // Editing mode - populate form
      form.reset({
        institution: education.institution,
        degree: education.degree,
        fieldOfStudy: education.fieldOfStudy,
        location: education.location || '',
        startDate: format(new Date(education.startDate), 'yyyy-MM'),
        endDate: education.endDate
          ? format(new Date(education.endDate), 'yyyy-MM')
          : '',
        isCurrentlyEnrolled: education.isCurrentlyEnrolled,
        gpa: education.gpa || '',
        honors: education.honors || '',
        activities: [],
        coursework: [],
      });

      if (education.activities && education.activities.length > 0) {
        setActivities(education.activities);
      } else {
        setActivities(['']);
      }

      if (education.coursework && education.coursework.length > 0) {
        setCoursework(education.coursework);
      } else {
        setCoursework(['']);
      }
    } else {
      // Create mode - reset to empty
      form.reset({
        institution: '',
        degree: '',
        fieldOfStudy: '',
        location: '',
        startDate: '',
        endDate: '',
        isCurrentlyEnrolled: false,
        gpa: '',
        honors: '',
        activities: [],
        coursework: [],
      });
      setActivities(['']);
      setCoursework(['']);
    }
    setActivityPage(1);
    setCourseworkPage(1);
  }, [education, form]);

  const isCurrentlyEnrolled = form.watch('isCurrentlyEnrolled');

  const onSubmit = async (data: EducationFormValues) => {
    try {
      // Filter out empty items
      const filteredActivities = activities.filter((a) => a.trim() !== '');
      const filteredCoursework = coursework.filter((c) => c.trim() !== '');
      const formData = {
        ...data,
        activities: filteredActivities,
        coursework: filteredCoursework,
      };

      // Call server action (create or update)
      const result = isEditing && education
        ? await updateEducation(education.id, formData)
        : await createEducation(formData);

      if (result.success) {
        toast.success(
          isEditing
            ? 'Education updated successfully!'
            : 'Education saved successfully!'
        );
        // Reset form
        form.reset();
        setActivities(['']);
        setCoursework(['']);
        setActivityPage(1);
        setCourseworkPage(1);
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Failed to save education');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  const addActivity = () => {
    const newActivities = [...activities, ''];
    setActivities(newActivities);
    const totalPages = Math.ceil(newActivities.length / itemsPerPage);
    setActivityPage(totalPages);
  };

  const updateActivity = (index: number, value: string) => {
    const newActivities = [...activities];
    newActivities[index] = value;
    setActivities(newActivities);
  };

  const removeActivity = (index: number) => {
    const newActivities = activities.filter((_, i) => i !== index);
    setActivities(newActivities.length > 0 ? newActivities : ['']);
    const totalPages = Math.ceil(newActivities.length / itemsPerPage);
    if (activityPage > totalPages && totalPages > 0) {
      setActivityPage(totalPages);
    }
  };

  const addCoursework = () => {
    const newCoursework = [...coursework, ''];
    setCoursework(newCoursework);
    const totalPages = Math.ceil(newCoursework.length / itemsPerPage);
    setCourseworkPage(totalPages);
  };

  const updateCoursework = (index: number, value: string) => {
    const newCoursework = [...coursework];
    newCoursework[index] = value;
    setCoursework(newCoursework);
  };

  const removeCoursework = (index: number) => {
    const newCoursework = coursework.filter((_, i) => i !== index);
    setCoursework(newCoursework.length > 0 ? newCoursework : ['']);
    const totalPages = Math.ceil(newCoursework.length / itemsPerPage);
    if (courseworkPage > totalPages && totalPages > 0) {
      setCourseworkPage(totalPages);
    }
  };

  const fillDemoData = () => {
    form.setValue('institution', 'Stanford University');
    form.setValue('degree', "Bachelor's of Science");
    form.setValue('fieldOfStudy', 'Computer Science');
    form.setValue('location', 'Stanford, CA');
    form.setValue('startDate', '2018-09');
    form.setValue('endDate', '2022-06');
    form.setValue('isCurrentlyEnrolled', false);
    form.setValue('gpa', '3.8');
    form.setValue('honors', 'Dean\'s List, Cum Laude');
    setActivities([
      'President of Computer Science Club',
      'Member of Robotics Team',
      'Volunteer tutor for underclassmen',
    ]);
    setCoursework([
      'Data Structures and Algorithms',
      'Machine Learning',
      'Distributed Systems',
    ]);
  };

  // Calculate pagination for activities
  const activityTotalPages = Math.ceil(activities.length / itemsPerPage);
  const activityStartIndex = (activityPage - 1) * itemsPerPage;
  const currentActivities = activities.slice(
    activityStartIndex,
    activityStartIndex + itemsPerPage
  );

  // Calculate pagination for coursework
  const courseworkTotalPages = Math.ceil(coursework.length / itemsPerPage);
  const courseworkStartIndex = (courseworkPage - 1) * itemsPerPage;
  const currentCoursework = coursework.slice(
    courseworkStartIndex,
    courseworkStartIndex + itemsPerPage
  );

  // Desktop version - contained within dialog
  if (!isMobile && open) {
    return (
      <div className="absolute inset-0 z-50 flex items-end bg-black/50 animate-in fade-in">
        <div className="bg-background w-full max-h-[85vh] flex flex-col rounded-t-lg border-t shadow-lg animate-in slide-in-from-bottom duration-300">
          <div className="border-b px-6 py-4 flex items-center justify-between shrink-0">
            <div>
              <h3 className="font-semibold text-lg">
                {isEditing ? 'Edit Education' : 'Add Education'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isEditing
                  ? 'Update your education details'
                  : 'Add details about your educational background'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {isDevelopment && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={fillDemoData}
                  type="button"
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
                  <InstitutionDegreeFields form={form} />
                  <EducationDateFields form={form} isCurrentlyEnrolled={isCurrentlyEnrolled} />
                  <GpaHonorsFields form={form} />
                  <ActivitiesSection
                    activities={activities}
                    currentActivities={currentActivities}
                    activityPage={activityPage}
                    totalPages={activityTotalPages}
                    startIndex={activityStartIndex}
                    setActivityPage={setActivityPage}
                    updateActivity={updateActivity}
                    removeActivity={removeActivity}
                    addActivity={addActivity}
                  />
                  <CourseworkSection
                    coursework={coursework}
                    currentCoursework={currentCoursework}
                    courseworkPage={courseworkPage}
                    totalPages={courseworkTotalPages}
                    startIndex={courseworkStartIndex}
                    setCourseworkPage={setCourseworkPage}
                    updateCoursework={updateCoursework}
                    removeCoursework={removeCoursework}
                    addCoursework={addCoursework}
                  />
                </form>
              </Form>
            </div>
          </ScrollArea>

          <div className="border-t p-4 shrink-0 bg-background">
            <div className="flex gap-2 justify-between">
              <div>
                {isDevelopment && (
                  <Button variant="secondary" size="sm" onClick={fillDemoData}>
                    Fill Demo Data
                  </Button>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
                <Button onClick={form.handleSubmit(onSubmit)}>
                  {isEditing ? 'Update Education' : 'Save Education'}
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
            {isEditing ? 'Edit Education' : 'Add Education'}
          </DrawerTitle>
          <DrawerDescription>
            {isEditing
              ? 'Update your education details'
              : 'Add details about your educational background'}
          </DrawerDescription>
        </DrawerHeader>

        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <InstitutionDegreeFields form={form} />
                <EducationDateFields form={form} isCurrentlyEnrolled={isCurrentlyEnrolled} />
                <GpaHonorsFields form={form} />
                <ActivitiesSection
                  activities={activities}
                  currentActivities={currentActivities}
                  activityPage={activityPage}
                  totalPages={activityTotalPages}
                  startIndex={activityStartIndex}
                  setActivityPage={setActivityPage}
                  updateActivity={updateActivity}
                  removeActivity={removeActivity}
                  addActivity={addActivity}
                />
                <CourseworkSection
                  coursework={coursework}
                  currentCoursework={currentCoursework}
                  courseworkPage={courseworkPage}
                  totalPages={courseworkTotalPages}
                  startIndex={courseworkStartIndex}
                  setCourseworkPage={setCourseworkPage}
                  updateCoursework={updateCoursework}
                  removeCoursework={removeCoursework}
                  addCoursework={addCoursework}
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
                {isEditing ? 'Update Education' : 'Save Education'}
              </Button>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

