'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldDescription, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  registerForm,
  RegisterFormValues,
} from '@/lib/types/forms/register.form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { ThreeDotLoading } from './app-three-dot-loader';
import { toast } from 'sonner';
import { registerUser } from '@/app/signup/actions';

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const router = useRouter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerForm),
    defaultValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'all',
  });

  const submit = async () => {
    const { error } = await registerUser(form.getValues());
    if (error) {
      toast.error(error.message);
      return;
    }

    router.push('/dashboard');
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Join Persona</CardTitle>
          <CardDescription>
            Create your account and start building professional resumés with AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)}>
              <FieldGroup>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
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
                        <Input placeholder="m@example.com" {...field} />
                      </FormControl>
                      <FieldDescription>
                        We&apos;ll use this to contact you. We will not share
                        your email with anyone else.
                      </FieldDescription>
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
                        <Input placeholder="john.doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FieldDescription>
                        Must be at least 8 characters long.
                      </FieldDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FieldDescription>
                        Please confirm your password.
                      </FieldDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Field>
                  <Button
                    disabled={!form.formState.isValid}
                    type="submit"
                    className="w-full"
                  >
                    {form.formState.isSubmitting ? (
                      <ThreeDotLoading />
                    ) : (
                      'Create Account'
                    )}
                  </Button>

                  <FieldDescription className="text-center px-6 mt-2">
                    Already have an account?{' '}
                    <a
                      onClick={() => router.push('/login')}
                      className="cursor-pointer underline"
                    >
                      Sign in
                    </a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
