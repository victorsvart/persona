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

export const AppBreadcrumbs = (): ReactElement => {
  const pathname = usePathname();
  const { company_name, loading: companyLoading } = useCompany();
  const [paths, setPaths] = useState<string[]>([]);
  const [visible, setVisible] = useState(!companyLoading);

  useEffect(() => {
    if (!pathname) return;
    const segments = pathname.split('/').filter(Boolean);
    setPaths(segments);
  }, [pathname, company_name]);

  // deals with the visibility of the the breadcrumbs. Timeout so it fades in really cool
  useEffect(() => {
    if (!companyLoading) {
      const t = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [companyLoading]);

  if (pathname === '/dashboard/onboard' || pathname === '/dashboard') {
    return <></>;
  }

  const loadingFallback = (): ReactElement => {
    const skeletonWidths = [48, 64, 80];
    return (
      <Breadcrumb className="flex gap-1 items-center text-sm">
        <BreadcrumbList className="flex items-center gap-1">
          {skeletonWidths.map((width, idx) => (
            <BreadcrumbItem key={idx} className="flex items-center gap-1">
              <BreadcrumbSeparator hidden={idx === 0} />
              <span
                aria-hidden="true"
                className="inline-block h-4 bg-gray-200 rounded animate-pulse"
                style={{ width }}
              />
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    );
  };

  const formatName = (segment: string, index: number) => {
    if (index === 1 && company_name) return company_name;
    return segment
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ');
  };

  if (companyLoading) {
    return loadingFallback();
  }

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Breadcrumb className="flex gap-1 items-center text-sm">
        <BreadcrumbList className="flex items-center gap-1">
          {paths.map((segment, idx) => {
            const href = '/' + paths.slice(0, idx + 1).join('/');
            return (
              <BreadcrumbItem key={idx} className="flex items-center gap-1">
                <BreadcrumbSeparator hidden={idx === 0} />
                <BreadcrumbLink href={idx === 0 ? '/dashboard' : href}>
                  {formatName(segment, idx)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
