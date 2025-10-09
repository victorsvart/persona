import z from 'zod';
import { formRequired } from '../utils';

export const professionalSummarySchema = z.object({
  summary: z.string().min(1, formRequired('Summary')),
});

export type ProfessionalSummaryValues = z.infer<
  typeof professionalSummarySchema
>;
