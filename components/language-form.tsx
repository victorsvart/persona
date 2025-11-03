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
import { NameProficiencyFields } from '@/components/settings/languages/name-proficiency-fields';
import { createLanguage, updateLanguage } from '@/app/actions/languages';
import { toast } from 'sonner';
import { Language } from '@prisma/client';
import {
  languageSchema,
  LanguageFormValues,
} from '@/lib/types/forms/language.form';

interface LanguageFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language?: Language | null;
}

export function LanguageForm({
  open,
  onOpenChange,
  language,
}: LanguageFormProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const isEditing = !!language;

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const form = useForm<LanguageFormValues>({
    resolver: zodResolver(languageSchema),
    defaultValues: {
      name: language?.name || '',
      proficiency: (language?.proficiency as any) || 'Intermediate',
    },
  });

  // Reset form when language changes
  React.useEffect(() => {
    if (language) {
      // Editing mode - populate form
      form.reset({
        name: language.name,
        proficiency: (language.proficiency as any) || 'Intermediate',
      });
    } else {
      // Create mode - reset to empty
      form.reset({
        name: '',
        proficiency: 'Intermediate',
      });
    }
  }, [language, form]);

  const onSubmit = async (data: LanguageFormValues) => {
    try {
      // Call server action (create or update)
      const result = isEditing && language
        ? await updateLanguage(language.id, data)
        : await createLanguage(data);

      if (result.success) {
        toast.success(
          isEditing
            ? 'Language updated successfully!'
            : 'Language saved successfully!'
        );
        // Reset form
        form.reset();
        onOpenChange(false);
      } else {
        toast.error(result.error || 'Failed to save language');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  const fillDemoData = () => {
    form.setValue('name', 'Spanish');
    form.setValue('proficiency', 'Fluent');
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
                {isEditing ? 'Edit Language' : 'Add Language'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isEditing
                  ? 'Update language proficiency'
                  : 'Add a language to your profile'}
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
                  <NameProficiencyFields form={form} />
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
                  {isEditing ? 'Update Language' : 'Save Language'}
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
            {isEditing ? 'Edit Language' : 'Add Language'}
          </DrawerTitle>
          <DrawerDescription>
            {isEditing
              ? 'Update language proficiency'
              : 'Add a language to your profile'}
          </DrawerDescription>
        </DrawerHeader>

        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <NameProficiencyFields form={form} />
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
                {isEditing ? 'Update Language' : 'Save Language'}
              </Button>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

