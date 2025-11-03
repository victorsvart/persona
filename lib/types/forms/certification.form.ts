import z from 'zod';

export const certificationSchema = z.object({
  name: z.string().min(1, 'Certification name is required'),
  issuingOrganization: z.string().min(1, 'Issuing organization is required'),
  issueDate: z.string().min(1, 'Issue date is required'),
  expirationDate: z.string().optional().or(z.literal('')),
  doesNotExpire: z.boolean(),
  credentialId: z.string().optional().or(z.literal('')),
  credentialUrl: z.string().optional().or(z.literal('')),
});

export type CertificationFormValues = z.infer<typeof certificationSchema>;

