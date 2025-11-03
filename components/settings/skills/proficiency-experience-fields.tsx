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

interface ProficiencyExperienceFieldsProps {
  form: any;
}

const PROFICIENCY_LEVELS = [
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' },
  { value: 'Expert', label: 'Expert' },
];

export function ProficiencyExperienceFields({ form }: ProficiencyExperienceFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="proficiency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Proficiency Level</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
              >
                {PROFICIENCY_LEVELS.map((level) => (
                  <FormItem key={level.value}>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={level.value} id={level.value} />
                        <FormLabel
                          htmlFor={level.value}
                          className="font-normal cursor-pointer"
                        >
                          {level.label}
                        </FormLabel>
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

      <FormField
        control={form.control}
        name="yearsOfExperience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Years of Experience</FormLabel>
            <FormControl>
              <Input
                type="number"
                min="0"
                max="50"
                placeholder="e.g., 3"
                {...field}
                onChange={(e) => {
                  const value = e.target.value === '' ? 0 : parseInt(e.target.value);
                  field.onChange(value);
                }}
                value={field.value || ''}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

