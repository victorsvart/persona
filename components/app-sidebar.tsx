'use client';

import * as React from 'react';
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
} from 'lucide-react';

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
import { User } from '@/lib/generated/prisma';

// This is sample data.
const data = {
  applications: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      role: 'Software Engineer',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      role: 'Software Engineer II',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      role: 'Software Engineer III',
    },
  ],
  projects: [
    {
      name: 'Your Curriculum',
      url: '/dashboard/curriculum',
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

type Props = {
  user: User;
} & React.ComponentProps<typeof Sidebar>;

export function AppSidebar({ user, ...props }: Props) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ApplicationSwitcher teams={data.applications} />
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
