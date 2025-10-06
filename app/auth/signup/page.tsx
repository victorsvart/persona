'use server';

import { SignupForm } from '@/components/signup-form';
import { OrigamiIcon } from 'lucide-react';

export default async function SignUpPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="flex flex-col items-center justify-center w-full max-w-sm">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <OrigamiIcon className="size-4" />
            </div>
            Persona
          </a>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
