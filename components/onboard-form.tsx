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
import {
  onboardSchema,
  OnboardSchemaValues,
} from '@/types/forms/onboard.schema';
import { saveOnboardingData } from '@/app/onboard/actions';
import { toast } from 'sonner';
import { ThreeDotLoad } from './ui/three-dot-load';
import { Plus, Trash2, Wand2 } from 'lucide-react';
import { Textarea } from './ui/textarea';

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

  const validateStep = (step: number): boolean => {
    const formData = form.getValues();

    switch (step) {
      case 1:
        // Only validate if user has entered something
        if (
          formData.experience_years !== undefined &&
          formData.experience_years < 0
        ) {
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
            if (
              hasStarted &&
              (!exp.institution || !exp.role || !exp.start_date)
            ) {
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
            const hasStarted =
              acad.institution || acad.major || acad.start_date;
            if (
              hasStarted &&
              (!acad.institution || !acad.major || !acad.start_date)
            ) {
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
        if (
          formData.skills &&
          formData.skills.trim() !== '' &&
          formData.skills.trim().length < 3
        ) {
          form.setError('skills', {
            type: 'manual',
            message:
              'Please add a few more skills to help us create better resumes',
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
        return (
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
                Professional Experience
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Tell us about your professional background. This information
                will help us create compelling resume sections tailored to your
                target roles.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
              <FormField
                control={form.control}
                name="experience_years"
                render={({ field }) => (
                  <FormItem className="space-y-3 sm:space-y-4 md:space-y-6">
                    <FormLabel className="text-base sm:text-lg md:text-xl font-medium text-foreground">
                      How many years of professional experience do you have?
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        max="50"
                        placeholder="0"
                        className="h-10 sm:h-12 md:h-14 lg:h-16 text-sm sm:text-base md:text-lg lg:text-xl text-center rounded-xl sm:rounded-2xl transition-all duration-200"
                        data-invalid={!!form.formState.errors.experience_years}
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value) || 0)
                        }
                      />
                    </FormControl>
                    <FormDescription className="text-sm sm:text-base md:text-lg text-center text-muted-foreground">
                      Include internships, part-time work, and freelance
                      projects - every experience counts toward your
                      professional profile.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="professional_summary"
                render={({ field }) => (
                  <FormItem className="space-y-3 sm:space-y-4 md:space-y-6">
                    <FormLabel className="text-base sm:text-lg md:text-xl font-medium text-foreground">
                      Tell us a bit about yourself (optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What makes you unique? What are you passionate about? What are your key achievements? Don't worry about being perfect - just share what comes to mind!"
                        rows={4}
                        className="resize-none text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-sm sm:text-base md:text-lg text-muted-foreground">
                      This helps us create more personalized resumes and cover
                      letters tailored to your unique background.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="bg-muted/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto border">
              <div className="text-center space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  Why this matters
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                  The more we know about your background, the better we can
                  tailor your resumes to specific job applications. You can
                  always add more details later.
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
                Work History
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Share your work history to help us create detailed experience
                sections for your resume. You can always add more experiences
                later.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={addExperience}
                className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
              >
                <Plus className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 sm:mr-3" />
                Add a Work Experience
              </Button>
            </div>

            {experienceFields.map((field, index) => (
              <Card
                key={field.id}
                className="p-4 sm:p-6 md:p-8 bg-card/80 backdrop-blur-sm border rounded-2xl sm:rounded-3xl shadow-xl max-w-5xl mx-auto"
              >
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                      Work Experience #{index + 1}
                    </h4>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => removeExperience(index)}
                      className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 p-0 rounded-xl sm:rounded-2xl transition-all duration-200"
                    >
                      <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <FormField
                      control={form.control}
                      name={`professional_experiences.${index}.institution`}
                      render={({ field }) => (
                        <FormItem className="space-y-2 sm:space-y-3 md:space-y-4">
                          <FormLabel className="text-sm sm:text-base md:text-lg font-medium text-foreground">
                            Where did you work? *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Company or organization name"
                              className="h-9 sm:h-10 md:h-12 lg:h-14 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
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
                        <FormItem className="space-y-2 sm:space-y-3 md:space-y-4">
                          <FormLabel className="text-sm sm:text-base md:text-lg font-medium text-foreground">
                            What was your job title? *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., Software Engineer, Marketing Intern"
                              className="h-9 sm:h-10 md:h-12 lg:h-14 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <FormField
                      control={form.control}
                      name={`professional_experiences.${index}.start_date`}
                      render={({ field }) => (
                        <FormItem className="space-y-2 sm:space-y-3 md:space-y-4">
                          <FormLabel className="text-sm sm:text-base md:text-lg font-medium text-foreground">
                            When did you start? *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              className="h-9 sm:h-10 md:h-12 lg:h-14 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
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
                        <FormItem className="space-y-2 sm:space-y-3 md:space-y-4">
                          <FormLabel className="text-sm sm:text-base md:text-lg font-medium text-foreground">
                            When did you finish? (optional)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              className="h-9 sm:h-10 md:h-12 lg:h-14 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-xs sm:text-sm md:text-base text-muted-foreground">
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
                      <FormItem className="space-y-2 sm:space-y-3 md:space-y-4">
                        <FormLabel className="text-sm sm:text-base md:text-lg font-medium text-foreground">
                          What did you do there? (optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your key responsibilities, achievements, or what you learned. Don't worry about being perfect - just share what comes to mind!"
                            rows={3}
                            className="text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-xs sm:text-sm md:text-base text-muted-foreground">
                          This helps us create compelling bullet points for your
                          resume
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`professional_experiences.${index}.at_university`}
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-2 sm:space-x-3 md:space-x-4 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1 sm:mt-1.5 md:mt-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 rounded-md sm:rounded-lg"
                          />
                        </FormControl>
                        <div className="space-y-1 sm:space-y-1.5 md:space-y-2 leading-none">
                          <FormLabel className="text-sm sm:text-base md:text-lg text-foreground">
                            This was at a university or school
                          </FormLabel>
                          <FormDescription className="text-xs sm:text-sm md:text-base text-muted-foreground">
                            Check this if this experience was part of your
                            academic program
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </Card>
            ))}

            <div className="bg-muted/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto border">
              <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
                  Great progress
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                  Each experience you add helps us create more detailed and
                  compelling resume sections. Quality matters more than
                  quantity.
                </p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
                Education & Qualifications
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Share your educational background including degrees,
                certifications, and courses. This helps us create a complete
                picture of your qualifications.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={addAcademic}
                className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
              >
                <Plus className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 sm:mr-3" />
                Add Education
              </Button>
            </div>

            {academicFields.map((field, index) => (
              <Card
                key={field.id}
                className="p-4 sm:p-6 md:p-8 bg-card/80 backdrop-blur-sm border rounded-2xl sm:rounded-3xl shadow-xl max-w-5xl mx-auto"
              >
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                      Education #{index + 1}
                    </h4>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => removeAcademic(index)}
                      className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 p-0 rounded-xl sm:rounded-2xl transition-all duration-200"
                    >
                      <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <FormField
                      control={form.control}
                      name={`academic_information.${index}.institution`}
                      render={({ field }) => (
                        <FormItem className="space-y-2 sm:space-y-3 md:space-y-4">
                          <FormLabel className="text-sm sm:text-base md:text-lg font-medium text-foreground">
                            Where did you study? *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="University, college, or school name"
                              className="h-9 sm:h-10 md:h-12 lg:h-14 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
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
                        <FormItem className="space-y-2 sm:space-y-3 md:space-y-4">
                          <FormLabel className="text-sm sm:text-base md:text-lg font-medium text-foreground">
                            What did you study? *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., Computer Science, Business Administration"
                              className="h-9 sm:h-10 md:h-12 lg:h-14 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <FormField
                      control={form.control}
                      name={`academic_information.${index}.start_date`}
                      render={({ field }) => (
                        <FormItem className="space-y-2 sm:space-y-3 md:space-y-4">
                          <FormLabel className="text-sm sm:text-base md:text-lg font-medium text-foreground">
                            When did you start? *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              className="h-9 sm:h-10 md:h-12 lg:h-14 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
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
                        <FormItem className="space-y-2 sm:space-y-3 md:space-y-4">
                          <FormLabel className="text-sm sm:text-base md:text-lg font-medium text-foreground">
                            When did you finish? (optional)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              className="h-9 sm:h-10 md:h-12 lg:h-14 text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-xs sm:text-sm md:text-base text-muted-foreground">
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
                      <FormItem className="space-y-2 sm:space-y-3 md:space-y-4">
                        <FormLabel className="text-sm sm:text-base md:text-lg font-medium text-foreground">
                          Any achievements or highlights? (optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about honors, awards, relevant projects, or anything else that makes your education stand out!"
                            rows={3}
                            className="text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-xs sm:text-sm md:text-base text-muted-foreground">
                          This helps us create compelling academic sections for
                          your resume
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>
            ))}

            <div className="bg-muted/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto border">
              <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
                  Excellent progress
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                  Your education details help us create a comprehensive academic
                  section for your resume. You can always add more information
                  later.
                </p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
                Skills & Expertise
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Share your skills and expertise - both technical and personal.
                This is the final step, and you can always add more skills
                later.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem className="space-y-3 sm:space-y-4 md:space-y-6">
                    <FormLabel className="text-base sm:text-lg md:text-xl font-medium text-foreground">
                      Tell us about your skills and expertise
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List your skills separated by commas (e.g., JavaScript, React, Python, Project Management, Leadership, Design Thinking, Public Speaking, Data Analysis, Team Collaboration, Problem Solving)"
                        rows={6}
                        className="resize-none text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
                        data-invalid={!!form.formState.errors.skills}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-sm sm:text-base md:text-lg text-muted-foreground">
                      Include both technical and soft skills. Don't worry about
                      being comprehensive - you can always add more skills later
                      as you grow.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="bg-muted/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border">
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">
                    Skill Categories
                  </h4>
                  <div className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground">
                    <div>
                      <strong>Technical Skills:</strong> Programming languages,
                      frameworks, tools, software
                    </div>
                    <div>
                      <strong>Soft Skills:</strong> Leadership, communication,
                      problem-solving, teamwork
                    </div>
                    <div>
                      <strong>Industry Knowledge:</strong> Domain-specific
                      expertise and experience
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border">
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">
                    Tips for Success
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 text-sm sm:text-base md:text-lg text-muted-foreground">
                    <li>• Be specific about your skill level when possible</li>
                    <li>• Include both hard and soft skills</li>
                    <li>• Mention tools and technologies you use</li>
                    <li>• Add industry-specific knowledge</li>
                    <li>
                      • Don't worry about being perfect - you can always update
                      this
                    </li>
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
    <div className="w-full max-w-5xl mx-auto">
      <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden">
        <CardHeader className="pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <div className="text-center mb-6 sm:mb-8">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3 sm:mb-4 tracking-tight">
              Let's build your professional profile
            </CardTitle>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              We'll gather information about your background to create targeted
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
