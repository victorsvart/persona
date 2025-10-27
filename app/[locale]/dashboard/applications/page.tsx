import { Card, CardContent } from '@/components/ui/card';
import { getApplications } from './actions';
import { CreateApplicationDialog } from '@/components/create-application';
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from '@/components/ui/empty';
import { Plus } from 'lucide-react';
import { ApplicationPageClient } from './application-page-client';
import { getTranslations } from 'next-intl/server';

export default async function ApplicationPage() {
  const apps = await getApplications();
  const t = await getTranslations('dashboard.applications');

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{t('title')}</h1>
          <p className="text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        <CreateApplicationDialog />
      </div>

      {apps.length === 0 ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <Plus />
                  </EmptyMedia>
                  <EmptyTitle>{t('noApplicationsYet')}</EmptyTitle>
                  <EmptyDescription>
                    {t('noApplicationsDescription')}
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <CreateApplicationDialog />
                </EmptyContent>
              </Empty>
            </CardContent>
          </Card>
        </div>
      ) : (
        <ApplicationPageClient applications={apps} />
      )}
    </div>
  );
}
