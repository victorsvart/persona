'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { CompanyPositionFields } from '@/components/settings/work-experience/company-position-fields';
import { EmploymentLocationFields } from '@/components/settings/work-experience/employment-location-fields';
import { DateFields } from '@/components/settings/work-experience/date-fields';
import { DescriptionField } from '@/components/settings/work-experience/description-field';
import { AchievementsSection } from '@/components/settings/work-experience/achievements-section';

const workExperienceSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  position: z.string().min(1, 'Position is required'),
  employmentType: z.enum([
    'Full-time',
    'Part-time',
    'Contract',
    'Freelance',
    'Internship',
  ]),
  location: z.string().optional().or(z.literal('')),
  locationType: z.enum(['On-site', 'Remote', 'Hybrid']).optional(),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional().or(z.literal('')),
  isCurrentRole: z.boolean(),
  description: z.string().optional().or(z.literal('')),
  achievements: z.array(z.string()),
});

type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>;

interface WorkExperienceFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WorkExperienceForm({
  open,
  onOpenChange,
}: WorkExperienceFormProps) {
  const [achievements, setAchievements] = React.useState<string[]>(['']);
  const [isMobile, setIsMobile] = React.useState(false);
  const [achievementPage, setAchievementPage] = React.useState(1);
  const achievementsPerPage = 3;

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const form = useForm<WorkExperienceFormValues>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
      company: '',
      position: '',
      employmentType: 'Full-time',
      location: '',
      locationType: 'On-site',
      startDate: '',
      endDate: '',
      isCurrentRole: false,
      description: '',
      achievements: [],
    },
  });

  const isCurrentRole = form.watch('isCurrentRole');

  const onSubmit = async (data: WorkExperienceFormValues) => {
    // Filter out empty achievements
    const filteredAchievements = achievements.filter((a) => a.trim() !== '');
    const formData = {
      ...data,
      achievements: filteredAchievements,
    };
    console.log('Work Experience Data:', formData);
    // TODO: API call to save data
    onOpenChange(false);
  };

  const addAchievement = () => {
    const newAchievements = [...achievements, ''];
    setAchievements(newAchievements);
    // Navigate to the page with the new achievement
    const newPage = Math.ceil(newAchievements.length / achievementsPerPage);
    setAchievementPage(newPage);
  };

  const updateAchievement = (index: number, value: string) => {
    const newAchievements = [...achievements];
    newAchievements[index] = value;
    setAchievements(newAchievements);
  };

  const removeAchievement = (index: number) => {
    const newAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(newAchievements);
    // Adjust page if we deleted the last item on the current page
    const maxPage = Math.ceil(newAchievements.length / achievementsPerPage) || 1;
    if (achievementPage > maxPage) {
      setAchievementPage(maxPage);
    }
  };

  const fillDemoData = () => {
    form.setValue('company', 'Google Inc.');
    form.setValue('position', 'Senior Software Engineer');
    form.setValue('employmentType', 'Full-time');
    form.setValue('location', 'Mountain View, CA');
    form.setValue('locationType', 'Hybrid');
    form.setValue('startDate', '2020-03');
    form.setValue('endDate', '2023-12');
    form.setValue('isCurrentRole', false);
    form.setValue(
      'description',
      'Led the development of cloud-based solutions and microservices architecture. Collaborated with cross-functional teams to deliver high-quality software products.'
    );
    setAchievements([
      'Increased system performance by 40% through optimization techniques',
      'Led a team of 5 engineers to deliver a major feature ahead of schedule',
      'Reduced deployment time by 60% by implementing CI/CD pipelines',
      'Mentored junior developers and conducted code reviews',
      'Implemented automated testing that improved code coverage to 95%',
    ]);
  };

  const totalPages = Math.ceil(achievements.length / achievementsPerPage);
  const startIndex = (achievementPage - 1) * achievementsPerPage;
  const endIndex = startIndex + achievementsPerPage;
  const currentAchievements = achievements.slice(startIndex, endIndex);

  const isDevelopment = process.env.NODE_ENV === 'development';

  // Desktop version - contained within dialog
  if (!isMobile && open) {
    return (
      <div className="absolute inset-0 z-50 flex items-end bg-black/50 animate-in fade-in">
        <div className="bg-background w-full max-h-[85vh] flex flex-col rounded-t-lg border-t shadow-lg animate-in slide-in-from-bottom duration-300">
          <div className="border-b px-6 py-4 flex items-center justify-between shrink-0">
            <div>
              <h3 className="font-semibold text-lg">Add Work Experience</h3>
              <p className="text-sm text-muted-foreground">
                Add details about your professional work experience
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
                    isCurrentRole={isCurrentRole}
                    achievements={achievements}
                    currentAchievements={currentAchievements}
                    achievementPage={achievementPage}
                    totalPages={totalPages}
                    startIndex={startIndex}
                    setAchievementPage={setAchievementPage}
                    updateAchievement={updateAchievement}
                    removeAchievement={removeAchievement}
                    addAchievement={addAchievement}
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
                  Save Work Experience
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
          <DrawerTitle>Add Work Experience</DrawerTitle>
          <DrawerDescription>
            Add details about your professional work experience
          </DrawerDescription>
        </DrawerHeader>

        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormFields
                  form={form}
                  isCurrentRole={isCurrentRole}
                  achievements={achievements}
                  currentAchievements={currentAchievements}
                  achievementPage={achievementPage}
                  totalPages={totalPages}
                  startIndex={startIndex}
                  setAchievementPage={setAchievementPage}
                  updateAchievement={updateAchievement}
                  removeAchievement={removeAchievement}
                  addAchievement={addAchievement}
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
                Save Work Experience
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
  isCurrentRole,
  achievements,
  currentAchievements,
  achievementPage,
  totalPages,
  startIndex,
  setAchievementPage,
  updateAchievement,
  removeAchievement,
  addAchievement,
}: {
  form: any;
  isCurrentRole: boolean;
  achievements: string[];
  currentAchievements: string[];
  achievementPage: number;
  totalPages: number;
  startIndex: number;
  setAchievementPage: (page: number) => void;
  updateAchievement: (index: number, value: string) => void;
  removeAchievement: (index: number) => void;
  addAchievement: () => void;
}) {
  return (
    <>
      <CompanyPositionFields form={form} />
      <EmploymentLocationFields form={form} />
      <DateFields form={form} isCurrentRole={isCurrentRole} />
      <DescriptionField form={form} />
      <AchievementsSection
        achievements={achievements}
        currentAchievements={currentAchievements}
        achievementPage={achievementPage}
        totalPages={totalPages}
        startIndex={startIndex}
        setAchievementPage={setAchievementPage}
        updateAchievement={updateAchievement}
        removeAchievement={removeAchievement}
        addAchievement={addAchievement}
      />
    </>
  );
}

