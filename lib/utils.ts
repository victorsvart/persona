import { AuthError } from '@/types/errors/auth-error';
import { APIError } from 'better-auth';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function makeAuthError(error: APIError): AuthError {
  return {
    status: error.status,
    message: error.message,
  };
}
