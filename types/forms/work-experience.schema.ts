import { z } from 'zod';

export const professional_experiences = z.array(
  z.object({
    institution: z.string().min(1, 'Institution name is required'),
    role: z.string().min(1, 'Role is required'),
    start_date: z.union([z.string(), z.date()]),
    end_date: z.union([z.string(), z.date()]).optional().or(z.literal('')),
    summary: z.string().optional().or(z.literal('')),
    at_university: z.boolean(),
  }),
);

export type ProfessionalExperienceValues = z.infer<
  typeof professional_experiences
>;
