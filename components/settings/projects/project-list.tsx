'use client';

import * as React from 'react';
import { ProjectCard } from './project-card';
import { EmptyState } from '@/components/settings/empty-state';
import { getProjects } from '@/app/actions/projects';
import { toast } from 'sonner';
import { Project } from '@prisma/client';

interface ProjectListProps {
  onEdit: (project: Project) => void;
  refreshTrigger?: number;
}

export function ProjectList({ 
  onEdit, 
  refreshTrigger = 0 
}: ProjectListProps) {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchProjects = React.useCallback(async () => {
    setLoading(true);
    const result = await getProjects();

    if (result.success && result.data) {
      setProjects(result.data);
    } else {
      toast.error(result.error || 'Failed to load projects');
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    fetchProjects();
  }, [fetchProjects, refreshTrigger]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-40 bg-muted animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <EmptyState
        title="No projects added yet"
        description="Add your projects to showcase your work and technical skills"
      />
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onEdit(project)}
        />
      ))}
    </div>
  );
}

