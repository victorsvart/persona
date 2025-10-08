'use server';

import { CurriculumHeader } from '@/components/curriculum-header';
import { getApplicationById } from '../../actions';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

export default async function CurriculumPage({
  params,
}: {
  params: { application_id: string };
}) {
  const application = await getApplicationById(params.application_id);

  if (!application) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-muted-foreground">Application not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <CurriculumHeader />

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card className="flex flex-col justify-between rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">
              {application.company_name}
            </CardTitle>
            <CardDescription>{application.role}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-2 text-sm">
            {application.details && (
              <p className="text-muted-foreground leading-relaxed">
                {application.details}
              </p>
            )}

            <div className="border-t pt-2 space-y-1 text-xs text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">
                  Application ID:
                </span>{' '}
                {application.id}
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            <button className="text-sm font-medium text-primary hover:underline">
              View more →
            </button>
          </CardFooter>
        </Card>

        {/* Placeholder cards */}
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>

      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
}
