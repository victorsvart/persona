'use server';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ApplicationForm } from '@/components/application-form';
import { getUser, getUserApplications } from '../actions';
import { redirect } from 'next/navigation';
import { OnboardSteps } from '@/components/onboard-steps';

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
          <CardTitle>Hey, {user.name.split(' ')[0]} 👋</CardTitle>
          <p className="text-muted-foreground mt-2">
            Let&apos;s get started by setting up some of your professional
            information.
          </p>
        </CardHeader>
        <CardContent>
          <OnboardSteps user_id={user.id} />
          {/* <ApplicationForm isOnboard={true} /> */}
        </CardContent>
      </Card>
    </div>
  );
}
