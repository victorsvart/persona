import { notFound } from 'next/navigation';
import { getApplicationById } from '../actions';
import { ResumePageClient } from './resume-page-client';


interface ResumePageProps {
  params: {
    id: string;
  };
}

export default async function ResumePage({ params }: ResumePageProps) {
  const application = await getApplicationById(params.id);

  if (!application) {
    notFound();
  }

  return <ResumePageClient application={application} />;
}
