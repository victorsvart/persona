'use client';

import { format } from 'date-fns';
import { IconSchool, IconMapPin, IconCalendar } from '@tabler/icons-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Education } from '@prisma/client';

interface EducationCardProps {
  education: Education;
  onClick: () => void;
}

export function EducationCard({ education, onClick }: EducationCardProps) {
  const formatDate = (date: Date) => {
    return format(new Date(date), 'MMM yyyy');
  };

  const duration = education.isCurrentlyEnrolled
    ? `${formatDate(education.startDate)} - Present`
    : education.endDate
    ? `${formatDate(education.startDate)} - ${formatDate(education.endDate)}`
    : formatDate(education.startDate);

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Degree & Field of Study */}
            <div className="flex items-center gap-2 mb-1">
              <IconSchool className="h-4 w-4 shrink-0 text-muted-foreground" />
              <h3 className="font-semibold text-lg truncate">
                {education.degree}
              </h3>
            </div>
            <p className="text-sm font-medium mb-1">{education.fieldOfStudy}</p>
            <p className="text-sm text-muted-foreground mb-3">
              {education.institution}
            </p>

            {/* Date Range */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <IconCalendar className="h-3.5 w-3.5 shrink-0" />
              <span>{duration}</span>
            </div>

            {/* Location */}
            {education.location && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <IconMapPin className="h-3.5 w-3.5 shrink-0" />
                <span>{education.location}</span>
              </div>
            )}

            {/* GPA */}
            {education.gpa && (
              <div className="text-sm text-muted-foreground mb-2">
                GPA: {education.gpa}
              </div>
            )}

            {/* Honors */}
            {education.honors && (
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {education.honors}
              </p>
            )}

            {/* Activities & Coursework Count */}
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {education.activities.length > 0 && (
                <div>
                  {education.activities.length} activit
                  {education.activities.length !== 1 ? 'ies' : 'y'}
                </div>
              )}
              {education.coursework.length > 0 && (
                <div>
                  {education.coursework.length} relevant course
                  {education.coursework.length !== 1 ? 's' : ''}
                </div>
              )}
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-col gap-2 items-end shrink-0">
            {education.isCurrentlyEnrolled && (
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

