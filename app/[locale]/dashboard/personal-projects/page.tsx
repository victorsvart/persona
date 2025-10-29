'use server';

import { auth } from '@/lib/auth';
import { LOGIN_PAGE_URL, APPLICATION_PAGE_URL } from '@/lib/helpers';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getPersonalProjects } from './actions';
import { Card } from '@/components/ui/card';
import { FolderGit2, CheckCircle, Lightbulb } from 'lucide-react';
import { PersonalProjectsForm } from '@/components/personal-projects-form';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function PersonalProjectsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_PAGE_URL);
  }

  const { user } = session;
  const personalProjects = await getPersonalProjects(user.id);
  const t = await getTranslations('dashboard.personalProjects');
  const hasPersonalProjects = personalProjects && personalProjects.length > 0;

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
                  {t('totalProjects')}
                </div>
                <div className="text-2xl font-bold">
                  {personalProjects?.length || 0}
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                {hasPersonalProjects ? (
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                ) : (
                  <FolderGit2 className="h-8 w-8 text-primary-foreground" />
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
                    hasPersonalProjects
                      ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        hasPersonalProjects
                          ? 'bg-green-100 dark:bg-green-800'
                          : 'bg-muted'
                      }`}
                    >
                      <FolderGit2
                        className={`h-5 w-5 ${
                          hasPersonalProjects
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{t('projects')}</div>
                      <div className="text-sm text-muted-foreground">
                        {hasPersonalProjects ? t('complete') : t('inProgress')}
                      </div>
                    </div>
                    {hasPersonalProjects && (
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
                      {t('totalProjects')}
                    </span>
                    <span className="font-bold">
                      {personalProjects?.length || 0}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t('status')}
                    </span>
                    <span
                      className={`font-bold ${
                        hasPersonalProjects
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-yellow-600 dark:text-yellow-400'
                      }`}
                    >
                      {hasPersonalProjects ? t('complete') : t('incomplete')}
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Personal Projects Form */}
            <div className="lg:col-span-2">
              <PersonalProjectsForm personalProjects={personalProjects} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
