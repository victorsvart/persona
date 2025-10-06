'use client';

import { ReactElement, useEffect, useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

export const AppBreadcrumbs = (): ReactElement => {
  const pathname = usePathname();
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    if (!pathname) return;
    const segments = pathname.split('/').filter(Boolean);
    setPaths(segments);
  }, [pathname]);

  const formatName = (segment: string) =>
    segment
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ');

  return (
    <Breadcrumb className="flex gap-1 items-center text-sm">
      <BreadcrumbList className="flex items-center gap-1">
        {paths.map((segment, idx) => {
          const href = '/' + paths.slice(0, idx + 1).join('/');
          return (
            <BreadcrumbItem key={idx} className="flex items-center gap-1">
              <BreadcrumbSeparator hidden={idx === 0} />
              <BreadcrumbLink href={href}>{formatName(segment)}</BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
