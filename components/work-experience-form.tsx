'use client';

import { Plus, Trash2, Calendar, Building2, Briefcase, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  professional_experiences,
  ProfessionalExperienceValues,
} from '@/types/forms/work-experience.schema';
import { UserProfessionalExperience } from '@/prisma/generated/prisma';
import { useState } from 'react';
import { toISOString } from '@/lib/utils';
import { toast } from 'sonner';

type Props = {
  experienceFields: Array<UserProfessionalExperience>;
};

export const WorkExperienceForm: React.FC<Props> = ({ experienceFields }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<{ experiences: ProfessionalExperienceValues }>({
    resolver: zodResolver(z.object({ experiences: professional_experiences })),
    defaultValues: {
      experiences: experienceFields?.map((exp) => ({
        institution: exp.institution,
        role: exp.role,
        start_date: toISOString(exp.start_date),
        end_date: toISOString(exp.end_date),
        summary: exp.summary || '',
        at_university: exp.at_university,
      })) || [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'experiences',
  });

  const handleAddExperience = () => {
    append({
      institution: '',
      role: '',
      start_date: '',
      end_date: '',
      summary: '',
      at_university: false,
    });
  };

  const handleRemoveExperience = (index: number) => {
    remove(index);
  };

  const onSubmit = async (data: { experiences: ProfessionalExperienceValues }) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement actual save functionality
      console.log('Saving work experiences:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Work experiences saved successfully!');
    } catch (error) {
      console.error('Error saving work experiences:', error);
      toast.error('Failed to save work experiences. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="p-6 bg-muted/50">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <p className="text-muted-foreground">
              Add details about your previous roles and professional experiences.
            </p>
          </div>
        </div>
      </Card>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            {/* Add Experience Card */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Plus className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Add New Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      Click to add a new work experience entry
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={handleAddExperience}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Experience
                </Button>
              </div>
            </Card>

            {/* Empty State */}
            {fields.length === 0 && (
              <Card className="p-12 text-center bg-muted/50">
                <div className="mx-auto w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No work experiences yet</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Start building your professional profile by adding your work experiences. This will help showcase your career journey.
                </p>
                <Button
                  onClick={handleAddExperience}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Your First Experience
                </Button>
              </Card>
            )}

            {/* Experience Entries */}
            {fields.map((field, index) => (
              <Card key={field.id} className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">
                          Experience #{index + 1}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Professional work experience
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      size="icon"
                      variant="destructive"
                      onClick={() => handleRemoveExperience(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4 bg-muted/50">
                      <FormField
                        control={form.control}
                        name={`experiences.${index}.institution`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Building2 className="h-4 w-4" />
                              Institution *
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g. Google, Microsoft, University" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Card>

                    <Card className="p-4 bg-muted/50">
                      <FormField
                        control={form.control}
                        name={`experiences.${index}.role`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Briefcase className="h-4 w-4" />
                              Role *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Software Engineer, Intern, Research Assistant"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Card>
                  </div>

                  {/* Date Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4 bg-muted/50">
                      <FormField
                        control={form.control}
                        name={`experiences.${index}.start_date`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              Start Date *
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                {...field}
                                value={
                                  field.value
                                    ? typeof field.value === 'string'
                                      ? field.value
                                      : field.value.toISOString().split('T')[0]
                                    : ''
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Card>

                    <Card className="p-4 bg-muted/50">
                      <FormField
                        control={form.control}
                        name={`experiences.${index}.end_date`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              End Date
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                {...field}
                                value={
                                  field.value
                                    ? typeof field.value === 'string'
                                      ? field.value
                                      : field.value.toISOString().split('T')[0]
                                    : ''
                                }
                              />
                            </FormControl>
                            <FormDescription>
                              Leave empty if this is your current position
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </Card>
                  </div>

                  {/* Summary */}
                  <Card className="p-4 bg-muted/50">
                    <FormField
                      control={form.control}
                      name={`experiences.${index}.summary`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Summary</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your key responsibilities, achievements, and skills gained in this role..."
                              className="min-h-[120px] resize-y"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Highlight your key achievements and responsibilities
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </Card>

                  {/* University Checkbox */}
                  <Card className="p-4 bg-muted/50">
                    <FormField
                      control={form.control}
                      name={`experiences.${index}.at_university`}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              This was at a university or school
                            </FormLabel>
                            <FormDescription>
                              Check if this experience was part of your academic journey
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </Card>
                </div>
              </Card>
            ))}

            {/* Save Button Card */}
            {fields.length > 0 && (
              <Card className="p-6 bg-muted/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Ready to Save?</h3>
                      <p className="text-sm text-muted-foreground">
                        Save all your work experiences to your profile.
                      </p>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Save Experiences
                      </div>
                    )}
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};
