import z, { RefinementCtx } from 'zod';

type ZodProfessionalExperience = {
  institution: string;
  role: string;
  start_date: string;
  at_university: boolean;
  end_date?: string | undefined;
  summary?: string | undefined;
};

type ZodAcademicInformation = {
  institution: string;
  major: string;
  start_date: string;
  end_date?: string | undefined;
  summary?: string | undefined;
};

function validateProfessionalExperience(
  idx: number,
  exp: ZodProfessionalExperience,
  ctx: RefinementCtx<OnboardSchemaValues>,
) {
  const hasStarted = exp.institution || exp.role || exp.start_date;
  const missingSomething = !exp.institution || !exp.role || !exp.start_date;

  if (hasStarted && missingSomething) {
    if (!exp.institution) {
      ctx.addIssue({
        code: 'custom',
        message: 'Please add the company name',
        path: ['professional_experiences', idx, 'institution'],
      });
    } else if (!exp.role) {
      ctx.addIssue({
        code: 'custom',
        message: 'Please add your job title',
        path: ['professional_experiences', idx, 'role'],
      });
    } else if (!exp.start_date) {
      ctx.addIssue({
        code: 'custom',
        message: 'Please add when you started',
        path: ['professional_experiences', idx, 'start_date'],
      });
    }
  }
}

function validateAcademicInformation(
  idx: number,
  acad: ZodAcademicInformation,
  ctx: RefinementCtx<OnboardSchemaValues>,
) {
  const hasStarted = acad.institution || acad.major || acad.start_date;
  if (hasStarted && (!acad.institution || !acad.major || !acad.start_date)) {
    if (!acad.institution) {
      ctx.addIssue({
        code: 'custom',
        message: 'Please add the school name',
        path: [`academic_information.${idx}.institution`],
      });
    } else if (!acad.major) {
      ctx.addIssue({
        code: 'custom',
        message: 'Please add your field of study',
        path: [`academic_information.${idx}.major`],
      });
    } else if (!acad.start_date) {
      ctx.addIssue({
        code: 'custom',
        message: 'Please add when you started',
        path: [`academic_information.${idx}.start_date`],
      });
    }
    return false;
  }
}

export const onboardSchema = z
  .object({
    experience_years: z
      .number()
      .min(0, 'Experience years cannot be negative')
      .max(50, 'Experience years seems too high'),
    professional_summary: z.string().optional().or(z.literal('')),

    professional_experiences: z.array(
      z.object({
        institution: z.string().min(1, 'Institution name is required'),
        role: z.string().min(1, 'Role is required'),
        start_date: z.string().min(1, 'Start date is required'),
        end_date: z.string().optional().or(z.literal('')),
        summary: z.string().optional().or(z.literal('')),
        at_university: z.boolean(),
      }),
    ),

    academic_information: z.array(
      z.object({
        institution: z.string().min(1, 'Institution name is required'),
        major: z.string().min(1, 'Major/Field of study is required'),
        start_date: z.string().min(1, 'Start date is required'),
        end_date: z.string().optional().or(z.literal('')),
        summary: z.string().optional().or(z.literal('')),
      }),
    ),

    skills: z.string().min(1, 'Please list your skills (comma-separated)'),
  })
  .superRefine(
    (
      {
        experience_years,
        professional_experiences,
        academic_information,
        skills,
      },
      ctx,
    ) => {
      if (experience_years !== undefined && experience_years < 0) {
        ctx.addIssue({
          code: 'custom',
          message: 'Please enter a valid number of years',
          path: ['experience_years'],
        });
      }

      if (professional_experiences && professional_experiences.length > 0) {
        for (let i = 0; i < professional_experiences.length; i++) {
          validateProfessionalExperience(i, professional_experiences[i], ctx);
        }
      }

      if (academic_information && academic_information.length > 0) {
        for (let i = 0; i < academic_information.length; i++) {
          validateAcademicInformation(i, academic_information[i], ctx);
        }
      }

      if (skills && skills.trim() !== '' && skills.trim().length < 3) {
        ctx.addIssue({
          code: 'custom',
          message:
            'Please add a few more skills to help us create better resumes',
          path: ['skills'],
        });
      }

      if (
        experience_years === 0 &&
        professional_experiences &&
        professional_experiences.length > 0
      ) {
        ctx.addIssue({
          code: 'custom',
          message:
            'Since you’ve added at least one professional experience, your total years of experience must be at least 1.',
          path: ['experience_years'],
        });
      }
    },
  );

export type OnboardSchemaValues = z.infer<typeof onboardSchema>;
