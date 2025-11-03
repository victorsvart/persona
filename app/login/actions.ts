'use server';

import { auth } from '@/lib/auth';
import { AppResponse, unexpectedError } from '@/lib/types/app/http';
import { LoginSchemaValues } from '@/lib/types/forms/login.form';
import { prisma } from '@/prisma/client';
import { APIError } from 'better-auth';

export async function login(values: LoginSchemaValues): Promise<AppResponse> {
  try {
    await auth.api.signInUsername({ body: values });
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

  return { data: null, error: null };
}
