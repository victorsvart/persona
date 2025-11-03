import z from 'zod';

export const registerForm = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required'),
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
  })
  .superRefine((form, ctx) => {
    if (form.password != form.confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords must match!',
        path: ['confirmPassword'],
      });
    }
  });

export type RegisterFormValues = z.infer<typeof registerForm>;
