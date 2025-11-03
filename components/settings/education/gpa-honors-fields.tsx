'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface GpaHonorsFieldsProps {
  form: any;
}

export function GpaHonorsFields({ form }: GpaHonorsFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="gpa"
        render={({ field }) => (
          <FormItem>
            <FormLabel>GPA</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 3.8" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="honors"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Honors & Awards</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Dean's List, Cum Laude" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

