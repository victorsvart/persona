import { z } from 'zod';

export const personal_projects_schema = z.object({
  name: z.string().min(1, 'Project name is required'),
  year_worked_on: z.coerce
    .number()
    .int()
    .min(1900, 'Year must be after 1900')
    .max(new Date().getFullYear() + 1, 'Year cannot be in the future'),
  description: z.string().min(1, 'Project description is required'),
});

export type PersonalProjectsValues = z.infer<typeof personal_projects_schema>;

