'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserProfessionalInfo } from './actions';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ProfessionalSummaryForm } from '@/components/professional-summary-form';

export default async function ProfessionalSummaryPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect('/login');
  }

  const { user } = session;
  const userExperienceInfo = await getUserProfessionalInfo(user.id);
  return (
    <div className="flex">
      <Card>
        <CardHeader>Your professional summary</CardHeader>
        <CardContent>
          <ProfessionalSummaryForm summary={userExperienceInfo?.summary} />
        </CardContent>
      </Card>
    </div>
  );
}
