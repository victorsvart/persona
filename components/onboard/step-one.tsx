'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { OnboardStepOneProps } from '@/types/onboard/onboard-step.props';

export const OnboardStepOne: React.FC<OnboardStepOneProps> = ({
  form,
}: OnboardStepOneProps) => {
  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-12">
      <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
          Professional Experience
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Tell us about your professional background. This information will help
          us create compelling resume sections tailored to your target roles.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
        <FormField
          control={form.control}
          name="experience_years"
          render={({ field }) => (
            <FormItem className="space-y-3 sm:space-y-4 md:space-y-6">
              <FormLabel className="text-base sm:text-lg md:text-xl font-medium text-foreground">
                How many years of professional experience do you have?
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="0"
                  max="50"
                  placeholder="0"
                  className="h-10 sm:h-12 md:h-14 lg:h-16 text-sm sm:text-base md:text-lg lg:text-xl text-center rounded-xl sm:rounded-2xl transition-all duration-200"
                  data-invalid={!!form.formState.errors.experience_years}
                  {...field}
                  onChange={(e) =>
                    field.onChange(parseInt(e.target.value) || 0)
                  }
                />
              </FormControl>
              <FormDescription className="text-sm sm:text-base md:text-lg text-center text-muted-foreground">
                Include internships, part-time work, and freelance projects -
                every experience counts toward your professional profile.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="professional_summary"
          render={({ field }) => (
            <FormItem className="space-y-3 sm:space-y-4 md:space-y-6">
              <FormLabel className="text-base sm:text-lg md:text-xl font-medium text-foreground">
                Tell us a bit about yourself (optional)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What makes you unique? What are you passionate about? What are your key achievements? Don't worry about being perfect - just share what comes to mind!"
                  rows={4}
                  className="resize-none text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-sm sm:text-base md:text-lg text-muted-foreground">
                This helps us create more personalized resumes and cover letters
                tailored to your unique background.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="bg-muted/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto border">
        <div className="text-center space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">
            Why this matters
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            The more we know about your background, the better we can tailor
            your resumes to specific job applications. You can always add more
            details later.
          </p>
        </div>
      </div>
    </div>
  );
};
