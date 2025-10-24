'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import OnboardForm from '@/components/onboard/onboard-form';

export default async function OnboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  const name = session.user.name?.split(' ')[0] || 'there';

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 sm:mb-4 tracking-tight">
              Welcome, {name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's build your professional profile to create targeted resumes for job applications
            </p>
          </div>
          <OnboardForm />
        </div>
      </div>
    </div>
  );
}
