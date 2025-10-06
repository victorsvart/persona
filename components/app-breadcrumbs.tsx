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
import { useCompany } from '@/providers/company-provider';
import { getApplicationById } from '@/app/dashboard/actions';

export const AppBreadcrumbs = (): ReactElement => {
  // this whole component is a mess. i hate it. i loathe it.
  // looks like shit on mobile and the code is horrible in general.
  //
  // consider simply not render on mobile.
  const pathname = usePathname();
  const { company_name } = useCompany();
  const [applicationName, setApplicationName] = useState<string>('');
  const [paths, setPaths] = useState<string[]>([]);

  if (pathname === '/dashboard/onboard' || pathname === '/dashboard') {
    return <></>;
  }

  useEffect(() => {
    if (!pathname) return;
    const segments = pathname.split('/').filter(Boolean);
    setPaths(segments);

    // digging through the URL like a archaeologist. i hate this.
    const appIdMatch = pathname.match(/\/dashboard\/([^\/]+)\//);
    if (appIdMatch && !company_name) {
      const appId = appIdMatch[1];
      getApplicationById(appId)
        .then((app) => {
          if (app) {
            setApplicationName(app.company_name);
          }
        })
        .catch(console.error);
    }
  }, [pathname, company_name]);

  const formatName = (segment: string, index: number) => {
    //TODO: should replace the uuid with the company name, doesn't do it. fuck me.
    if (
      index === 2 &&
      segment.match(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
      )
    ) {
      const name = company_name || applicationName;
      if (name) {
        return name;
      }
      return 'Loading...'; //TODO: should replace this with loading fallback....
    }

    return segment
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ');
  };

  return (
    <Breadcrumb className="flex gap-1 items-center text-sm">
      <BreadcrumbList className="flex items-center gap-1">
        {paths.map((segment, idx) => {
          const href = '/' + paths.slice(0, idx + 1).join('/');
          return (
            <BreadcrumbItem key={idx} className="flex items-center gap-1">
              <BreadcrumbSeparator hidden={idx === 0} />
              <BreadcrumbLink href={idx === 0 ? '/dashboard/curriculum' : href}>
                {formatName(segment, idx)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
