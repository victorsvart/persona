'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchemaValues } from '@/types/forms/login.schema';
import { signIn } from '@/app/login/actions';
import { Toaster } from './ui/sonner';
import { toast } from 'sonner';
import { ThreeDotLoad } from './ui/three-dot-load';
import { OrigamiIcon } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/language-switcher';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const t = useTranslations('auth.login');
  const tCommon = useTranslations('common');
  
  const form = useForm<LoginSchemaValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginSchemaValues) => {
    const error = await signIn(data);
    if (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Toaster position="bottom-center" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-rose-500 flex items-center justify-center rounded-md p-1">
            <OrigamiIcon className="text-black" />
          </div>
          <span className="text-rose-500 font-semibold">{tCommon('appName')}</span>
        </div>
        <LanguageSwitcher variant="ghost" size="sm" />
      </div>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form
              id="login-form"
              className="p-6 md:p-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="text-2xl font-bold">{t('title')}</h1>
                  <p className="text-muted-foreground text-balance">
                    {t('subtitle')}
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('username')}</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder={t('usernamePlaceholder')} {...field} />
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
                      <div className="flex items-center">
                        <FormLabel>{t('password')}</FormLabel>
                        <a
                          href="#"
                          className="ml-auto text-sm underline-offset-2 hover:underline"
                        >
                          {t('forgotPassword')}
                        </a>
                      </div>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Field>
                  <Button
                    type="submit"
                    className={cn(
                      form.formState.isSubmitting
                        ? 'pointer-events-none cursor-not-allowed'
                        : '',
                    )}
                  >
                    {form.formState.isSubmitting ? <ThreeDotLoad /> : t('signIn')}
                  </Button>
                </Field>

                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                  {t('orContinueWith')}
                </FieldSeparator>

                <Field className="grid grid-cols-2 gap-4">
                  <Button variant="outline" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="sr-only">{t('loginWithGoogle')}</span>
                  </Button>
                  <Button variant="outline" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="sr-only">{t('loginWithMeta')}</span>
                  </Button>
                </Field>

                <FieldDescription className="text-center">
                  {t('noAccount')} <Link href="/signup">{t('signUp')}</Link>
                </FieldDescription>
              </FieldGroup>
            </form>
          </Form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src="/login-image.jpg"
              alt="Image"
              fill
              className="object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        {t.rich('agreement', {
          termsOfService: (chunks) => <a href="#">{tCommon('termsOfService')}</a>,
          privacyPolicy: (chunks) => <a href="#">{tCommon('privacyPolicy')}</a>,
        })}
      </FieldDescription>
    </div>
  );
}
