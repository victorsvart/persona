'use server';

import { auth } from '@/lib/auth';
import { AppResponse, unexpectedError } from '@/lib/types/app/http';
import { RegisterFormValues } from '@/lib/types/forms/register.form';
import { APIError } from 'better-auth';

export async function registerUser(
  values: RegisterFormValues,
): Promise<AppResponse> {
  try {
    await auth.api.signUpEmail({
      body: values,
    });
  } catch (err) {
    if (err instanceof APIError) {
      return {
        data: null,
        error: {
          code: err.statusCode,
          message: err.message,
        },
      };
    }

    return unexpectedError(err as Error);
  }

  return {
    data: null,
    error: null,
  };
}
