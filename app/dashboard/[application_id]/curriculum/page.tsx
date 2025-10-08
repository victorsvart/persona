'use server';

import { CurriculumHeader } from '@/components/curriculum-header';

export default async function CurriculumPage({
  params,
}: {
  params: { application_id: string };
}) {
  const info = await params;
  // const companyInfo = await getapplication
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <CurriculumHeader />
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
}
