import z from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    username: z.string().min(6, 'Username must have at least 6 chars'),
    email: z.email('Invalid email'),
    password: z
      .string()
      .min(8, 'Password must have at least 8 chars')
      .max(74, 'Password should not be longer than 74 chars'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
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

export type SignUpSchemaValues = z.infer<typeof signUpSchema>;
