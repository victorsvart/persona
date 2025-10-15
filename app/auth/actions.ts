'use server';

import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { makeError } from '@/lib/utils';
import { LoginSchemaValues } from '@/lib/zod/login.schema';
import { RegisterSchemaValues } from '@/lib/zod/register.schema';
import { AppResponse } from '@/types/AppResponse';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signUp(form: RegisterSchemaValues): Promise<void> {
  try {
    await auth.api.signUpEmail({ body: form });
  } catch (error: unknown) {
    console.error('Sign up error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create user';
    throw new Error(errorMessage);
  }

  redirect('/dashboard/onboard');
}

export async function signIn(form: LoginSchemaValues): Promise<AppResponse> {
  try {
    const session = await auth.api.signInUsername({ body: form });
    if (!session?.user?.id) {
      return makeError({ code: 401, message: 'Invalid session data' });
    }

    const onboarding = await prisma.onboard.findUnique({
      where: { id: session.user.id },
      select: { onboarded: true },
    });

    if (!onboarding) {
      return makeError({ code: 404, message: 'User not found' });
    }

    if (!onboarding.onboarded) {
      redirect('/dashboard/onboard');
    }

    redirect('/dashboard');
  } catch (error) {
    console.error('Sign in error:', error);
    return makeError({ code: 401, message: 'Wrong credentials' });
  }
}

export async function signOut(): Promise<void> {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
    redirect('/auth/login');
  } catch (error) {
    console.error('Sign out error:', error);
    // error should still redirect to login. Is there a better way to handle this? TODO
    redirect('/auth/login');
  }
}
