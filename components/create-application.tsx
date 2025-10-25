'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, Building2, Briefcase, FileText } from 'lucide-react';
import { Button } from './ui/button';
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
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
import { applicationSchema, ApplicationValues } from '@/types/forms/application.schema';
import { createApplication } from '@/app/dashboard/applications/actions';
import { toast } from 'sonner';

export const CreateApplicationDialog: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      company_name: '',
      role: '',
      job_post: '',
    },
  });

  const onSubmit = async (data: ApplicationValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('company_name', data.company_name);
      formData.append('role', data.role);
      formData.append('job_post', data.job_post);

      const result = await createApplication(formData);
      
      if (result.success) {
        toast.success('Application created successfully!');
        form.reset();
        setOpen(false);
      } else {
        // Handle validation errors
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, messages]) => {
            if (messages && messages.length > 0) {
              form.setError(field as keyof ApplicationValues, {
                message: messages[0],
              });
            }
          });
        }
        toast.error('Failed to create application. Please check the form.');
      }
    } catch (error) {
      console.error('Error creating application:', error);
      toast.error('Failed to create application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const characterCount = form.watch('job_post')?.length || 0;
  const isOverLimit = characterCount > 5000;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          <Plus />
          Create application
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Application</DialogTitle>
          <DialogDescription>
            Add a new job application to track your progress.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Google, Microsoft" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Job Role
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Software Engineer, Product Manager" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="job_post"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Job Post Content
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste the job posting content here..."
                      className="min-h-[200px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <div className="flex justify-between items-center">
                    <FormDescription>
                      Copy and paste the complete job posting content for reference.
                    </FormDescription>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-medium ${isOverLimit ? 'text-destructive' : 'text-muted-foreground'}`}
                      >
                        {characterCount}/5000
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

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || isOverLimit}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    Creating...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Create Application
                  </div>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
