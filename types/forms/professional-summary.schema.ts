import { z } from 'zod';

export const professionalSummarySchema = z.object({
  summary: z
    .string()
    .min(50, 'Professional summary must be at least 50 characters')
    .max(2000, 'Professional summary must not exceed 2000 characters')
    .optional()
    .or(z.literal('')),
  experience_years: z
    .number()
    .min(0, 'Years of experience must be 0 or greater')
    .max(50, 'Years of experience must be 50 or less')
    .int('Years of experience must be a whole number'),
});

export type ProfessionalSummaryValues = z.infer<typeof professionalSummarySchema>;
