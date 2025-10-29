import { z } from 'zod';

export const academic_info = z.object({
  institution: z.string().min(1, 'Institution name is required'),
  major: z.string().min(1, 'Degree/Major is required'),
  start_date: z.union([z.string(), z.date()]),
  end_date: z.union([z.string(), z.date()]).optional().or(z.literal('')),
  summary: z.string().optional().or(z.literal('')),
});

export type AcademicInfoValues = z.infer<typeof academic_info>;

