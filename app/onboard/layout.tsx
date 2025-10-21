'use client';

import { OrigamiIcon } from 'lucide-react';
import { ReactNode } from 'react';

export default function OnboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="@container/main flex flex-col gap-2 h-full">
      <div className="flex w-full bg-zinc-900 gap-2 justify-start p-2 items-center">
        <span className="bg-rose-500 p-1 text-black rounded-md flex justify-center items-center">
          <OrigamiIcon className="size-5" />
        </span>
        <span className="text-rose-500 font-semibold">Persona</span>
        <span>|</span>
        <span className="font-semibold">Onboarding</span>
      </div>
      <div className="flex h-full justify-center items-center">{children}</div>
    </div>
  );
}
