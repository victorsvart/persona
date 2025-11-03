'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { IconX } from '@tabler/icons-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NameOrganizationFields } from '@/components/settings/certifications/name-organization-fields';
import { DateFields } from '@/components/settings/certifications/date-fields';
import { CredentialFields } from '@/components/settings/certifications/credential-fields';
import { createCertification, updateCertification } from '@/app/actions/certifications';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Certification } from '@prisma/client';
import {
  certificationSchema,
  CertificationFormValues,
} from '@/lib/types/forms/certification.form';

interface CertificationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  certification?: Certification | null;
}

export function CertificationForm({
  open,
  onOpenChange,
  certification,
}: CertificationFormProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const isEditing = !!certification;

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const form = useForm<CertificationFormValues>({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      name: certification?.name || '',
      issuingOrganization: certification?.issuingOrganization || '',
      issueDate: certification?.issueDate 
        ? format(new Date(certification.issueDate), 'yyyy-MM')
        : '',
      expirationDate: certification?.expirationDate 
        ? format(new Date(certification.expirationDate), 'yyyy-MM')
        : '',
      doesNotExpire: certification?.doesNotExpire || false,
      credentialId: certification?.credentialId || '',
      credentialUrl: certification?.credentialUrl || '',
    },
  });

  // Reset form when certification changes
  React.useEffect(() => {
    if (certification) {
      // Editing mode - populate form
      form.reset({
        name: certification.name,
        issuingOrganization: certification.issuingOrganization,
        issueDate: format(new Date(certification.issueDate), 'yyyy-MM'),
        expirationDate: certification.expirationDate 
          ? format(new Date(certification.expirationDate), 'yyyy-MM')
          : '',
        doesNotExpire: certification.doesNotExpire,
        credentialId: certification.credentialId || '',
        credentialUrl: certification.credentialUrl || '',
      });
    } else {
      // Create mode - reset to empty
      form.reset({
        name: '',
        issuingOrganization: '',
        issueDate: '',
        expirationDate: '',
        doesNotExpire: false,
        credentialId: '',
        credentialUrl: '',
      });
    }
  }, [certification, form]);

  const doesNotExpire = form.watch('doesNotExpire');

  const onSubmit = async (data: CertificationFormValues) => {
    try {
      const formData = {
        ...data,
      };

      // Call server action (create or update)
      const result = isEditing && certification
        ? await updateCertification(certification.id, formData)
        : await createCertification(formData);

      if (result.success) {
        toast.success(
          isEditing
            ? 'Certification updated successfully!'
            : 'Certification saved successfully!'
        );
        // Reset form
        form.reset();
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Failed to save certification');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  const fillDemoData = () => {
    form.setValue('name', 'AWS Certified Solutions Architect – Professional');
    form.setValue('issuingOrganization', 'Amazon Web Services (AWS)');
    form.setValue('issueDate', '2023-06');
    form.setValue('expirationDate', '2026-06');
    form.setValue('doesNotExpire', false);
    form.setValue('credentialId', 'AWS-PSA-12345');
    form.setValue('credentialUrl', 'https://aws.amazon.com/verification/12345');
  };

  const isDevelopment = process.env.NODE_ENV === 'development';

  // Desktop version - contained within dialog
  if (!isMobile && open) {
    return (
      <div className="absolute inset-0 z-50 flex items-end bg-black/50 animate-in fade-in">
        <div className="bg-background w-full max-h-[85vh] flex flex-col rounded-t-lg border-t shadow-lg animate-in slide-in-from-bottom duration-300">
          <div className="border-b px-6 py-4 flex items-center justify-between shrink-0">
            <div>
              <h3 className="font-semibold text-lg">
                {isEditing ? 'Edit Certification' : 'Add Certification'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isEditing
                  ? 'Update your certification details'
                  : 'Add a professional certification'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {isDevelopment && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={fillDemoData}
                  className="text-xs"
                >
                  Fill Demo Data
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange(false)}
              >
                <IconX className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormFields form={form} doesNotExpire={doesNotExpire} />
                </form>
              </Form>
            </div>
          </ScrollArea>

          <div className="border-t p-4 shrink-0 bg-background">
            <div className="flex gap-2 justify-between">
              <div>
                {isDevelopment && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={fillDemoData}
                  >
                    Fill Demo Data
                  </Button>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
                <Button onClick={form.handleSubmit(onSubmit)}>
                  {isEditing ? 'Update Certification' : 'Save Certification'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile version - full screen drawer
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="bottom">
      <DrawerContent className="max-h-[90vh] flex flex-col">
        <DrawerHeader className="border-b shrink-0">
          <DrawerTitle>
            {isEditing ? 'Edit Certification' : 'Add Certification'}
          </DrawerTitle>
          <DrawerDescription>
            {isEditing
              ? 'Update your certification details'
              : 'Add a professional certification'}
          </DrawerDescription>
        </DrawerHeader>

        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormFields form={form} doesNotExpire={doesNotExpire} />
              </form>
            </Form>
          </div>
        </ScrollArea>

        <DrawerFooter className="border-t shrink-0 bg-background">
          <div className="flex gap-2 justify-between">
            <div>
              {isDevelopment && (
                <Button variant="secondary" size="sm" onClick={fillDemoData}>
                  Fill Demo Data
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
              <Button onClick={form.handleSubmit(onSubmit)}>
                {isEditing ? 'Update Certification' : 'Save Certification'}
              </Button>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

// Extracted form fields component to avoid duplication
function FormFields({ form, doesNotExpire }: { form: any; doesNotExpire: boolean }) {
  return (
    <>
      <NameOrganizationFields form={form} />
      <DateFields form={form} doesNotExpire={doesNotExpire} />
      <CredentialFields form={form} />
    </>
  );
}

