import { AppSidebar } from '@/components/app-sidebar';
import { ChatInterface } from '@/components/chat-interface';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
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
          <ChatInterface />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
