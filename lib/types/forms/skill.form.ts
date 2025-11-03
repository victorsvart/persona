import z from 'zod';

export const skillSchema = z.object({
  name: z.string().min(1, 'Skill name is required'),
  category: z.string().min(1, 'Category is required'),
  proficiency: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']).optional(),
  yearsOfExperience: z.number().min(0).max(50).optional().or(z.literal(0)),
});

export type SkillFormValues = z.infer<typeof skillSchema>;

