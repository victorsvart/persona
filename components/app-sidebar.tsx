'use client';

import * as React from 'react';
import {
  IconCamera,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from '@tabler/icons-react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { OrigamiIcon } from 'lucide-react';
import { User } from '@/prisma/generated/prisma';
import { APPLICATION_PAGE_URL, PROFESSIONAL_SUMMARY_URL } from '@/lib/helpers';

const data = {
  navMain: [
    {
      title: 'Applications',
      url: APPLICATION_PAGE_URL,
      icon: IconDashboard,
    },
    {
      title: 'Professional Summary',
      url: PROFESSIONAL_SUMMARY_URL,
      icon: IconListDetails,
    },
    {
      title: 'Personal Projects',
      url: '#',
      icon: IconFolder,
    },
    {
      title: 'Academic',
      url: '#',
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: IconCamera,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: IconFileDescription,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: IconFileAi,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Need help?',
      url: '#',
      icon: IconHelp,
    },
  ],
};

type Props = {
  user: User;
} & React.ComponentProps<typeof Sidebar>;

export function AppSidebar({ ...props }: Props) {
  const { user } = props;
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <span className="bg-rose-500 p-1 text-black rounded-md flex justify-center items-center">
                  <OrigamiIcon className="size-4 sm:size-5" />
                </span>
                <span className="text-rose-500 font-semibold text-sm sm:text-base">Persona</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
