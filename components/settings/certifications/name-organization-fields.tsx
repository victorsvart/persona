'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface NameOrganizationFieldsProps {
  form: any;
}

export function NameOrganizationFields({ form }: NameOrganizationFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Certification Name *</FormLabel>
            <FormControl>
              <Input placeholder="e.g., AWS Certified Solutions Architect" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="issuingOrganization"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Issuing Organization *</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Amazon Web Services" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

