import z from 'zod';
import { formRequired } from '../utils';

export const skillsSchema = z.object({
  skills: z.string().min(1, formRequired('Skills')),
});

export type SkillsValues = z.infer<typeof skillsSchema>;
