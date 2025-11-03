'use client';

import { format } from 'date-fns';
import { IconCode, IconCalendar, IconLink, IconBrandGithub } from '@tabler/icons-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from '@prisma/client';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  const formatDate = (date: Date) => {
    return format(new Date(date), 'MMM yyyy');
  };

  const duration = project.isOngoing
    ? project.startDate
      ? `${formatDate(project.startDate)} - Present`
      : 'Ongoing'
    : project.startDate && project.endDate
    ? `${formatDate(project.startDate)} - ${formatDate(project.endDate)}`
    : project.startDate
    ? formatDate(project.startDate)
    : null;

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Project Name & Role */}
            <div className="flex items-center gap-2 mb-1">
              <IconCode className="h-4 w-4 shrink-0 text-muted-foreground" />
              <h3 className="font-semibold text-lg truncate">
                {project.name}
              </h3>
            </div>
            
            {project.role && (
              <p className="text-sm font-medium text-muted-foreground mb-3">
                {project.role}
              </p>
            )}

            {/* Date Range */}
            {duration && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <IconCalendar className="h-3.5 w-3.5 shrink-0" />
                <span>{duration}</span>
              </div>
            )}

            {/* Description Preview */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {project.description}
            </p>

            {/* Technologies */}
            {project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.slice(0, 5).map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 5 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.technologies.length - 5}
                  </Badge>
                )}
              </div>
            )}

            {/* Links & Highlights Count */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {project.url && (
                <div className="flex items-center gap-1">
                  <IconLink className="h-3 w-3" />
                  <span>Live Demo</span>
                </div>
              )}
              {project.githubUrl && (
                <div className="flex items-center gap-1">
                  <IconBrandGithub className="h-3 w-3" />
                  <span>GitHub</span>
                </div>
              )}
              {project.highlights.length > 0 && (
                <span>
                  {project.highlights.length} highlight
                  {project.highlights.length !== 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-col gap-2 items-end shrink-0">
            {project.isOngoing && (
              <Badge variant="default" className="text-xs">
                Ongoing
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

