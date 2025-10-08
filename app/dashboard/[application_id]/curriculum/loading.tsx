import { Skeleton } from '@/components/ui/skeleton';
import { ReactElement } from 'react';

export default function LoadingCurriculumPage(): ReactElement {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="h-8 w-48 rounded-md bg-muted/50" />{' '}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="rounded-xl shadow-md p-4 flex flex-col gap-3 bg-muted/30">
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-16 w-full mt-2" />
          <div className="border-t pt-3 space-y-2">
            <Skeleton className="h-3 w-2/3" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <div className="mt-auto flex justify-end">
            <Skeleton className="h-4 w-20" />
          </div>
        </div>

        {/* Placeholder cards */}
        <Skeleton className="aspect-video rounded-xl" />
        <Skeleton className="aspect-video rounded-xl" />
      </div>
      <Skeleton className="min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
}
