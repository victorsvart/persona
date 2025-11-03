import z from 'zod';

export const languageSchema = z.object({
  name: z.string().min(1, 'Language name is required'),
  proficiency: z.enum(['Native', 'Fluent', 'Professional', 'Intermediate', 'Basic']),
});

export type LanguageFormValues = z.infer<typeof languageSchema>;

