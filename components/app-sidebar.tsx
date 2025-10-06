'use client';

import * as React from 'react';
import { Frame, Map, PieChart } from 'lucide-react';

import { NavOptions } from '@/components/nav-options';
import { NavUser } from '@/components/nav-user';
import { ApplicationSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { User } from '@/prisma/lib/generated/prisma';

const data = {
  projects: [
    {
      name: 'Your Curriculum',
      url: '/dashboard/**/curriculum',
      icon: Frame,
    },
    {
      name: 'Application Info',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Training',
      url: '#',
      icon: Map,
    },
  ],
};

type Application = {
  id: string;
  company_name: string;
  role: string;
};

type Props = {
  user: User;
  applications: Application[];
} & React.ComponentProps<typeof Sidebar>;

export function AppSidebar({ user, applications, ...props }: Props) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ApplicationSwitcher applications={applications} />
      </SidebarHeader>
      <SidebarContent>
        <NavOptions projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
