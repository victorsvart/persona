import z from 'zod';

export const projectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  description: z.string().min(1, 'Description is required'),
  role: z.string().optional().or(z.literal('')),
  technologies: z.array(z.string()),
  startDate: z.string().optional().or(z.literal('')),
  endDate: z.string().optional().or(z.literal('')),
  isOngoing: z.boolean(),
  url: z.string().optional().or(z.literal('')),
  githubUrl: z.string().optional().or(z.literal('')),
  highlights: z.array(z.string()),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;

