'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  applicationFormSchema,
  ApplicationFormValues,
} from '@/lib/types/forms/application.form';
import { createApplication } from '@/app/actions/applications';

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function ApplicationForm({ open, onOpenChange, onSuccess }: ApplicationFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      company: '',
      role: '',
      jobDescription: '',
    },
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);
    try {
      const result = await createApplication(data);

      if (result.success && result.data) {
        toast.success('Application created successfully!');
        form.reset();
        onOpenChange(false);
        
        // Call success callback to refresh the list
        if (onSuccess) {
          onSuccess();
        }
        
        // Redirect to the dashboard with the new application
        router.push(`/dashboard?application=${result.data.id}`);
      } else {
        toast.error(result.error || 'Failed to create application');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form when dialog closes
  React.useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open, form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Create New Resumé</DialogTitle>
          <DialogDescription>
            Enter the job details to start creating your tailored resumé.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <ScrollArea className="max-h-[calc(90vh-200px)] px-6">
            <div className="space-y-4 pb-4">
              {/* Company Field */}
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  placeholder="e.g., Google, Microsoft, Startup Inc."
                  {...form.register('company')}
                  disabled={isSubmitting}
                />
                {form.formState.errors.company && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.company.message}
                  </p>
                )}
              </div>

              {/* Role Field */}
              <div className="space-y-2">
                <Label htmlFor="role">Role / Position</Label>
                <Input
                  id="role"
                  placeholder="e.g., Senior Software Engineer, Product Manager"
                  {...form.register('role')}
                  disabled={isSubmitting}
                />
                {form.formState.errors.role && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.role.message}
                  </p>
                )}
              </div>

              {/* Job Description Field */}
              <div className="space-y-2">
                <Label htmlFor="jobDescription">Job Description</Label>
                <Textarea
                  id="jobDescription"
                  placeholder="Paste the full job posting here..."
                  rows={12}
                  className="resize-none font-mono text-xs"
                  {...form.register('jobDescription')}
                  disabled={isSubmitting}
                />
                {form.formState.errors.jobDescription && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.jobDescription.message}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  Paste the complete job description including requirements, responsibilities, and qualifications.
                </p>
              </div>
            </div>
          </ScrollArea>

          <DialogFooter className="px-6 py-4 border-t bg-background">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create & Start Chat'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

