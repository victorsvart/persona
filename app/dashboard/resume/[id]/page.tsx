import { notFound } from 'next/navigation';
import { getApplicationById } from '../actions';
import { ResumePageClient } from './resume-page-client';
import { UserApplications, UserResume } from '@/prisma/generated/prisma';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume Builder',
  description: 'Create and customize your AI-powered resume tailored for specific job applications.',
  robots: {
    index: false,
    follow: false,
  },
};


interface ResumePageProps {
  params: {
    id: string;
  };
}

export default async function ResumePage({ params }: ResumePageProps) {
  const application = await getApplicationById(await params.id);

  if (!application) {
    notFound();
  }

  return <ResumePageClient application={application as UserApplications & { resumes: UserResume[] }} />;
}
