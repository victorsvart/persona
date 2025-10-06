import z from 'zod';
import { formRequired } from '../utils';

export const accountSchema = z.object({
  image: z.string().nullable(),
  name: z.string().min(5, formRequired('Name')),
  username: z.string().min(1, formRequired('Username')).trim(),
  email: z.email().trim(),
});

export type AccountSchemaValues = z.infer<typeof accountSchema>;
