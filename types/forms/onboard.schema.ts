import z from 'zod';

export const onboardSchema = z.object({
  // Professional summary
  experience_years: z.number().min(0, 'Experience years cannot be negative').max(50, 'Experience years seems too high'),
  professional_summary: z.string().optional().or(z.literal('')),
  
  // Professional experiences
  professional_experiences: z.array(z.object({
    institution: z.string().min(1, 'Institution name is required'),
    role: z.string().min(1, 'Role is required'),
    start_date: z.string().min(1, 'Start date is required'),
    end_date: z.string().optional().or(z.literal('')),
    summary: z.string().optional().or(z.literal('')),
    at_university: z.boolean(),
  })),
  
  // Academic information
  academic_information: z.array(z.object({
    institution: z.string().min(1, 'Institution name is required'),
    major: z.string().min(1, 'Major/Field of study is required'),
    start_date: z.string().min(1, 'Start date is required'),
    end_date: z.string().optional().or(z.literal('')),
    summary: z.string().optional().or(z.literal('')),
  })),
  
  // Skills
  skills: z.string().min(1, 'Please list your skills (comma-separated)'),
});

export type OnboardSchemaValues = z.infer<typeof onboardSchema>;
