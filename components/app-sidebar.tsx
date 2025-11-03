'use client';

import * as React from 'react';
import {
  IconMessage,
  IconPlus,
  IconTrash,
  IconEdit,
  IconInnerShadowTop,
} from '@tabler/icons-react';

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
import { cn } from '@/lib/utils';

// Mock chat history data
const mockChatHistory = [
  {
    id: '1',
    title: 'Software Engineer Resumé',
    timestamp: '2 hours ago',
    preview: 'Help me create a resumé for a senior software engineer position...',
  },
  {
    id: '2',
    title: 'Product Manager CV',
    timestamp: 'Yesterday',
    preview: 'I need a compelling resumé for a product manager role...',
  },
  {
    id: '3',
    title: 'Entry-level Data Analyst',
    timestamp: '2 days ago',
    preview: 'Creating my first professional resumé for data analyst positions...',
  },
  {
    id: '4',
    title: 'UX Designer Portfolio',
    timestamp: '3 days ago',
    preview: 'Help me highlight my design skills and projects...',
  },
  {
    id: '5',
    title: 'Marketing Manager Resumé',
    timestamp: '1 week ago',
    preview: 'Need to emphasize my digital marketing achievements...',
  },
  {
    id: '6',
    title: 'DevOps Engineer CV',
    timestamp: '1 week ago',
    preview: 'Showcasing my cloud infrastructure expertise...',
  },
  {
    id: '7',
    title: 'Career Change Resumé',
    timestamp: '2 weeks ago',
    preview: 'Transitioning from teaching to tech, need help...',
  },
  {
    id: '8',
    title: 'Executive Leadership CV',
    timestamp: '2 weeks ago',
    preview: 'Creating a C-level executive resumé...',
  },
];

const data = {
  user: {
    name: 'User',
    email: 'm@example.com',
    avatar: '/avatars/user.jpg',
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeChat, setActiveChat] = React.useState<string | null>('1');

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Persona</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="px-2 pt-2">
          <Button className="w-full" size="sm">
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
                {mockChatHistory.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setActiveChat(chat.id)}
                    className={cn(
                      'group relative w-full rounded-md px-3 py-2 text-left transition-colors hover:bg-accent',
                      activeChat === chat.id && 'bg-accent'
                    )}
                  >
                    <div className="flex items-start gap-2">
                      <IconMessage className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <div className="flex-1 overflow-hidden">
                        <p className="truncate text-sm font-medium">
                          {chat.title}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {chat.preview}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {chat.timestamp}
                        </p>
                      </div>
                    </div>
                    <div className="absolute right-2 top-2 hidden gap-1 group-hover:flex">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle edit
                        }}
                      >
                        <IconEdit className="h-3 w-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 text-destructive"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle delete
                        }}
                      >
                        <IconTrash className="h-3 w-3" />
                      </Button>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
