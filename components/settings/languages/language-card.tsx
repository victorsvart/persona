'use client';

import { IconLanguage } from '@tabler/icons-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Language } from '@prisma/client';

interface LanguageCardProps {
  language: Language;
  onClick: () => void;
}

const PROFICIENCY_COLORS: Record<string, string> = {
  'Native': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  'Fluent': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  'Professional': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  'Intermediate': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  'Basic': 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
};

export function LanguageCard({
  language,
  onClick,
}: LanguageCardProps) {
  const proficiencyColor = PROFICIENCY_COLORS[language.proficiency] || '';

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <IconLanguage className="h-5 w-5 shrink-0 text-muted-foreground" />
            <h3 className="font-semibold text-base truncate">
              {language.name}
            </h3>
          </div>

          <Badge 
            variant="secondary" 
            className={`text-xs shrink-0 ${proficiencyColor}`}
          >
            {language.proficiency}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

