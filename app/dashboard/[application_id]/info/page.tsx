'use server';

import { ReactElement } from 'react';
import { getApplicationById } from '../../actions';
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
  const application = await getApplicationById(application_id);

  if (!application) {
    return <>Application not found</>;
  }

  return (
    <Card>
      <CardHeader>Application Info</CardHeader>
      <CardDescription>Edit this application</CardDescription>
      <CardContent>
        <ApplicationForm application={application} />
      </CardContent>
    </Card>
  );
}
