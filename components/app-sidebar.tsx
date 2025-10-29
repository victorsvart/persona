'use client';

import * as React from 'react';
import {
  IconDashboard,
  IconFolder,
  IconHelp,
  IconListDetails,
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
import {
  ACADEMIC_URL,
  APPLICATION_PAGE_URL,
  PERSONAL_PROJECTS_URL,
  PROFESSIONAL_SUMMARY_URL,
} from '@/lib/helpers';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/language-switcher';

type Props = {
  user: User;
} & React.ComponentProps<typeof Sidebar>;

export function AppSidebar({ ...props }: Props) {
  const { user } = props;
  const t = useTranslations('dashboard.sidebar');
  const tCommon = useTranslations('common');

  const data = {
    navMain: [
      {
        title: t('applications'),
        url: APPLICATION_PAGE_URL,
        icon: IconDashboard,
      },
      {
        title: t('professionalSummary'),
        url: PROFESSIONAL_SUMMARY_URL,
        icon: IconListDetails,
      },
      {
        title: t('academic'),
        url: ACADEMIC_URL,
        icon: IconUsers,
      },
      {
        title: t('personalProjects'),
        url: PERSONAL_PROJECTS_URL,
        icon: IconFolder,
      },
    ],
    navSecondary: [
      {
        title: t('needHelp'),
        url: '#',
        icon: IconHelp,
      },
    ],
  };

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
                <span className="text-rose-500 font-semibold text-sm sm:text-base">
                  {tCommon('appName')}
                </span>
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
