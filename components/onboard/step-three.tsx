'use client';

import { OnboardStepThreeProps } from '@/types/onboard/onboard-step.props';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export const OnboardStepThree: React.FC<OnboardStepThreeProps> = ({
  addAcademic,
  removeAcademic,
  academicFields,
  form,
}) => {
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
                      Leave blank if you&apos;re still studying
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
};
