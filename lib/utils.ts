import { AppError, AppResponse } from '@/types/AppResponse';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formRequired(field: string): string {
  return `${field} is required`;
}

export function makeSuccess(): AppResponse {
  return {
    success: true,
    error: undefined,
  };
}

export function makeError({ code, message }: AppError): AppResponse {
  return {
    success: false,
    error: {
      code,
      message,
    },
  };
}

export function isValidURL(url: string): AppResponse {
  try {
    new URL(url);
    return {
      success: true,
      error: undefined,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 500,
        message: 'Invalid URL',
      },
    };
  }
}
