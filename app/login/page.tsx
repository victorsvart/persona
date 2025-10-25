import { LoginForm } from '@/components/login-form';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Sign in to your Persona account to access your resumes, track job applications, and manage your professional profile.',
  openGraph: {
    title: 'Login to Persona',
    description:
      'Sign in to your Persona account to access your resumes, track job applications, and manage your professional profile.',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect('/');
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
}
