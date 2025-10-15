import z from 'zod';
import { formRequired } from '../utils';

export const certificationSchema = z.object({
  name: z.string().min(1, formRequired('Certification name')),
  emittedAt: z.string().min(1, formRequired('Issue date')),
  description: z.string().optional(),
});

export type CertificationValues = z.infer<typeof certificationSchema>;
