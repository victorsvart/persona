'use client';

import { OnboardStepFourProps } from '@/types/onboard/onboard-step.props';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '../ui/form';
import { Textarea } from '../ui/textarea';

export const OnboardStepFour: React.FC<OnboardStepFourProps> = ({
  form,
}) => {
  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-12">
      <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
          Skills & Expertise
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Share your skills and expertise - both technical and personal.
          This is the final step, and you can always add more skills
          later.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem className="space-y-3 sm:space-y-4 md:space-y-6">
              <FormLabel className="text-base sm:text-lg md:text-xl font-medium text-foreground">
                Tell us about your skills and expertise
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List your skills separated by commas (e.g., JavaScript, React, Python, Project Management, Leadership, Design Thinking, Public Speaking, Data Analysis, Team Collaboration, Problem Solving)"
                  rows={6}
                  className="resize-none text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200"
                  data-invalid={!!form.formState.errors.skills}
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Include both technical and soft skills. Don't worry about
                being comprehensive - you can always add more skills later
                as you grow.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-muted/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">
              Skill Categories
            </h4>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground">
              <div>
                <strong>Technical Skills:</strong> Programming languages,
                frameworks, tools, software
              </div>
              <div>
                <strong>Soft Skills:</strong> Leadership, communication,
                problem-solving, teamwork
              </div>
              <div>
                <strong>Industry Knowledge:</strong> Domain-specific
                expertise and experience
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4 md:mb-6">
              Tips for Success
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 text-sm sm:text-base md:text-lg text-muted-foreground">
              <li>• Be specific about your skill level when possible</li>
              <li>• Include both hard and soft skills</li>
              <li>• Mention tools and technologies you use</li>
              <li>• Add industry-specific knowledge</li>
              <li>
                • Don't worry about being perfect - you can always update
                this
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
