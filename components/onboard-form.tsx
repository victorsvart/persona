'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Field, FieldDescription, FieldGroup } from '@/components/ui/field';
import {
  onboardSchema,
  OnboardSchemaValues,
} from '@/types/forms/onboard.schema';
import { saveOnboardingData } from '@/app/onboard/actions';
import { toast } from 'sonner';
import { ThreeDotLoad } from './ui/three-dot-load';
import { Plus, Trash2 } from 'lucide-react';
import { Textarea } from './ui/textarea';

export default function OnboardForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

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

  const validateStep = (step: number): boolean => {
    const formData = form.getValues();

    switch (step) {
      case 1:
        // Only validate if user has entered something
        if (formData.experience_years !== undefined && formData.experience_years < 0) {
          form.setError('experience_years', {
            type: 'manual',
            message: 'Please enter a valid number of years',
          });
          return false;
        }
        return true;

      case 2:
        // Only validate if user has started adding experiences
        if (
          formData.professional_experiences &&
          formData.professional_experiences.length > 0
        ) {
          for (let i = 0; i < formData.professional_experiences.length; i++) {
            const exp = formData.professional_experiences[i];
            // Only validate if user has started filling out this experience
            const hasStarted = exp.institution || exp.role || exp.start_date;
            if (hasStarted && (!exp.institution || !exp.role || !exp.start_date)) {
              if (!exp.institution) {
                form.setError(`professional_experiences.${i}.institution`, {
                  type: 'manual',
                  message: 'Please add the company name',
                });
              } else if (!exp.role) {
                form.setError(`professional_experiences.${i}.role`, {
                  type: 'manual',
                  message: 'Please add your job title',
                });
              } else if (!exp.start_date) {
                form.setError(`professional_experiences.${i}.start_date`, {
                  type: 'manual',
                  message: 'Please add when you started',
                });
              }
              return false;
            }
          }
        }
        return true;

      case 3:
        // Only validate if user has started adding academic info
        if (
          formData.academic_information &&
          formData.academic_information.length > 0
        ) {
          for (let i = 0; i < formData.academic_information.length; i++) {
            const acad = formData.academic_information[i];
            // Only validate if user has started filling out this education
            const hasStarted = acad.institution || acad.major || acad.start_date;
            if (hasStarted && (!acad.institution || !acad.major || !acad.start_date)) {
              if (!acad.institution) {
                form.setError(`academic_information.${i}.institution`, {
                  type: 'manual',
                  message: 'Please add the school name',
                });
              } else if (!acad.major) {
                form.setError(`academic_information.${i}.major`, {
                  type: 'manual',
                  message: 'Please add your field of study',
                });
              } else if (!acad.start_date) {
                form.setError(`academic_information.${i}.start_date`, {
                  type: 'manual',
                  message: 'Please add when you started',
                });
              }
              return false;
            }
          }
        }
        return true;

      case 4:
        // Only validate if user has started adding skills
        if (formData.skills && formData.skills.trim() !== '' && formData.skills.trim().length < 3) {
          form.setError('skills', {
            type: 'manual',
            message: 'Please add a few more skills to help us create better resumes',
          });
          return false;
        }
        return true;

      default:
        return true;
    }
  };

  const validateAllSteps = (): number | null => {
    for (let step = 1; step <= totalSteps; step++) {
      if (!validateStep(step)) {
        return step;
      }
    }
    return null;
  };

  const onSubmit = async (data: OnboardSchemaValues) => {
    // First validate all steps
    const firstInvalidStep = validateAllSteps();

    if (firstInvalidStep !== null) {
      // Navigate to the first step with validation errors
      setCurrentStep(firstInvalidStep);

      // Focus on the first field with an error after a short delay
      setTimeout(() => {
        const firstErrorField = document.querySelector(
          '[data-invalid="true"]',
        ) as HTMLElement;
        if (firstErrorField) {
          firstErrorField.focus();
          firstErrorField.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 200);

      toast.error(
        `Let's finish filling out step ${firstInvalidStep} - don't worry, you can always come back and edit this later!`,
      );
      return;
    }

    const error = await saveOnboardingData(data);
    if (error) {
      toast.error(`${error.status} - ${error.message}`);
    }
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Let's start with your experience! 🚀
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't worry about getting everything perfect - you can always come back and update this information later.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-8">
              <FormField
                control={form.control}
                name="experience_years"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-lg font-medium">
                      How many years of professional experience do you have?
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        max="50"
                        placeholder="0"
                        className="h-14 text-lg text-center"
                        data-invalid={
                          !!form.formState.errors.experience_years
                        }
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value) || 0)
                        }
                      />
                    </FormControl>
                    <FormDescription className="text-base text-center">
                      💡 Include internships, part-time work, and freelance projects - every bit counts!
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="professional_summary"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-lg font-medium">
                      Tell us a bit about yourself (optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What makes you unique? What are you passionate about? What are your key achievements? Don't worry about being perfect - just share what comes to mind!"
                        rows={6}
                        className="resize-none text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-base">
                      ✨ This helps us create more personalized resumes and cover letters for you
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                  🎯 Why this matters
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  The more we know about your background, the better we can tailor your resumes to specific job applications. 
                  But remember - you can always add more details later!
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Tell us about your work! 💼
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Share your work history - even if it's just one job or internship. 
                You can always add more experiences later!
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={addExperience}
                className="h-14 px-8 text-base"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add a Work Experience
              </Button>
            </div>

            {experienceFields.map((field, index) => (
              <Card
                key={field.id}
                className="p-8 border-l-4 border-l-rose-500/30 bg-card/60 shadow-lg max-w-4xl mx-auto"
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-semibold text-foreground">
                      Work Experience #{index + 1}
                    </h4>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => removeExperience(index)}
                      className="h-10 w-10 p-0"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name={`professional_experiences.${index}.institution`}
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-base font-medium">Where did you work? *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Company or organization name"
                              className="h-12 text-base"
                              data-invalid={
                                !!form.formState.errors
                                  .professional_experiences?.[index]
                                  ?.institution
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`professional_experiences.${index}.role`}
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-base font-medium">What was your job title? *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., Software Engineer, Marketing Intern"
                              className="h-12 text-base"
                              data-invalid={
                                !!form.formState.errors
                                  .professional_experiences?.[index]?.role
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name={`professional_experiences.${index}.start_date`}
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-base font-medium">When did you start? *</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              className="h-12 text-base"
                              data-invalid={
                                !!form.formState.errors
                                  .professional_experiences?.[index]?.start_date
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`professional_experiences.${index}.end_date`}
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-base font-medium">When did you finish? (optional)</FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              className="h-12 text-base"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-sm">
                            Leave blank if you're still working there
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name={`professional_experiences.${index}.summary`}
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-base font-medium">What did you do there? (optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your key responsibilities, achievements, or what you learned. Don't worry about being perfect - just share what comes to mind!"
                            rows={4}
                            className="text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-sm">
                          💡 This helps us create compelling bullet points for your resume
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`professional_experiences.${index}.at_university`}
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-base">This was at a university or school</FormLabel>
                          <FormDescription className="text-sm">
                            Check this if this experience was part of your academic program
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </Card>
            ))}

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100">
                  💼 Great job so far!
                </h3>
                <p className="text-amber-700 dark:text-amber-300">
                  Each experience you add helps us create more detailed and compelling resume sections. 
                  Don't worry if you don't have many - quality matters more than quantity!
                </p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                What about your education? 🎓
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Share your educational background - degrees, certifications, courses. 
                This helps us create a complete picture of your qualifications!
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={addAcademic}
                className="h-14 px-8 text-base"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Education
              </Button>
            </div>

            {academicFields.map((field, index) => (
              <Card
                key={field.id}
                className="p-8 border-l-4 border-l-blue-500/30 bg-card/60 shadow-lg max-w-4xl mx-auto"
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-semibold text-foreground">
                      Education #{index + 1}
                    </h4>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => removeAcademic(index)}
                      className="h-10 w-10 p-0"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name={`academic_information.${index}.institution`}
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-base font-medium">Where did you study? *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="University, college, or school name"
                              className="h-12 text-base"
                              data-invalid={
                                !!form.formState.errors.academic_information?.[
                                  index
                                ]?.institution
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`academic_information.${index}.major`}
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-base font-medium">What did you study? *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., Computer Science, Business Administration"
                              className="h-12 text-base"
                              data-invalid={
                                !!form.formState.errors.academic_information?.[
                                  index
                                ]?.major
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name={`academic_information.${index}.start_date`}
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-base font-medium">When did you start? *</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              className="h-12 text-base"
                              data-invalid={
                                !!form.formState.errors.academic_information?.[
                                  index
                                ]?.start_date
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`academic_information.${index}.end_date`}
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-base font-medium">When did you finish? (optional)</FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              className="h-12 text-base"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-sm">
                            Leave blank if you're still studying
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name={`academic_information.${index}.summary`}
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-base font-medium">Any achievements or highlights? (optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about honors, awards, relevant projects, or anything else that makes your education stand out!"
                            rows={4}
                            className="text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-sm">
                          💡 This helps us create compelling academic sections for your resume
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>
            ))}

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
                  🎓 You're doing great!
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  Your education details help us create a comprehensive academic section for your resume. 
                  Remember, you can always add more information later!
                </p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                What are you good at? ✨
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Share your skills and expertise - both technical and personal. 
                This is the final step, and you can always add more skills later!
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-lg font-medium">
                      Tell us about your skills and expertise
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List your skills separated by commas (e.g., JavaScript, React, Python, Project Management, Leadership, Design Thinking, Public Speaking, Data Analysis, Team Collaboration, Problem Solving)"
                        rows={8}
                        className="resize-none text-base"
                        data-invalid={!!form.formState.errors.skills}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-base">
                      💡 Include both technical and soft skills. Don't worry about being comprehensive - 
                      you can always add more skills later as you grow!
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
                    🎯 Skill Categories
                  </h4>
                  <div className="space-y-4 text-base text-green-700 dark:text-green-300">
                    <div>
                      <strong>Technical Skills:</strong> Programming languages, frameworks, tools, software
                    </div>
                    <div>
                      <strong>Soft Skills:</strong> Leadership, communication, problem-solving, teamwork
                    </div>
                    <div>
                      <strong>Industry Knowledge:</strong> Domain-specific expertise and experience
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
                    💡 Pro Tips
                  </h4>
                  <ul className="space-y-3 text-base text-purple-700 dark:text-purple-300">
                    <li>• Be specific about your skill level when possible</li>
                    <li>• Include both hard and soft skills</li>
                    <li>• Mention tools and technologies you use</li>
                    <li>• Add industry-specific knowledge</li>
                    <li>• Don't worry about being perfect - you can always update this!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-7xl mx-auto shadow-xl border-0 bg-card/95 backdrop-blur-sm min-h-[80vh]">
      <CardHeader className="pb-8">
        <div className="text-center mb-8">
          <CardTitle className="text-3xl font-bold text-foreground mb-4">
            Let's get to know you! 👋
          </CardTitle>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'll ask you a few questions about your background. Don't worry about being perfect - 
            you can always come back and update everything later!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium">Experience</span>
            <span className="font-medium">Work History</span>
            <span className="font-medium">Education</span>
            <span className="font-medium">Skills</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-rose-500 to-pink-500 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
            <span className="text-base font-semibold text-foreground min-w-[4rem] text-right">
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-8 py-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {renderStep()}

            <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="h-12 px-8 text-base"
              >
                ← Go Back
              </Button>

              <div className="flex items-center space-x-2 text-base text-muted-foreground">
                <span>
                  Step {currentStep} of {totalSteps}
                </span>
              </div>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="h-12 px-10 text-base bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
                >
                  Continue →
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="h-12 px-10 text-base bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  {form.formState.isSubmitting ? (
                    <ThreeDotLoad />
                  ) : (
                    '🎉 Start Building Resumes!'
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
