'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import OnboardForm from '@/components/onboard-form';

export default async function OnboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  const name = session.user.name?.split(' ')[0] || 'there';

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-rose-500">Welcome, {name}!</h1>
        <p className="text-muted-foreground mt-2">
          Let's build your professional profile to create targeted resumes for job applications
        </p>
      </div>
      <OnboardForm />
    </div>
  );
}
