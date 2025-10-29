'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ProfessionalSummaryForm } from '@/components/professional-summary-form';
import { WorkExperienceForm } from '@/components/work-experience-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { FileText, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getTranslations } from 'next-intl/server';
import { getUserProfessionalInfo } from './actions';

export default async function ProfessionalSummaryPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  const { user } = session;
  const userExperienceInfo = await getUserProfessionalInfo(user.id);
  const t = await getTranslations('dashboard.professionalSummary');

  // Calculate completion status
  const hasSummary =
    userExperienceInfo.summary && userExperienceInfo.summary.length >= 50;
  const hasExperiences =
    userExperienceInfo.experiences && userExperienceInfo.experiences.length > 0;
  const summaryProgress = hasSummary
    ? 100
    : ((userExperienceInfo.summary?.length || 0) / 50) * 100;
  const experienceProgress = hasExperiences ? 100 : 0;

  const tabs = [
    {
      key: 'summary',
      label: t('professionalSummary'),
      icon: FileText,
      content: (
        <ProfessionalSummaryForm
          summary={userExperienceInfo.summary}
          experience_years={userExperienceInfo.experience_years}
        />
      ),
      completed: hasSummary,
    },
    {
      key: 'experience',
      label: t('professionalExperience'),
      icon: Briefcase,
      content: (
        <WorkExperienceForm experienceFields={userExperienceInfo.experiences} />
      ),
      completed: hasExperiences,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 px-4">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">{t('pageTitle')}</h1>
              <p className="text-muted-foreground mt-2">{t('pageSubtitle')}</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-muted-foreground">
                  {t('profileCompletion')}
                </div>
                <div className="text-2xl font-bold">
                  {Math.round((summaryProgress + experienceProgress) / 2)}%
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                {hasSummary && hasExperiences ? (
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                ) : (
                  <AlertCircle className="h-8 w-8 text-primary-foreground" />
                )}
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Navigation Cards */}
            <div className="lg:col-span-1 space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {t('profileSections')}
                </h3>
                <div className="space-y-3">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <div
                        key={tab.key}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          tab.completed
                            ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${
                              tab.completed
                                ? 'bg-green-100 dark:bg-green-800'
                                : 'bg-muted'
                            }`}
                          >
                            <Icon
                              className={`h-5 w-5 ${
                                tab.completed
                                  ? 'text-green-600 dark:text-green-400'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{tab.label}</div>
                            <div className="text-sm text-muted-foreground">
                              {tab.completed ? t('complete') : t('inProgress')}
                            </div>
                          </div>
                          {tab.completed && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Quick Stats Card */}
              <Card className="p-6 bg-muted/50">
                <h3 className="text-lg font-semibold mb-4">
                  {t('quickStats')}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t('yearsOfExperience')}
                    </span>
                    <span className="font-bold">
                      {userExperienceInfo.experience_years || 0}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t('workExperiences')}
                    </span>
                    <span className="font-bold">
                      {userExperienceInfo.experiences?.length || 0}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t('summaryLength')}
                    </span>
                    <span className="font-bold">
                      {userExperienceInfo.summary?.length || 0} {t('chars')}
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="summary" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <TabsTrigger
                        key={tab.key}
                        value={tab.key}
                        className="flex items-center gap-2"
                      >
                        <Icon className="h-4 w-4" />
                        {tab.label}
                        {tab.completed && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {tabs.map((tab) => (
                  <TabsContent key={tab.key} value={tab.key} className="mt-0">
                    {tab.content}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Profile Completion Card - Redesigned */}
      <div className="fixed bottom-6 right-6 z-50">
        <Card className="p-4 w-72 shadow-xl">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{t('progress')}</h3>
              <div className="flex items-center gap-1">
                {hasSummary && hasExperiences ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                )}
                <span className="text-xs font-medium text-muted-foreground">
                  {hasSummary && hasExperiences
                    ? t('complete')
                    : t('inProgress')}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    {t('summary')}
                  </span>
                  <Badge
                    variant={hasSummary ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {Math.round(summaryProgress)}%
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div
                    className="bg-primary h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(summaryProgress, 100)}%` }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    {t('experience')}
                  </span>
                  <Badge
                    variant={hasExperiences ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {userExperienceInfo.experiences?.length || 0}
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div
                    className="bg-primary h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${experienceProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
