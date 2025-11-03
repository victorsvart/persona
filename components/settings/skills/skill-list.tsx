'use client';

import * as React from 'react';
import { SkillCard } from './skill-card';
import { EmptyState } from '@/components/settings/empty-state';
import { getSkills } from '@/app/actions/skills';
import { toast } from 'sonner';
import { Skill } from '@prisma/client';

interface SkillListProps {
  onEdit: (skill: Skill) => void;
  refreshTrigger?: number;
}

export function SkillList({ 
  onEdit, 
  refreshTrigger = 0 
}: SkillListProps) {
  const [skills, setSkills] = React.useState<Skill[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchSkills = React.useCallback(async () => {
    setLoading(true);
    const result = await getSkills();

    if (result.success && result.data) {
      setSkills(result.data);
    } else {
      toast.error(result.error || 'Failed to load skills');
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    fetchSkills();
  }, [fetchSkills, refreshTrigger]);

  // Group skills by category
  const groupedSkills = React.useMemo(() => {
    const grouped: Record<string, Skill[]> = {};
    skills.forEach((skill) => {
      if (!grouped[skill.category]) {
        grouped[skill.category] = [];
      }
      grouped[skill.category].push(skill);
    });
    return grouped;
  }, [skills]);

  const categories = Object.keys(groupedSkills).sort();

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-24 bg-muted animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    );
  }

  if (skills.length === 0) {
    return (
      <EmptyState
        title="No skills added yet"
        description="Add your technical and soft skills to highlight your expertise"
      />
    );
  }

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category} className="space-y-3">
          {/* Category Header */}
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              {category}
            </h3>
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-xs text-muted-foreground">
              {groupedSkills[category].length}
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {groupedSkills[category].map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                onClick={() => onEdit(skill)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

