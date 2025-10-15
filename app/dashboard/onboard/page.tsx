'use server';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSummary, getUser, getUserApplications } from '../actions';
import { getOnboardData } from './actions';
import { redirect } from 'next/navigation';
import { OnboardSteps } from '@/components/onboard-steps';
import { prisma } from '@/lib/prisma';

export default async function OnboardPage() {
  const user = await getUser();
  const onboarded = await prisma.onboard.findUnique({
    where: { userId: user.id },
  });

  const applications = await getUserApplications(user.id);
  const summaryInfo = await getSummary(user.id);
  const onboardDataResult = await getOnboardData();

  if (applications.length > 0 && onboarded) {
    redirect(`/dashboard/${applications[0].id}/curriculum`);
  }

  // Handle error case - if getOnboardData returns an error, use empty data
  const onboardData =
    onboardDataResult && 'workExperiences' in onboardDataResult
      ? onboardDataResult
      : {
          workExperiences: [],
          educations: [],
          skills: null,
          certifications: [],
        };

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
          <OnboardSteps
            summary={summaryInfo?.summary}
            onboardData={onboardData}
          />
        </CardContent>
      </Card>
    </div>
  );
}
