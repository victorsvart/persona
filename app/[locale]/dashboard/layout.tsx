'use server';

import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { auth } from '@/lib/auth';
import { User } from '@/prisma/generated/prisma';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { isOnboarded } from './actions';
import { ONBOARD_PAGE_URL } from '@/lib/helpers';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  const userOnboarded = await isOnboarded(session.user.id);
  if (!userOnboarded) {
    redirect(ONBOARD_PAGE_URL);
  }

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'clamp(14rem, 16vw, 18rem)',
          '--header-height': 'clamp(3rem, 4vw, 4rem)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" user={session.user as User} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2 px-6">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
