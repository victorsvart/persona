'use server';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ApplicationForm } from '@/components/application-form';
import { getUser, getUserApplications } from '../actions';
import { redirect } from 'next/navigation';

export default async function OnboardPage() {
  // Check if user already has applications
  const user = await getUser();
  const applications = await getUserApplications(user.id);

  // If user has applications, redirect to the first one
  if (applications.length > 0) {
    redirect(`/dashboard/${applications[0].id}/curriculum`);
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center p-4">
      <Card className="max-w-lg w-full">
        <CardHeader>
          <CardTitle>Welcome 👋</CardTitle>
          <p className="text-muted-foreground mt-2">
            Let&apos;s get started by registering your first job application.
          </p>
        </CardHeader>
        <CardContent>
          <ApplicationForm isOnboard={true} />
        </CardContent>
      </Card>
    </div>
  );
}
