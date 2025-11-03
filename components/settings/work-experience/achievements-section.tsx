'use client';

import { FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IconPlus, IconX } from '@tabler/icons-react';

interface AchievementsSectionProps {
  achievements: string[];
  currentAchievements: string[];
  achievementPage: number;
  totalPages: number;
  startIndex: number;
  setAchievementPage: (page: number) => void;
  updateAchievement: (index: number, value: string) => void;
  removeAchievement: (index: number) => void;
  addAchievement: () => void;
}

export function AchievementsSection({
  achievements,
  currentAchievements,
  achievementPage,
  totalPages,
  startIndex,
  setAchievementPage,
  updateAchievement,
  removeAchievement,
  addAchievement,
}: AchievementsSectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <FormLabel>
            Key Achievements
            {achievements.length > 0 && (
              <span className="ml-2 text-xs text-muted-foreground">
                ({achievements.length} total)
              </span>
            )}
          </FormLabel>

          {/* Compact Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setAchievementPage(achievementPage - 1)}
                disabled={achievementPage === 1}
              >
                <span className="text-xs">←</span>
              </Button>
              <span className="text-xs text-muted-foreground px-1">
                {achievementPage}/{totalPages}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setAchievementPage(achievementPage + 1)}
                disabled={achievementPage === totalPages}
              >
                <span className="text-xs">→</span>
              </Button>
            </div>
          )}
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addAchievement}
        >
          <IconPlus className="h-4 w-4 mr-2" />
          Add Achievement
        </Button>
      </div>
      <div className="space-y-2">
        {currentAchievements.map((achievement, index) => {
          const actualIndex = startIndex + index;
          return (
            <div key={actualIndex} className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <div className="flex items-center justify-center w-6 h-10 text-xs text-muted-foreground">
                  {actualIndex + 1}
                </div>
                <Input
                  placeholder="e.g., Increased sales by 35% through strategic initiatives"
                  value={achievement}
                  onChange={(e) =>
                    updateAchievement(actualIndex, e.target.value)
                  }
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeAchievement(actualIndex)}
              >
                <IconX className="h-4 w-4" />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

