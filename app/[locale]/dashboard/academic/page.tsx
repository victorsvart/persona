'use server';

import { auth } from '@/lib/auth';
import { LOGIN_PAGE_URL, PROFESSIONAL_SUMMARY_URL } from '@/lib/helpers';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAcademicInfo } from './actions';
import { Card } from '@/components/ui/card';
import { GraduationCap, CheckCircle, Lightbulb } from 'lucide-react';
import { AcademicForm } from '@/components/academic-form';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function AcademicPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  const { user } = session;
  const userAcademicInfo = await getAcademicInfo(user.id);
  const t = await getTranslations('dashboard.academic');
  const hasAcademics = userAcademicInfo && userAcademicInfo.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 px-4">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold">{t('pageTitle')}</h1>
              <p className="text-muted-foreground mt-2">{t('pageSubtitle')}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-muted-foreground">
                  {t('totalEducation')}
                </div>
                <div className="text-2xl font-bold">
                  {userAcademicInfo?.length || 0}
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                {hasAcademics ? (
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                ) : (
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                )}
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Navigation Cards */}
            <div className="lg:col-span-1 space-y-4">
              {/* Profile Section Card */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {t('profileSections')}
                </h3>
                <div
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    hasAcademics
                      ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        hasAcademics
                          ? 'bg-green-100 dark:bg-green-800'
                          : 'bg-muted'
                      }`}
                    >
                      <GraduationCap
                        className={`h-5 w-5 ${
                          hasAcademics
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{t('education')}</div>
                      <div className="text-sm text-muted-foreground">
                        {hasAcademics ? t('complete') : t('inProgress')}
                      </div>
                    </div>
                    {hasAcademics && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </div>
              </Card>

              {/* Quick Stats Card */}
              <Card className="p-6 bg-muted/50">
                <h3 className="text-lg font-semibold mb-4">
                  {t('quickStats')}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t('totalEducation')}
                    </span>
                    <span className="font-bold">
                      {userAcademicInfo?.length || 0}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t('status')}
                    </span>
                    <span
                      className={`font-bold ${
                        hasAcademics
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-yellow-600 dark:text-yellow-400'
                      }`}
                    >
                      {hasAcademics ? t('complete') : t('incomplete')}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Improved Tip Card */}
              <Card className="p-6 bg-linear-to-br from-primary/10 to-background border border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/20">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-primary">
                      {t('tip')}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('tipMessage') ||
                        'Once you finish adding your education, move on to build your professional summary to strengthen your profile.'}
                    </p>
                    <Button asChild className="mt-2 w-full sm:w-auto">
                      <Link href={PROFESSIONAL_SUMMARY_URL}>
                        {t('goToSummary') || 'Go to Professional Summary'}
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Academic Form */}
            <div className="lg:col-span-2">
              <AcademicForm academicFields={userAcademicInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
