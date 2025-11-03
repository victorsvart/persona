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
    title: 'How to implement authentication',
    timestamp: '2 hours ago',
    preview: 'Can you help me with implementing JWT authentication...',
  },
  {
    id: '2',
    title: 'Database schema design',
    timestamp: 'Yesterday',
    preview: 'I need help designing a schema for user management...',
  },
  {
    id: '3',
    title: 'React best practices',
    timestamp: '2 days ago',
    preview: 'What are the current best practices for React...',
  },
  {
    id: '4',
    title: 'API rate limiting',
    timestamp: '3 days ago',
    preview: 'How do I implement rate limiting for my API...',
  },
  {
    id: '5',
    title: 'Testing strategies',
    timestamp: '1 week ago',
    preview: 'What testing strategy would you recommend...',
  },
  {
    id: '6',
    title: 'Docker deployment',
    timestamp: '1 week ago',
    preview: 'Help me set up Docker for my Next.js application...',
  },
  {
    id: '7',
    title: 'State management options',
    timestamp: '2 weeks ago',
    preview: 'Should I use Redux or Zustand for state management...',
  },
  {
    id: '8',
    title: 'Performance optimization',
    timestamp: '2 weeks ago',
    preview: 'My app is slow, how can I optimize it...',
  },
];

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
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
                <span className="text-base font-semibold">Chat Assistant</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="px-2 pt-2">
          <Button className="w-full" size="sm">
            <IconPlus className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chat History</SidebarGroupLabel>
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
