'use client';

import { useState } from 'react';
import { useForm, useFieldArray, FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  onboardSchema,
  OnboardSchemaValues,
} from '@/types/forms/onboard.schema';
import { saveOnboardingData } from '@/app/onboard/actions';
import { toast } from 'sonner';
import { ThreeDotLoad } from '../ui/three-dot-load';
import { Wand2 } from 'lucide-react';
import { OnboardStepOne } from './step-one';
import { OnboardStepTwo } from './step-two';
import { OnboardStepThree } from './step-three';
import { OnboardStepFour } from './step-four';

export default function OnboardForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const isDevelopment = process.env.NODE_ENV === 'development';

  const form = useForm<OnboardSchemaValues>({
    resolver: zodResolver(onboardSchema),
    defaultValues: {
      experience_years: 0,
      professional_summary: '',
      skills: '',
      professional_experiences: [],
      academic_information: [],
    },
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control: form.control,
    name: 'professional_experiences',
  });

  const {
    fields: academicFields,
    append: appendAcademic,
    remove: removeAcademic,
  } = useFieldArray({
    control: form.control,
    name: 'academic_information',
  });

  const onError = (errors: FieldErrors<OnboardSchemaValues>) => {
    const firstErrorPath = Object.keys(errors)[0];
    const firstInvalidElement = document.querySelector(
      '[data-invalid="false"]',
    );
    if (firstInvalidElement) {
      firstInvalidElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      (firstInvalidElement as HTMLElement).focus();
    }

    toast.error('Please fix the highlighted fields before continuing.');

    const pathStep: Record<string, number> = {
      experience_years: 1,
      professional_summary: 1,
      professional_experiences: 2,
      academic_information: 3,
      skills: 4,
    };

    setCurrentStep(pathStep[firstErrorPath]);
  };

  const onSubmit = async (data: OnboardSchemaValues) => {
    const error = await saveOnboardingData(data);
    if (!error) {
      return;
    }

    if ('status' in error) {
      toast.error(`${error.status} - ${error.message}`);
      return;
    }

    toast.error(`${error.message}`);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const addExperience = () => {
    appendExperience({
      institution: '',
      role: '',
      start_date: '',
      end_date: '',
      summary: '',
      at_university: false,
    });
  };

  const addAcademic = () => {
    appendAcademic({
      institution: '',
      major: '',
      start_date: '',
      end_date: '',
      summary: '',
    });
  };

  const autoFillCurrentStep = () => {
    switch (currentStep) {
      case 1:
        form.setValue('experience_years', 3);
        form.setValue(
          'professional_summary',
          'Passionate software engineer with 3+ years of experience building scalable web applications. I love solving complex problems and creating user-friendly interfaces that make a real impact.',
        );
        break;
      case 2:
        if (experienceFields.length === 0) {
          addExperience();
        }
        form.setValue(
          'professional_experiences.0.institution',
          'TechCorp Inc.',
        );
        form.setValue(
          'professional_experiences.0.role',
          'Senior Software Engineer',
        );
        form.setValue('professional_experiences.0.start_date', '2022-01-15');
        form.setValue('professional_experiences.0.end_date', '');
        form.setValue(
          'professional_experiences.0.summary',
          'Led development of microservices architecture, improved system performance by 40%, and mentored junior developers. Collaborated with cross-functional teams to deliver high-quality software solutions.',
        );
        form.setValue('professional_experiences.0.at_university', false);
        break;
      case 3:
        if (academicFields.length === 0) {
          addAcademic();
        }
        form.setValue(
          'academic_information.0.institution',
          'University of Technology',
        );
        form.setValue('academic_information.0.major', 'Computer Science');
        form.setValue('academic_information.0.start_date', '2018-09-01');
        form.setValue('academic_information.0.end_date', '2022-05-15');
        form.setValue(
          'academic_information.0.summary',
          "Graduated Magna Cum Laude, Dean's List for 6 semesters, President of Computer Science Club, Completed senior capstone project on machine learning applications.",
        );
        break;
      case 4:
        form.setValue(
          'skills',
          'JavaScript, TypeScript, React, Node.js, Python, AWS, Docker, Kubernetes, PostgreSQL, MongoDB, Git, Agile, Leadership, Problem Solving, Team Collaboration, Project Management, UI/UX Design, Data Analysis, Machine Learning, API Development, Microservices, DevOps, CI/CD',
        );
        break;
    }

    toast.success('Form auto-filled with sample data!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <OnboardStepOne form={form} />;
      case 2:
        return (
          <OnboardStepTwo
            form={form}
            addExperience={addExperience}
            removeExperience={removeExperience}
            experienceFields={experienceFields}
          />
        );
      case 3:
        return (
          <OnboardStepThree
            form={form}
            addAcademic={addAcademic}
            removeAcademic={removeAcademic}
            academicFields={academicFields}
          />
        );
      case 4:
        return <OnboardStepFour form={form} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden">
        <CardHeader className="pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <div className="text-center mb-6 sm:mb-8">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 tracking-tight">
              Let&apos;s build your professional profile
            </CardTitle>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              We&apos;ll gather information about your background to create targeted
              resumes for your job applications. You can always update this
              information later.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
              <span className="font-medium">Experience</span>
              <span className="font-medium">Work History</span>
              <span className="font-medium">Education</span>
              <span className="font-medium">Skills</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex-1 bg-muted rounded-full h-2 sm:h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-primary/80 h-2 sm:h-3 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
              <span className="text-sm sm:text-lg font-semibold text-foreground min-w-[3rem] sm:min-w-[4rem] text-right">
                {Math.round((currentStep / totalSteps) * 100)}%
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, onError)}
              className="space-y-8"
            >
              {renderStep()}

              <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-border space-y-4 sm:space-y-0">
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 w-full sm:w-auto"
                  >
                    ← Go Back
                  </Button>

                  {isDevelopment && (
                    <Button
                      type="button"
                      onClick={autoFillCurrentStep}
                      variant="outline"
                      className="h-8 sm:h-10 px-2 sm:px-3 text-xs sm:text-sm rounded-md sm:rounded-lg border-dashed hover:border-solid transition-all duration-200"
                    >
                      <Wand2 className="h-3 w-3 mr-1" />
                      Fill
                    </Button>
                  )}
                </div>

                <div className="flex items-center space-x-2 text-sm sm:text-base md:text-lg text-muted-foreground">
                  <span>
                    Step {currentStep} of {totalSteps}
                  </span>
                </div>

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="h-10 sm:h-12 md:h-14 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
                  >
                    Continue →
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-10 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
                  >
                    {form.formState.isSubmitting ? (
                      <ThreeDotLoad />
                    ) : (
                      <>
                        <span className="hidden sm:inline">
                          Complete Profile & Start Building Resumes
                        </span>
                        <span className="sm:hidden">Complete Profile</span>
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
