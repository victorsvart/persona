'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { updateProfile, getProfile } from '@/app/actions/profile';

const profileSchema = z.object({
  phone: z.string().optional(),
  location: z.string().optional(),
  linkedinUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  githubUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  portfolioUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export function ProfileForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(true);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      phone: '',
      location: '',
      linkedinUrl: '',
      githubUrl: '',
      portfolioUrl: '',
    },
  });

  // Load existing profile data
  React.useEffect(() => {
    const loadProfile = async () => {
      setIsFetching(true);
      const result = await getProfile();
      if (result.success && result.data) {
        form.reset({
          phone: result.data.phone || '',
          location: result.data.location || '',
          linkedinUrl: result.data.linkedinUrl || '',
          githubUrl: result.data.githubUrl || '',
          portfolioUrl: result.data.portfolioUrl || '',
        });
      }
      setIsFetching(false);
    };
    loadProfile();
  }, [form]);

  const onSubmit = async (data: ProfileFormValues) => {
    setIsLoading(true);
    console.log('Submitting profile data:', data);
    try {
      const result = await updateProfile({
        phone: data.phone || null,
        location: data.location || null,
        linkedinUrl: data.linkedinUrl || null,
        githubUrl: data.githubUrl || null,
        portfolioUrl: data.portfolioUrl || null,
      });

      console.log('Profile update result:', result);

      if (result.success) {
        toast.success('Profile updated successfully!');
      } else {
        toast.error(result.error || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error submitting profile:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            {...form.register('phone')}
            disabled={isLoading}
          />
          {form.formState.errors.phone && (
            <p className="text-sm text-destructive">
              {form.formState.errors.phone.message}
            </p>
          )}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="San Francisco, CA"
            {...form.register('location')}
            disabled={isLoading}
          />
          {form.formState.errors.location && (
            <p className="text-sm text-destructive">
              {form.formState.errors.location.message}
            </p>
          )}
        </div>

        {/* LinkedIn */}
        <div className="space-y-2">
          <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
          <Input
            id="linkedinUrl"
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
            {...form.register('linkedinUrl')}
            disabled={isLoading}
          />
          {form.formState.errors.linkedinUrl && (
            <p className="text-sm text-destructive">
              {form.formState.errors.linkedinUrl.message}
            </p>
          )}
        </div>

        {/* GitHub */}
        <div className="space-y-2">
          <Label htmlFor="githubUrl">GitHub URL</Label>
          <Input
            id="githubUrl"
            type="url"
            placeholder="https://github.com/yourusername"
            {...form.register('githubUrl')}
            disabled={isLoading}
          />
          {form.formState.errors.githubUrl && (
            <p className="text-sm text-destructive">
              {form.formState.errors.githubUrl.message}
            </p>
          )}
        </div>

        {/* Portfolio */}
        <div className="space-y-2">
          <Label htmlFor="portfolioUrl">Portfolio / Website URL</Label>
          <Input
            id="portfolioUrl"
            type="url"
            placeholder="https://yourwebsite.com"
            {...form.register('portfolioUrl')}
            disabled={isLoading}
          />
          {form.formState.errors.portfolioUrl && (
            <p className="text-sm text-destructive">
              {form.formState.errors.portfolioUrl.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            'Save Changes'
          )}
        </Button>
      </div>
    </form>
  );
}

