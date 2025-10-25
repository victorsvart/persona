'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
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
import {
  Building2,
  Briefcase,
  Calendar,
  Copy,
  Check,
  Edit,
  Save,
  X,
  FileText,
} from 'lucide-react';
import { UserApplications } from '@/prisma/generated/prisma';
import {
  applicationSchema,
  ApplicationValues,
} from '@/types/forms/application.schema';
import { updateApplication } from '@/app/dashboard/applications/actions';
import { toast } from 'sonner';

interface ApplicationDetailDialogProps {
  application: UserApplications | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApplicationUpdate?: (updatedApplication: UserApplications) => void;
}

// Helper function to format relative time
function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return 'today';
  } else if (diffInDays === 1) {
    return 'yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else {
    const months = Math.floor(diffInDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
}

export const ApplicationDetailDialog: React.FC<
  ApplicationDetailDialogProps
> = ({ application, open, onOpenChange, onApplicationUpdate }) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      company_name: application?.company_name || '',
      role: application?.role || '',
      job_post: application?.job_post || '',
    },
  });

  // Update form when application changes
  React.useEffect(() => {
    if (application) {
      form.reset({
        company_name: application.company_name,
        role: application.role,
        job_post: application.job_post,
      });
    }
  }, [application, form]);

  const handleCopyJobPost = async () => {
    if (!application?.job_post) return;

    try {
      await navigator.clipboard.writeText(application.job_post);
      setCopied(true);
      toast.success('Job post copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy job post');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    form.reset({
      company_name: application?.company_name || '',
      role: application?.role || '',
      job_post: application?.job_post || '',
    });
  };

  const handleSave = async (data: ApplicationValues) => {
    if (!application) return;
    
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('company_name', data.company_name);
      formData.append('role', data.role);
      formData.append('job_post', data.job_post);

      const result = await updateApplication(application.id, formData);
      
      if (result.success) {
        toast.success('Application updated successfully!');
        setIsEditing(false);
        // Update the parent component with the new application data
        onApplicationUpdate?.(result.application);
        // The page will automatically revalidate due to revalidatePath in the action
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
        toast.error('Failed to update application. Please check the form.');
      }
    } catch (error) {
      console.error('Error updating application:', error);
      toast.error('Failed to update application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoToResume = () => {
    // TODO: Navigate to resume page
    console.log('Navigate to resume for application:', application?.id);
    toast.info('Resume feature coming soon!');
  };

  if (!application) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="p-3">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary" />
                {isEditing ? 'Edit Application' : application.company_name}
              </DialogTitle>
              <DialogDescription className="text-lg mt-2 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                {isEditing
                  ? 'Update your application details'
                  : application.role}
              </DialogDescription>
            </div>
            <div className="flex items-center gap-2">
              {!isEditing && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleEdit}
                  className="flex items-center gap-2"
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {isEditing ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSave)}
                className="space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Edit className="h-5 w-5" />
                      Edit Application Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="company_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Google, Microsoft"
                                {...field}
                              />
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
                            <FormLabel>Job Role</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Software Engineer"
                                {...field}
                              />
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
                          <FormLabel>Job Post Content</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Paste the job posting content here..."
                              className="min-h-[200px] resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Copy and paste the complete job posting content for
                            reference.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
                <div className="flex justify-end gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancelEdit}
                    disabled={isSubmitting}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Save className="h-4 w-4" />
                        Save Changes
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          ) : (
            <>
              {/* Application Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Application Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Company
                      </p>
                      <p className="text-lg">{application.company_name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Position
                      </p>
                      <p className="text-lg">{application.role}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Applied
                      </p>
                      <p className="text-lg">
                        {formatRelativeTime(new Date(application.createdAt))}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Application ID
                      </p>
                      <p className="text-sm font-mono text-muted-foreground">
                        {application.id}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Job Post Content Card */}
          {application.job_post && !isEditing && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Job Posting Content
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyJobPost}
                    className="flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-foreground font-sans">
                    {application.job_post}
                  </pre>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Go to Resume Button */}
          {!isEditing && (
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Ready to Apply?</h3>
                      <p className="text-sm text-muted-foreground">
                        Generate a tailored resume for this application
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={handleGoToResume}
                    className="flex items-center gap-2"
                    size="lg"
                  >
                    <FileText className="h-4 w-4" />
                    Go to Resumé
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
