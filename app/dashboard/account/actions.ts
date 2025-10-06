'use server';

import { auth } from '@/lib/auth';
import { AccountSchemaValues } from '@/lib/zod/account.schema';
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
  } catch (error) {
    throw error;
  }
}

export async function saveUser(form: AccountSchemaValues): Promise<void> {
  try {
    await auth.api.updateUser({
      headers: await headers(),
      body: { username: form.username, name: form.name },
    });

    revalidatePath('/dashboard');
  } catch (error) {
    console.error(error);
    throw error;
  }
}
