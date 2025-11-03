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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { IconPlus, IconX } from '@tabler/icons-react';
import { ScrollArea } from '@/components/ui/scroll-area';

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

  const totalPages = Math.ceil(achievements.length / achievementsPerPage);
  const startIndex = (achievementPage - 1) * achievementsPerPage;
  const endIndex = startIndex + achievementsPerPage;
  const currentAchievements = achievements.slice(startIndex, endIndex);

  // Desktop version - contained within dialog
  if (!isMobile && open) {
    return (
      <div className="absolute inset-0 z-50 flex items-end bg-black/50 animate-in fade-in">
        <div className="bg-background w-full max-h-[85%] rounded-t-lg border-t shadow-lg animate-in slide-in-from-bottom duration-300">
          <div className="border-b px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Add Work Experience</h3>
              <p className="text-sm text-muted-foreground">
                Add details about your professional work experience
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
            >
              <IconX className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="max-h-[calc(85vh-180px)]">
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

          <div className="border-t p-4">
            <div className="flex gap-2 justify-end">
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
    );
  }

  // Mobile version - full screen drawer
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="bottom">
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader className="border-b">
          <DrawerTitle>Add Work Experience</DrawerTitle>
          <DrawerDescription>
            Add details about your professional work experience
          </DrawerDescription>
        </DrawerHeader>

        <ScrollArea className="max-h-[calc(90vh-180px)]">
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

        <DrawerFooter className="border-t">
          <div className="flex gap-2 justify-end">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
            <Button onClick={form.handleSubmit(onSubmit)}>
              Save Work Experience
            </Button>
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
      {/* Company & Position */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Google" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Senior Software Engineer"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Employment Type & Location Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="employmentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Contract">Contract</SelectItem>
                            <SelectItem value="Freelance">Freelance</SelectItem>
                            <SelectItem value="Internship">Internship</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="locationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select location type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="On-site">On-site</SelectItem>
                            <SelectItem value="Remote">Remote</SelectItem>
                            <SelectItem value="Hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Location */}
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., San Francisco, CA"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Start Date & End Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date *</FormLabel>
                        <FormControl>
                          <Input type="month" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input
                            type="month"
                            disabled={isCurrentRole}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Current Role Checkbox */}
                <FormField
                  control={form.control}
                  name="isCurrentRole"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I currently work here</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <textarea
                          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Brief description of your role and responsibilities..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Achievements */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <FormLabel>
                        Key Achievements
                        {achievements.length > 0 && (
                          <span className="ml-2 text-xs text-muted-foreground">
                            ({achievements.length} total)
                          </span>
                        )}
                      </FormLabel>
                      
                      {/* Compact Pagination */}
                      {totalPages > 1 && (
                        <div className="flex items-center gap-1">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => setAchievementPage(achievementPage - 1)}
                            disabled={achievementPage === 1}
                          >
                            <span className="text-xs">←</span>
                          </Button>
                          <span className="text-xs text-muted-foreground px-1">
                            {achievementPage}/{totalPages}
                          </span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => setAchievementPage(achievementPage + 1)}
                            disabled={achievementPage === totalPages}
                          >
                            <span className="text-xs">→</span>
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addAchievement}
                    >
                      <IconPlus className="h-4 w-4 mr-2" />
                      Add Achievement
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {currentAchievements.map((achievement, index) => {
                      const actualIndex = startIndex + index;
                      return (
                        <div key={actualIndex} className="flex gap-2">
                          <div className="flex-1 flex gap-2">
                            <div className="flex items-center justify-center w-6 h-10 text-xs text-muted-foreground">
                              {actualIndex + 1}
                            </div>
                            <Input
                              placeholder="e.g., Increased sales by 35% through strategic initiatives"
                              value={achievement}
                              onChange={(e) =>
                                updateAchievement(actualIndex, e.target.value)
                              }
                            />
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeAchievement(actualIndex)}
                          >
                            <IconX className="h-4 w-4" />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          }

