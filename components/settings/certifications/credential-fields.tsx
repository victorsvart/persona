'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface CredentialFieldsProps {
  form: any;
}

export function CredentialFields({ form }: CredentialFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="credentialId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Credential ID</FormLabel>
            <FormControl>
              <Input
                placeholder="e.g., ABC123XYZ"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="credentialUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Credential URL</FormLabel>
            <FormControl>
              <Input
                type="url"
                placeholder="https://example.com/verify"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

