'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormLabel } from '@/components/ui/form';
import { IconPlus, IconX } from '@tabler/icons-react';

interface CourseworkSectionProps {
  coursework: string[];
  currentCoursework: string[];
  courseworkPage: number;
  totalPages: number;
  startIndex: number;
  setCourseworkPage: (page: number) => void;
  updateCoursework: (index: number, value: string) => void;
  removeCoursework: (index: number) => void;
  addCoursework: () => void;
}

export function CourseworkSection({
  coursework,
  currentCoursework,
  courseworkPage,
  totalPages,
  startIndex,
  setCourseworkPage,
  updateCoursework,
  removeCoursework,
  addCoursework,
}: CourseworkSectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <FormLabel>
            Relevant Coursework
            {coursework.length > 0 && (
              <span className="ml-2 text-xs text-muted-foreground">
                ({coursework.length} total)
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
                onClick={() => setCourseworkPage(courseworkPage - 1)}
                disabled={courseworkPage === 1}
              >
                <span className="text-xs">←</span>
              </Button>
              <span className="text-xs text-muted-foreground px-1">
                {courseworkPage}/{totalPages}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setCourseworkPage(courseworkPage + 1)}
                disabled={courseworkPage === totalPages}
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
          onClick={addCoursework}
        >
          <IconPlus className="h-4 w-4 mr-2" />
          Add Course
        </Button>
      </div>
      <div className="space-y-2">
        {currentCoursework.map((course, index) => {
          const actualIndex = startIndex + index;
          return (
            <div key={actualIndex} className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <div className="flex items-center justify-center w-6 h-10 text-xs text-muted-foreground">
                  {actualIndex + 1}
                </div>
                <Input
                  placeholder="e.g., Data Structures and Algorithms"
                  value={course}
                  onChange={(e) =>
                    updateCoursework(actualIndex, e.target.value)
                  }
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeCoursework(actualIndex)}
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

