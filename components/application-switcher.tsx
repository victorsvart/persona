'use client';

import * as React from 'react';
import { ChevronsUpDown, Building2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { useCompany } from '@/providers/company-provider';
import { ApplicationForm } from '@/components/application-form';
import { useEffect } from 'react';

type Application = {
  id: string;
  company_name: string;
  role: string;
};

export function ApplicationSwitcher({
  applications,
  loading,
}: {
  applications: Application[];
  loading?: boolean; // optional prop to indicate loading
}) {
  const pathname = usePathname();
  const router = useRouter();
  const {
    setCompanyName,
    setApplicationId,
    loading: companyLoading,
    setLoading: setCompanyLoading,
  } = useCompany();
  const { isMobile } = useSidebar();
  const [activeApplication, setActiveApplication] =
    React.useState<Application | null>(null);

  useEffect(() => {
    if (applications.length > 0) {
      const currentAppId = pathname.split('/')[2]; // extract app ID from URL
      const app =
        applications.find((app) => app.id === currentAppId) || applications[0];

      setActiveApplication(app);
      setCompanyName(app.company_name);
      setApplicationId(app.id);
      setCompanyLoading(false);
    }
  }, [applications, pathname, setCompanyName, setApplicationId]);

  const handleApplicationSelect = (application: Application) => {
    setActiveApplication(application);
    setCompanyName(application.company_name);
    setApplicationId(application.id);
    router.push(`/dashboard/${application.id}/curriculum`);
  };

  // Skeleton for loading state
  if (loading || companyLoading) {
    return (
      <SidebarMenu>
        <SidebarMenuItem key="loading">
          <SidebarMenuButton
            size="lg"
            className="flex items-center gap-2 p-2 cursor-not-allowed"
          >
            <div className="bg-gray-200 animate-pulse flex aspect-square size-8 items-center justify-center rounded-lg">
              <Building2 className="size-4 text-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  if (pathname === '/dashboard/onboard' || pathname === '/dashboard') {
    return <></>;
  }

  if (applications.length === 0) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
            <Building2 className="size-4" />
            <span>No applications yet</span>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  if (!activeApplication) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Building2 className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {activeApplication.company_name}
                </span>
                <span className="truncate text-xs">
                  {activeApplication.role}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Applications
            </DropdownMenuLabel>
            {applications.map((application, index) => (
              <DropdownMenuItem
                key={application.id}
                onClick={() => handleApplicationSelect(application)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <Building2 className="size-3.5 shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span>{application.company_name}</span>
                  <span className="text-gray-500">{application.role}</span>
                </div>
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <div className="p-2">
              <ApplicationForm />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
