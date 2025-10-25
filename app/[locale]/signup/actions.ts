'use server';

import { auth } from '@/lib/auth';
import { ONBOARD_PAGE_URL } from '@/lib/helpers';
import { makeAuthError } from '@/lib/utils';
import { AuthError } from '@/types/errors/auth-error';
import { SignUpSchemaValues } from '@/types/forms/signup.schema';
import { APIError } from 'better-auth';
import { redirect } from 'next/navigation';

export async function signUp(
  values: SignUpSchemaValues,
): Promise<undefined | AuthError> {
  try {
    await auth.api.signUpEmail({
      body: values,
    });
  } catch (error) {
    if (error instanceof APIError) {
      return makeAuthError(error);
    }
  }

  redirect(ONBOARD_PAGE_URL);
}
