'use client';

import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  applicationSchema,
  ApplicationSchemaValues,
} from '@/lib/zod/application.schema';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { createApplication, updateApplication } from '@/app/dashboard/actions';
import { Application } from '@/prisma/lib/generated/prisma';
import { toast } from 'sonner';
import { Toaster } from './ui/sonner';

type Props = {
  isOnboard?: boolean;
  application?: Application;
};

export const ApplicationForm = ({
  isOnboard = false,
  application,
}: Props): ReactElement => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const form = useForm<ApplicationSchemaValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      company_name: application?.company_name ?? '',
      role: application?.role ?? '',
      details: application?.details ?? '',
    },
  });

  const onSubmit = async (values: ApplicationSchemaValues) => {
    const applicationId = application
      ? await updateApplication(values, application.id)
      : await createApplication(values);
    if (!isOnboard) {
      setOpen(false);
      toast.success('Profile updated successfully!');
      return;
    }

    router.push(`/dashboard/${applicationId}/curriculum`);
  };

  const FormContent = () => {
    const submitText = application ? 'Save' : 'Submit';
    return (
      <Form {...form}>
        <Toaster />
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company name</FormLabel>
                <FormControl>
                  <Input placeholder="Google" {...field} />
                </FormControl>
                <FormDescription>
                  The name of the company you applied for.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role being applied for</FormLabel>
                <FormControl>
                  <Input placeholder="Software Engineer" {...field} />
                </FormControl>
                <FormDescription>The role you applied for.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Details</FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full h-32"
                    placeholder="We are looking for a Node.js engineer..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>Additional job details.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="w-full"
          >
            {form.formState.isSubmitting ? 'Saving...' : submitText}
          </Button>
        </form>
      </Form>
    );
  };

  if (isOnboard || application) {
    return FormContent();
  }

  return (
    <>
      <Toaster />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Register Application</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Application</DialogTitle>
          </DialogHeader>
          {FormContent()}
        </DialogContent>
      </Dialog>
    </>
  );
};
