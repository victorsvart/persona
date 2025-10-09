'use server';

import { ReactElement } from 'react';
import { getApplicationByIdFromCache } from '../../actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { ApplicationForm } from '@/components/application-form';

export default async function ApplicationInfo({
  params,
}: {
  params: { application_id: string };
}): Promise<ReactElement> {
  const { application_id } = await params;
  const application = await getApplicationByIdFromCache(application_id);

  if (!application) {
    return <>Application not found</>;
  }

  return (
    <div className="flex w-full min-h-screen justify-center items-center overflow-hidden">
      <Card className="w-96">
        <CardHeader>
          Application Info
          <CardDescription>Edit this application</CardDescription>
        </CardHeader>
        <CardContent>
          <ApplicationForm application={application} />
        </CardContent>
      </Card>
    </div>
  );
}
