import z from 'zod';
import { formRequired } from '../utils';

export const applicationSchema = z.object({
  company_name: z.string().min(1, formRequired('Company name')),
  role: z.string().min(1, formRequired('role')),
  details: z.string().optional(),
});

export type ApplicationSchemaValues = z.infer<typeof applicationSchema>;
