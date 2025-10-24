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

export function formatDate(date: Date | string | null) {
  if (!date) return '';
  if (date instanceof Date) {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  }
  if (typeof date === 'string') {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  }
  return '';
}

export function toISOString(date: Date | null): string {
  if (!date) {
    return '';
  }
  return new Date(date).toISOString().split('T')[0];
}
