'use client';

import { OrigamiIcon } from 'lucide-react';
import { ReactNode } from 'react';

export default function OnboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="@container/main flex flex-col min-h-screen">
      <div className="flex w-full bg-card/95 backdrop-blur-sm gap-3 justify-start px-6 py-4 items-center border-b border-border">
        <div className="bg-gradient-to-br from-primary to-primary/80 p-2 text-primary-foreground rounded-xl flex justify-center items-center shadow-lg">
          <OrigamiIcon className="size-5" />
        </div>
        <span className="text-primary font-semibold text-lg">Persona</span>
        <span className="text-muted-foreground">|</span>
        <span className="font-semibold text-muted-foreground">Onboarding</span>
      </div>
      <div className="flex-1 flex justify-center items-center">{children}</div>
    </div>
  );
}
