import z from 'zod';
import { formRequired } from '../utils';

export const registerSchema = z
  .object({
    name: z.string().min(5, formRequired('Name')),
    username: z.string().min(1, formRequired('Username')).trim(),
    email: z.email(formRequired('Email')).trim(),
    password: z.string().min(8, formRequired('Password')),
    confirmPassword: z.string().min(8, formRequired('Confirm password')),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords need to match',
        path: ['confirmPassword'],
      });
    }
  });

export type RegisterSchemaValues = z.infer<typeof registerSchema>;
