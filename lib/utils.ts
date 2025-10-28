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

export async function loadPublicFile(filePath: string): Promise<string> {
  let content: string;
  if (typeof window === 'undefined') {
    // Server-side: use file system
    const { readFileSync, existsSync } = await import('fs');
    const { join } = await import('path');
    const fullPath = join(process.cwd(), 'public', 'content', filePath);

    // Check if file exists
    if (!existsSync(fullPath)) {
      throw new Error(`Content file not found: ${filePath}`);
    }

    content = readFileSync(fullPath, 'utf-8');
  } else {
    // Client-side: use fetch
    const response = await fetch(`/content/${filePath}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Content file not found: ${filePath}`);
      }
      throw new Error(
        `Failed to fetch content (${response.status}): ${response.statusText}`,
      );
    }
    content = await response.text();
  }

  return content;
}
