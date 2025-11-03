import { z } from 'zod';

export const applicationFormSchema = z.object({
  company: z
    .string()
    .min(1, 'Company name is required')
    .max(100, 'Company name must be less than 100 characters'),
  role: z
    .string()
    .min(1, 'Role/Position is required')
    .max(100, 'Role must be less than 100 characters'),
  jobDescription: z
    .string()
    .min(10, 'Job description must be at least 10 characters')
    .max(10000, 'Job description must be less than 10000 characters'),
});

export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

