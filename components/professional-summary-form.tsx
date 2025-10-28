'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { FileText, Briefcase, CheckCircle } from 'lucide-react';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from './ui/form';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import {
  professionalSummarySchema,
  ProfessionalSummaryValues,
} from '@/types/forms/professional-summary.schema';
import { toast } from 'sonner';
import { saveProfessionalSummary } from '@/app/[locale]/dashboard/work-experience/actions';

type Props = {
  summary: string | null;
  experience_years: number;
};

export const ProfessionalSummaryForm: React.FC<Props> = ({
  summary,
  experience_years,
}: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ProfessionalSummaryValues>({
    resolver: zodResolver(professionalSummarySchema),
    defaultValues: {
      summary: summary ?? '',
      experience_years: experience_years || 0,
    },
  });

  const onSubmit = async (data: ProfessionalSummaryValues) => {
    setIsSubmitting(true);
    try {
      await saveProfessionalSummary(data);
      toast.success('Professional summary saved successfully!');
    } catch (error) {
      console.error('Error saving professional summary:', error);
      toast.error('Failed to save professional summary. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const characterCount = form.watch('summary')?.length || 0;
  const isOverLimit = characterCount > 2000;
  const experienceYears = form.watch('experience_years') || 0;

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="p-6 bg-muted/50">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Professional Summary</h2>
            <p className="text-muted-foreground">
              Write a compelling summary that highlights your key skills,
              experience, and career goals.
            </p>
          </div>
        </div>
      </Card>

      {/* Main Form Card */}
      <Card className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Years of Experience Card */}
            <Card className="p-6 bg-muted/50">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Experience Level</h3>
                </div>

                <FormField
                  control={form.control}
                  name="experience_years"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Professional Experience</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="number"
                            placeholder="0"
                            min="0"
                            max="50"
                            className="pl-12 text-lg font-medium"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value) || 0)
                            }
                          />
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                            <Briefcase className="h-4 w-4" />
                          </div>
                        </div>
                      </FormControl>
                      <FormDescription>
                        How many years of professional experience do you have?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Card>

            {/* Summary Card */}
            <Card className="p-6 bg-muted/50">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    Professional Summary
                  </h3>
                </div>

                <FormField
                  control={form.control}
                  name="summary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Professional Story</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your professional summary here. Include your key skills, experience, and what makes you unique..."
                          className="min-h-[200px] resize-y"
                          {...field}
                        />
                      </FormControl>
                      <div className="flex justify-between items-center">
                        <FormDescription>
                          Aim for 50-2000 characters. This summary will be used
                          in your professional profile.
                        </FormDescription>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm font-medium ${
                              isOverLimit
                                ? 'text-destructive'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {characterCount}/2000
                          </span>
                          {isOverLimit && (
                            <div className="w-2 h-2 bg-destructive rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Card>

            {/* Action Card */}
            <Card className="p-6 bg-muted/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ready to Save?</h3>
                    <p className="text-sm text-muted-foreground">
                      Your professional summary will be saved and used across
                      your profile.
                    </p>
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={
                    isSubmitting ||
                    isOverLimit ||
                    experienceYears < 0 ||
                    experienceYears > 50
                  }
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                      Saving...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Save Summary
                    </div>
                  )}
                </Button>
              </div>
            </Card>
          </form>
        </Form>
      </Card>
    </div>
  );
};
