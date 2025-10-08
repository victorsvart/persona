'use client';

import { accountSchema, AccountSchemaValues } from '@/lib/zod/account.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
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
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { ChangeProfilePic } from './change-profile-pic';
import { saveUser } from '@/app/dashboard/account/actions';
import { Toaster } from './ui/sonner';
import { toast } from 'sonner';
import { User } from '@/prisma/lib/generated/prisma';

type Props = {
  user: User;
};

export const AccountForm = ({ user }: Props): ReactElement => {
  const form = useForm<AccountSchemaValues>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: user.name,
      username: user.username as string,
      email: user.email,
    },
  });

  const handleSave = async (form: AccountSchemaValues) => {
    await saveUser(form);
    toast.success('Profile updated successfully!');
  };

  return (
    <div className="space-y-6">
      <Toaster position="bottom-center" />

      <div className="flex items-center gap-4 p-4 rounded-lg border bg-muted/30">
        <Avatar className="h-16 w-16 rounded-xl ring-2 ring-background">
          <AvatarImage src={user.image ?? undefined} alt={user.name} />
          <AvatarFallback className="rounded-xl text-lg font-semibold">
            {user.name
              .split(' ')
              .map((s) => s[0])
              .join('')
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{user.name}</h3>
          <p className="text-sm text-muted-foreground">@{user.username}</p>
          <ChangeProfilePic currentUserImage={user.image} />
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSave)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" className="h-11" {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">
                    This is your display name across the platform
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe" className="h-11" {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Your unique identifier for login and mentions
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={true}
                    type="email"
                    placeholder="john@example.com"
                    className="h-11"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  We'll use this to send you important updates and notifications
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Save Changes</h4>
              <p className="text-sm text-muted-foreground">
                Update your profile information
              </p>
            </div>
            <Button
              disabled={form.formState.isSubmitting || !form.formState.isValid}
              type="submit"
              className="min-w-[120px]"
            >
              {form.formState.isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
