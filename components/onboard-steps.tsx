'use client';

import { ReactElement, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { cn } from '@/lib/utils';
import {
  professionalSummarySchema,
  ProfessionalSummaryValues,
} from '@/lib/zod/professional-summary.schema';
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

type Props = {
  user_id: string;
};

type Step = {
  number: number;
  title: string;
  description: string;
};

const StepOne = (): ReactElement => {
  const form = useForm<ProfessionalSummaryValues>({
    resolver: zodResolver(professionalSummarySchema),
    defaultValues: {
      summary: '',
    },
  });

  const submit = (values: ProfessionalSummaryValues) => {
    console.log(values);
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
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button variant="outline">Previous</Button>
          <Button>Next</Button>
        </div>
      </form>
    </Form>
  );
};

// Add more steps as needed
const stepComponents: Record<number, ReactElement> = {
  1: <StepOne />,
};

export const OnboardSteps = ({ user_id }: Props) => {
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

      {/* Step Content */}
      <CardContent className="mt-4">
        {stepComponents[selectedStep] || (
          <p>{steps.find((s) => s.number === selectedStep)?.description}</p>
        )}
      </CardContent>

      {/* <CardFooter className="justify-end gap-2">
        <Button
          variant="outline"
          disabled={selectedStep === 1}
          onClick={() => setSelectedStep(selectedStep - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={selectedStep === steps.length}
          onClick={() => setSelectedStep(selectedStep + 1)}
        >
          Next
        </Button>
      </CardFooter> */}
    </Card>
  );
};
