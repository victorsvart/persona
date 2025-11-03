'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormLabel } from '@/components/ui/form';
import { IconPlus, IconX } from '@tabler/icons-react';

interface ActivitiesSectionProps {
  activities: string[];
  currentActivities: string[];
  activityPage: number;
  totalPages: number;
  startIndex: number;
  setActivityPage: (page: number) => void;
  updateActivity: (index: number, value: string) => void;
  removeActivity: (index: number) => void;
  addActivity: () => void;
}

export function ActivitiesSection({
  activities,
  currentActivities,
  activityPage,
  totalPages,
  startIndex,
  setActivityPage,
  updateActivity,
  removeActivity,
  addActivity,
}: ActivitiesSectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <FormLabel>
            Activities & Organizations
            {activities.length > 0 && (
              <span className="ml-2 text-xs text-muted-foreground">
                ({activities.length} total)
              </span>
            )}
          </FormLabel>

          {totalPages > 1 && (
            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setActivityPage(activityPage - 1)}
                disabled={activityPage === 1}
              >
                <span className="text-xs">←</span>
              </Button>
              <span className="text-xs text-muted-foreground px-1">
                {activityPage}/{totalPages}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setActivityPage(activityPage + 1)}
                disabled={activityPage === totalPages}
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
          onClick={addActivity}
        >
          <IconPlus className="h-4 w-4 mr-2" />
          Add Activity
        </Button>
      </div>
      <div className="space-y-2">
        {currentActivities.map((activity, index) => {
          const actualIndex = startIndex + index;
          return (
            <div key={actualIndex} className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <div className="flex items-center justify-center w-6 h-10 text-xs text-muted-foreground">
                  {actualIndex + 1}
                </div>
                <Input
                  placeholder="e.g., President of Computer Science Club"
                  value={activity}
                  onChange={(e) =>
                    updateActivity(actualIndex, e.target.value)
                  }
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeActivity(actualIndex)}
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

