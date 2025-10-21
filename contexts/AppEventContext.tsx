'use client';
import React, { createContext, ReactNode, useState, useCallback } from 'react';
import { SignOutTriggerDialog } from '@/components/signout-trigger-dialog';

type Event = {
  eventName: string;
  trigger: (props: any) => React.ReactElement;
  untrigger: () => void;
};

type AppEventContextType = {
  events: Event[];
  activeEvents: Set<string>;
  triggerEvent: (eventName: string, props?: any) => void;
  untriggerEvent: (eventName: string) => void;
  isEventActive: (eventName: string) => boolean;
};

const AppEventContext = createContext<AppEventContextType>({
  events: [],
  activeEvents: new Set(),
  triggerEvent: () => {},
  untriggerEvent: () => {},
  isEventActive: () => false,
});

export const AppEventProvider = ({ children }: { children: ReactNode }) => {
  const [activeEvents, setActiveEvents] = useState<Set<string>>(new Set());

  const events: Event[] = [
    {
      eventName: 'signOut',
      trigger: (props: {
        open: boolean;
        onOpenChange: (open: boolean) => void;
      }) => <SignOutTriggerDialog {...props} />,
      untrigger: () => {
        console.log('Sign-out completed');
      },
    },
  ];

  const triggerEvent = useCallback((eventName: string, _: any) => {
    setActiveEvents((prev) => new Set(prev).add(eventName));
  }, []);

  const untriggerEvent = useCallback(
    (eventName: string) => {
      setActiveEvents((prev) => {
        const newSet = new Set(prev);
        newSet.delete(eventName);
        return newSet;
      });

      //untrigger
      const event = events.find((e) => e.eventName === eventName);
      if (event) {
        event.untrigger();
      }
    },
    [events],
  );

  const isEventActive = useCallback(
    (eventName: string) => {
      return activeEvents.has(eventName);
    },
    [activeEvents],
  );

  const value: AppEventContextType = {
    events,
    activeEvents,
    triggerEvent,
    untriggerEvent,
    isEventActive,
  };

  return (
    <AppEventContext.Provider value={value}>
      {children}
      {Array.from(activeEvents).map((eventName) => {
        const event = events.find((e) => e.eventName === eventName);
        if (!event) return null;

        return (
          <div key={eventName}>
            {event.trigger({
              open: true,
              onOpenChange: (open: boolean) => {
                if (!open) {
                  untriggerEvent(eventName);
                }
              },
            })}
          </div>
        );
      })}
    </AppEventContext.Provider>
  );
};

export const useAppEvent = () => {
  const context = React.useContext(AppEventContext);
  if (!context) {
    throw new Error('useAppEvent must be used within an AppEventProvider');
  }
  return context;
};

export default AppEventContext;
