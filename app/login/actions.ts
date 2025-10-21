'use server';

import { auth } from '@/lib/auth';
import { makeAuthError } from '@/lib/utils';
import { AuthError } from '@/types/errors/auth-error';
import { LoginSchemaValues } from '@/types/forms/login.schema';
import { APIError } from 'better-auth';
import { redirect } from 'next/navigation';

export async function signIn(
  values: LoginSchemaValues,
): Promise<undefined | AuthError> {
  try {
    await auth.api.signInUsername({
      body: values,
    });
  } catch (error) {
    if (error instanceof APIError) {
      return makeAuthError(error);
    }

    throw error;
  }

  redirect('/dashboard');
}
