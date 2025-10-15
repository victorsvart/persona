import z from 'zod';
import { formRequired } from '../utils';

export const workExperienceSchema = z.object({
  company_name: z.string().min(1, formRequired('Company name')),
  enrollment: z.string().min(1, formRequired('Start date')),
  completion: z.string().optional(),
  description: z.string().min(1, formRequired('Description')),
  currentWorkPlace: z.boolean(),
});

export type WorkExperienceValues = z.infer<typeof workExperienceSchema>;
