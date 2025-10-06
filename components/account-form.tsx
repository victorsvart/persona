'use client';

import { User } from '@/lib/generated/prisma';
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
    toast.success('Saved succesfully');
  };

  return (
    <div className="flex flex-col gap-3">
      <Toaster position="bottom-center" />
      <div className="flex flex-row items-center gap-3">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={user.image ?? undefined} alt={user.name} />
          <AvatarFallback className="rounded-lg">
            {user.name.split(' ').map((s) => s[0])}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span>{user.username}</span>
          <ChangeProfilePic currentUserImage={user.image} />{' '}
        </div>
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSave)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>
                  So we can refer to you correctly.
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
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>
                  You'll use this to sign in. Your main identifier inside our
                  application.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="m@example.com" {...field} />
                </FormControl>
                <FormDescription>So we can contact you.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-2 mt-4">
            <Button
              disabled={form.formState.isSubmitting || !form.formState.isValid}
              type="submit"
            >
              {form.formState.isSubmitting ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
