import z from 'zod';

export const educationSchema = z.object({
  institution: z.string().min(1, 'Institution name is required'),
  degree: z.string().min(1, 'Degree is required'),
  fieldOfStudy: z.string().min(1, 'Field of study is required'),
  location: z.string().optional().or(z.literal('')),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional().or(z.literal('')),
  isCurrentlyEnrolled: z.boolean(),
  gpa: z.string().optional().or(z.literal('')),
  honors: z.string().optional().or(z.literal('')),
  activities: z.array(z.string()),
  coursework: z.array(z.string()),
});

export type EducationFormValues = z.infer<typeof educationSchema>;

