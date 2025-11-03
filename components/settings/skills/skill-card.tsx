'use client';

import { IconSparkles } from '@tabler/icons-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skill } from '@prisma/client';

interface SkillCardProps {
  skill: Skill;
  onClick: () => void;
}

const PROFICIENCY_COLORS: Record<string, string> = {
  'Beginner': 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  'Intermediate': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  'Advanced': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  'Expert': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
};

export function SkillCard({
  skill,
  onClick,
}: SkillCardProps) {
  const proficiencyColor = skill.proficiency 
    ? PROFICIENCY_COLORS[skill.proficiency] || ''
    : '';

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            {/* Skill Name */}
            <div className="flex items-center gap-2 mb-2">
              <IconSparkles className="h-4 w-4 shrink-0 text-muted-foreground" />
              <h3 className="font-semibold text-base truncate">
                {skill.name}
              </h3>
            </div>

            {/* Category */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {skill.category}
              </Badge>

              {/* Years of Experience */}
              {skill.yearsOfExperience !== null && skill.yearsOfExperience > 0 && (
                <span className="text-xs text-muted-foreground">
                  {skill.yearsOfExperience} year{skill.yearsOfExperience !== 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>

          {/* Proficiency Badge */}
          {skill.proficiency && (
            <Badge 
              variant="secondary" 
              className={`text-xs shrink-0 ${proficiencyColor}`}
            >
              {skill.proficiency}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

