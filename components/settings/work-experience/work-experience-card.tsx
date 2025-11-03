'use client';

import { format } from 'date-fns';
import { IconBriefcase, IconMapPin, IconCalendar } from '@tabler/icons-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WorkExperience } from '@prisma/client';

interface WorkExperienceCardProps {
  workExperience: WorkExperience;
  onClick: () => void;
}

export function WorkExperienceCard({
  workExperience,
  onClick,
}: WorkExperienceCardProps) {
  const formatDate = (date: Date) => {
    return format(new Date(date), 'MMM yyyy');
  };

  const duration = workExperience.isCurrentRole
    ? `${formatDate(workExperience.startDate)} - Present`
    : workExperience.endDate
    ? `${formatDate(workExperience.startDate)} - ${formatDate(workExperience.endDate)}`
    : formatDate(workExperience.startDate);

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Position & Company */}
            <div className="flex items-center gap-2 mb-1">
              <IconBriefcase className="h-4 w-4 shrink-0 text-muted-foreground" />
              <h3 className="font-semibold text-lg truncate">
                {workExperience.position}
              </h3>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-3">
              {workExperience.company}
            </p>

            {/* Date Range */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <IconCalendar className="h-3.5 w-3.5 shrink-0" />
              <span>{duration}</span>
            </div>

            {/* Location */}
            {workExperience.location && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <IconMapPin className="h-3.5 w-3.5 shrink-0" />
                <span>
                  {workExperience.location}
                  {workExperience.locationType && (
                    <span className="text-xs ml-1">
                      ({workExperience.locationType})
                    </span>
                  )}
                </span>
              </div>
            )}

            {/* Description Preview */}
            {workExperience.description && (
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {workExperience.description}
              </p>
            )}

            {/* Achievements Count */}
            {workExperience.achievements.length > 0 && (
              <div className="text-xs text-muted-foreground">
                {workExperience.achievements.length} key achievement
                {workExperience.achievements.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>

          {/* Badges */}
          <div className="flex flex-col gap-2 items-end shrink-0">
            {workExperience.employmentType && (
              <Badge variant="secondary" className="text-xs">
                {workExperience.employmentType}
              </Badge>
            )}
            {workExperience.isCurrentRole && (
              <Badge variant="default" className="text-xs">
                Current
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

