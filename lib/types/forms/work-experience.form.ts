import z from 'zod';

export const workExperienceSchema = z.object({
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

export type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>;

