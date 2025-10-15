'use client';

import { ReactElement, useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { cn } from '@/lib/utils';
import {
  professionalSummarySchema,
  ProfessionalSummaryValues,
} from '@/lib/zod/professional-summary.schema';
import {
  workExperienceSchema,
  WorkExperienceValues,
} from '@/lib/zod/work-experience.schema';
import { educationSchema, EducationValues } from '@/lib/zod/education.schema';
import { skillsSchema, SkillsValues } from '@/lib/zod/skills.schema';
import {
  certificationSchema,
  CertificationValues,
} from '@/lib/zod/certification.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import {
  saveSummary,
  saveWorkExperience,
  saveEducation,
  saveSkills,
  saveCertification,
  completeOnboarding,
} from '@/app/dashboard/onboard/actions';
import { useRouter } from 'next/navigation';
import {
  UserCertification,
  UserEducation,
  UserSkill,
  UserWorkExperience,
} from '@/prisma/lib/generated/prisma';

type Props = {
  summary?: string;
  onboardData?: {
    workExperiences: UserWorkExperience[];
    educations: UserEducation[];
    skills: UserSkill | null;
    certifications: UserCertification[];
  };
};

type Step = {
  number: number;
  title: string;
  description: string;
};

type StepOneProps = {
  summary?: string;
  onNext: () => void;
};

const StepOne = ({ summary, onNext }: StepOneProps): ReactElement => {
  const [message, setMessage] = useState<string>();
  const form = useForm<ProfessionalSummaryValues>({
    resolver: zodResolver(professionalSummarySchema),
    defaultValues: { summary: summary },
  });

  const submit = async (values: ProfessionalSummaryValues) => {
    const error = await saveSummary(values);
    if (error) {
      setMessage(error.message);
    } else {
      onNext();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Professional Summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="I am a software engineer with 7 years of experience..."
                  {...field}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
              {message && <p className="text-red-500">{message}</p>}
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" disabled>
            Previous
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};

const StepTwo = ({
  onNext,
  onPrevious,
  workExperiences = [],
}: {
  onNext: () => void;
  onPrevious: () => void;
  workExperiences?: UserWorkExperience[];
}) => {
  const [message, setMessage] = useState<string>();
  const latestExperience = workExperiences[0];

  const form = useForm<WorkExperienceValues>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
      company_name: latestExperience?.company_name || '',
      enrollment: latestExperience?.enrollment
        ? new Date(latestExperience.enrollment).toISOString().split('T')[0]
        : '',
      completion: latestExperience?.completion
        ? new Date(latestExperience.completion).toISOString().split('T')[0]
        : '',
      description: latestExperience?.description || '',
      currentWorkPlace: latestExperience?.currentWorkPlace || false,
    },
  });

  const submit = async (values: WorkExperienceValues) => {
    const error = await saveWorkExperience(values);
    if (error) {
      setMessage(error.message);
    } else {
      onNext();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Google Inc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="enrollment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="completion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date (optional)</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="currentWorkPlace"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I currently work here</FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your role and responsibilities..."
                  {...field}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {message && <p className="text-red-500">{message}</p>}

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onPrevious}>
            Previous
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};

const StepThree = ({
  onNext,
  onPrevious,
  educations = [],
}: {
  onNext: () => void;
  onPrevious: () => void;
  educations?: UserEducation[];
}) => {
  const [message, setMessage] = useState<string>();
  const latestEducation = educations[0];

  const form = useForm<EducationValues>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      university_name: latestEducation?.university_name || '',
      enrollment: latestEducation?.enrollment
        ? new Date(latestEducation.enrollment).toISOString().split('T')[0]
        : '',
      completion: latestEducation?.completion
        ? new Date(latestEducation.completion).toISOString().split('T')[0]
        : '',
      finished: latestEducation?.finished || false,
      description: latestEducation?.description || '',
    },
  });

  const submit = async (values: EducationValues) => {
    const error = await saveEducation(values);
    if (error) {
      setMessage(error.message);
    } else {
      onNext();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
        <FormField
          control={form.control}
          name="university_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University/Institution Name</FormLabel>
              <FormControl>
                <Input placeholder="Stanford University" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="enrollment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="completion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date (optional)</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="finished"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I have completed this education</FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Degree, major, achievements..."
                  {...field}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {message && <p className="text-red-500">{message}</p>}

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onPrevious}>
            Previous
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};

const StepFour = ({
  onNext,
  onPrevious,
  skills,
}: {
  onNext: () => void;
  onPrevious: () => void;
  skills?: UserSkill | null;
}) => {
  const [message, setMessage] = useState<string>();

  const form = useForm<SkillsValues>({
    resolver: zodResolver(skillsSchema),
    defaultValues: {
      skills: skills?.skills || '',
    },
  });

  const submit = async (values: SkillsValues) => {
    const error = await saveSkills(values);
    if (error) {
      setMessage(error.message);
    } else {
      onNext();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skills</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="JavaScript, React, Node.js, Python, SQL, AWS, Docker..."
                  {...field}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
              <p className="text-sm text-muted-foreground">
                List your skills separated by commas or new lines
              </p>
            </FormItem>
          )}
        />

        {message && <p className="text-red-500">{message}</p>}

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onPrevious}>
            Previous
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};

const StepFive = ({
  onNext,
  onPrevious,
  certifications = [],
}: {
  onNext: () => void;
  onPrevious: () => void;
  certifications?: UserCertification[];
}) => {
  const [message, setMessage] = useState<string>();
  const latestCertification = certifications[0];

  const form = useForm<CertificationValues>({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      name: latestCertification?.name || '',
      emittedAt: latestCertification?.emittedAt
        ? new Date(latestCertification.emittedAt).toISOString().split('T')[0]
        : '',
      description: latestCertification?.description || '',
    },
  });

  const submit = async (values: CertificationValues) => {
    const error = await saveCertification(values);
    if (error) {
      setMessage(error.message);
    } else {
      onNext();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certification Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="AWS Certified Solutions Architect"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="emittedAt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Certification details, issuer, etc."
                  {...field}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {message && <p className="text-red-500">{message}</p>}

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onPrevious}>
            Previous
          </Button>
          <Button type="submit">Complete</Button>
        </div>
      </form>
    </Form>
  );
};

export const OnboardSteps = ({ summary, onboardData }: Props) => {
  const router = useRouter();

  const steps: Step[] = [
    {
      number: 1,
      title: 'Professional Summary',
      description: 'Enter your professional summary',
    },
    {
      number: 2,
      title: 'Work Experience',
      description: 'Enter your work experience',
    },
    {
      number: 3,
      title: 'Education',
      description: 'Enter your education background',
    },
    { number: 4, title: 'Skills', description: 'Add some skills' },
    {
      number: 5,
      title: 'Certifications',
      description: 'Add some of your certifications',
    },
  ];

  const [selectedStep, setSelectedStep] = useState(1);

  const goNext = () =>
    setSelectedStep((prev) => Math.min(prev + 1, steps.length));
  const goPrevious = () => setSelectedStep((prev) => Math.max(prev - 1, 1));

  const handleComplete = async () => {
    try {
      const error = await completeOnboarding();
      if (error) {
        console.error('Error completing onboarding:', error);
      } else {
        // Redirect to create first application after successful completion
        router.push('/dashboard/create-application');
      }
    } catch (err) {
      console.error('Error completing onboarding:', err);
    }
  };

  const renderStep = () => {
    switch (selectedStep) {
      case 1:
        return <StepOne summary={summary} onNext={goNext} />;
      case 2:
        return (
          <StepTwo
            onNext={goNext}
            onPrevious={goPrevious}
            workExperiences={onboardData?.workExperiences}
          />
        );
      case 3:
        return (
          <StepThree
            onNext={goNext}
            onPrevious={goPrevious}
            educations={onboardData?.educations}
          />
        );
      case 4:
        return (
          <StepFour
            onNext={goNext}
            onPrevious={goPrevious}
            skills={onboardData?.skills}
          />
        );
      case 5:
        return (
          <StepFive
            onNext={handleComplete}
            onPrevious={goPrevious}
            certifications={onboardData?.certifications}
          />
        );
      default:
        return (
          <p>{steps.find((s) => s.number === selectedStep)?.description}</p>
        );
    }
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader className="flex justify-between space-x-2">
        {steps.map((step) => {
          const isActive = selectedStep === step.number;
          return (
            <div
              key={step.number}
              className="flex-1 flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedStep(step.number)}
            >
              <div
                className={cn(
                  'w-10 h-10 flex justify-center items-center rounded-full text-white font-bold transition-transform',
                  isActive
                    ? 'bg-red-700 scale-110'
                    : 'bg-gray-700 hover:bg-gray-600',
                )}
              >
                {step.number}
              </div>
              <span
                className={cn(
                  'mt-1 text-sm text-center transition-colors',
                  isActive ? 'text-red-700 font-semibold' : 'text-gray-400',
                )}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </CardHeader>
      <CardContent className="mt-4">{renderStep()}</CardContent>
    </Card>
  );
};
