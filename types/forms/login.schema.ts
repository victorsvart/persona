import z from 'zod';

export const loginSchema = z.object({
  // email: z.email('Invalid email'),
  username: z.string().min(1, 'Username is needed'),
  password: z.string().min(1, 'Password is necessary'),
});

export type LoginSchemaValues = z.infer<typeof loginSchema>;
