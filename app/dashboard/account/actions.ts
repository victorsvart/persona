'use server';

import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

export async function saveImageUrl(url: string): Promise<void> {
  try {
    await auth.api.updateUser({
      headers: await headers(),
      body: {
        image: url,
      },
    });
    revalidatePath('/dashboard');
  } catch (error) {
    throw error;
  }
}
