import { z } from 'zod';

export const applicationSchema = z.object({
  company_name: z
    .string()
    .min(1, 'Company name is required')
    .max(100, 'Company name must not exceed 100 characters'),
  role: z
    .string()
    .min(1, 'Role is required')
    .max(100, 'Role must not exceed 100 characters'),
  job_post: z
    .string()
    .min(1, 'Job post content is required')
    .max(5000, 'Job post content must not exceed 5000 characters'),
});

export type ApplicationValues = z.infer<typeof applicationSchema>;
