'use client';

import * as React from 'react';
import {
  IconMessage,
  IconPlus,
  IconTrash,
  IconEdit,
  IconInnerShadowTop,
} from '@tabler/icons-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';

import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ApplicationForm } from '@/components/application-form';
import { cn } from '@/lib/utils';
import { getApplications, deleteApplication } from '@/app/actions/applications';
import type { Application, ChatMessage } from '@prisma/client';

const data = {
  user: {
    name: 'User',
    email: 'm@example.com',
    avatar: '/avatars/user.jpg',
  },
};

type ApplicationWithMessages = Application & {
  messages: ChatMessage[];
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeApplicationId = searchParams.get('application');
  
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [applications, setApplications] = React.useState<ApplicationWithMessages[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  // Load applications on mount
  React.useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    setIsLoading(true);
    const result = await getApplications();
    if (result.success && result.data) {
      setApplications(result.data);
    } else {
      toast.error(result.error || 'Failed to load applications');
    }
    setIsLoading(false);
  };

  const handleSelectApplication = (id: string) => {
    router.push(`/dashboard?application=${id}`);
  };

  const handleDeleteApplication = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    
    if (!confirm('Are you sure you want to delete this application?')) {
      return;
    }

    const result = await deleteApplication(id);
    if (result.success) {
      toast.success('Application deleted successfully');
      loadApplications();
      
      // If the deleted application was active, redirect to dashboard
      if (activeApplicationId === id) {
        router.push('/dashboard');
      }
    } else {
      toast.error(result.error || 'Failed to delete application');
    }
  };

  const getApplicationTitle = (app: ApplicationWithMessages) => {
    return `${app.role} at ${app.company}`;
  };

  const getApplicationPreview = (app: ApplicationWithMessages) => {
    if (app.messages.length > 0) {
      return app.messages[0].content.substring(0, 60) + '...';
    }
    return app.jobDescription.substring(0, 60) + '...';
  };

  const getRelativeTime = (date: Date) => {
    try {
      return formatDistanceToNow(new Date(date), { addSuffix: true });
    } catch (error) {
      return 'Recently';
    }
  };

  return (
    <>
      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:!p-1.5"
              >
                <a href="/dashboard">
                  <IconInnerShadowTop className="!size-5" />
                  <span className="text-base font-semibold">Persona</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <div className="px-2 pt-2">
            <Button 
              className="w-full" 
              size="sm"
              onClick={() => setDialogOpen(true)}
            >
              <IconPlus className="mr-2 h-4 w-4" />
              New Resumé
            </Button>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Resumé History</SidebarGroupLabel>
            <SidebarGroupContent>
              <ScrollArea className="h-[calc(100vh-280px)]">
                <div className="space-y-1 px-2">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <p className="text-sm text-muted-foreground">Loading...</p>
                    </div>
                  ) : applications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                      <IconMessage className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        No resumés yet
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Click "New Resumé" to get started
                      </p>
                    </div>
                  ) : (
                    applications.map((app) => (
                      <button
                        key={app.id}
                        onClick={() => handleSelectApplication(app.id)}
                        className={cn(
                          'group relative w-full rounded-md px-3 py-2 text-left transition-colors hover:bg-accent',
                          activeApplicationId === app.id && 'bg-accent'
                        )}
                      >
                        <div className="flex items-start gap-2">
                          <IconMessage className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                          <div className="flex-1 overflow-hidden">
                            <p className="truncate text-sm font-medium">
                              {getApplicationTitle(app)}
                            </p>
                            <p className="truncate text-xs text-muted-foreground">
                              {getApplicationPreview(app)}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {getRelativeTime(app.createdAt)}
                            </p>
                          </div>
                        </div>
                        <div className="absolute right-2 top-2 hidden gap-1 group-hover:flex">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6 text-destructive"
                            onClick={(e) => handleDeleteApplication(e, app.id)}
                          >
                            <IconTrash className="h-3 w-3" />
                          </Button>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </ScrollArea>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>
      
      <ApplicationForm 
        open={dialogOpen} 
        onOpenChange={setDialogOpen}
        onSuccess={loadApplications}
      />
    </>
  );
}
