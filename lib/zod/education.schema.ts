import z from 'zod';
import { formRequired } from '../utils';

export const educationSchema = z.object({
  university_name: z.string().min(1, formRequired('University name')),
  enrollment: z.string().min(1, formRequired('Start date')),
  completion: z.string().optional(),
  finished: z.boolean(),
  description: z.string().optional(),
});

export type EducationValues = z.infer<typeof educationSchema>;
