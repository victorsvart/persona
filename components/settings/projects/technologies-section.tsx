'use client';

import { FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IconPlus, IconX } from '@tabler/icons-react';

interface TechnologiesSectionProps {
  technologies: string[];
  currentTechnologies: string[];
  technologyPage: number;
  totalPages: number;
  startIndex: number;
  setTechnologyPage: (page: number) => void;
  updateTechnology: (index: number, value: string) => void;
  removeTechnology: (index: number) => void;
  addTechnology: () => void;
}

export function TechnologiesSection({
  technologies,
  currentTechnologies,
  technologyPage,
  totalPages,
  startIndex,
  setTechnologyPage,
  updateTechnology,
  removeTechnology,
  addTechnology,
}: TechnologiesSectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <FormLabel>
            Technologies Used
            {technologies.length > 0 && (
              <span className="ml-2 text-xs text-muted-foreground">
                ({technologies.length} total)
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
                onClick={() => setTechnologyPage(technologyPage - 1)}
                disabled={technologyPage === 1}
              >
                <span className="text-xs">←</span>
              </Button>
              <span className="text-xs text-muted-foreground px-1">
                {technologyPage}/{totalPages}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setTechnologyPage(technologyPage + 1)}
                disabled={technologyPage === totalPages}
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
          onClick={addTechnology}
        >
          <IconPlus className="h-4 w-4 mr-2" />
          Add Technology
        </Button>
      </div>
      <div className="space-y-2">
        {currentTechnologies.map((technology, index) => {
          const actualIndex = startIndex + index;
          return (
            <div key={actualIndex} className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <div className="flex items-center justify-center w-6 h-10 text-xs text-muted-foreground">
                  {actualIndex + 1}
                </div>
                <Input
                  placeholder="e.g., React, Node.js, PostgreSQL"
                  value={technology}
                  onChange={(e) =>
                    updateTechnology(actualIndex, e.target.value)
                  }
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeTechnology(actualIndex)}
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

