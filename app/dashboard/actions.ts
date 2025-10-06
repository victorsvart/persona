'use server';

import { auth } from '@/lib/auth';
import { User } from '@/lib/generated/prisma';
import { Session } from '@/types/Session';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getSession(): Promise<Session> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(LOGIN_URL);
  }

  return session;
}

export async function getUser(): Promise<User> {
  const session = await getSession();
  return session.user as User;
}
