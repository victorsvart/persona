'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface NameProficiencyFieldsProps {
  form: any;
}

const PROFICIENCY_LEVELS = [
  { value: 'Native', label: 'Native', description: 'Native or bilingual proficiency' },
  { value: 'Fluent', label: 'Fluent', description: 'Full professional proficiency' },
  { value: 'Professional', label: 'Professional', description: 'Professional working proficiency' },
  { value: 'Intermediate', label: 'Intermediate', description: 'Limited working proficiency' },
  { value: 'Basic', label: 'Basic', description: 'Elementary proficiency' },
];

export function NameProficiencyFields({ form }: NameProficiencyFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Language *</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Spanish, Mandarin, French" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="proficiency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Proficiency Level *</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="space-y-3"
              >
                {PROFICIENCY_LEVELS.map((level) => (
                  <FormItem key={level.value}>
                    <FormControl>
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value={level.value} id={level.value} className="mt-1" />
                        <div className="flex-1">
                          <FormLabel
                            htmlFor={level.value}
                            className="font-medium cursor-pointer"
                          >
                            {level.label}
                          </FormLabel>
                          <p className="text-xs text-muted-foreground">
                            {level.description}
                          </p>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

