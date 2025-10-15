'use server';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getUser, getUserApplications } from '../actions';
import { redirect } from 'next/navigation';
import { ApplicationForm } from '@/components/application-form';

export default async function CreateApplicationPage() {
  const user = await getUser();
  const applications = await getUserApplications(user.id);

  // If user already has applications, redirect to the first one
  if (applications.length > 0) {
    redirect(`/dashboard/${applications[0].id}/curriculum`);
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center p-4">
      <Card className="max-w-lg w-full">
        <CardHeader>
          <CardTitle>Create Your First Application 🚀</CardTitle>
          <p className="text-muted-foreground mt-2">
            Now that your profile is set up, let&apos;s create your first job application.
          </p>
        </CardHeader>
        <CardContent>
          <ApplicationForm isOnboard={true} />
        </CardContent>
      </Card>
    </div>
  );
}
