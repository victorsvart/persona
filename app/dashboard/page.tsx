import { AppSidebar } from '@/components/app-sidebar';
import { ChatInterface } from '@/components/chat-interface';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getApplication } from '@/app/actions/applications';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ application?: string }>;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  const params = await searchParams;
  let application = null;

  if (params.application) {
    const result = await getApplication(params.application);
    if (result.success && result.data) {
      application = result.data;
    }
  }

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className="flex h-screen flex-col">
          <ChatInterface application={application} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
