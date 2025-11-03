'use client';

import { FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IconPlus, IconX } from '@tabler/icons-react';

interface HighlightsSectionProps {
  highlights: string[];
  currentHighlights: string[];
  highlightPage: number;
  totalPages: number;
  startIndex: number;
  setHighlightPage: (page: number) => void;
  updateHighlight: (index: number, value: string) => void;
  removeHighlight: (index: number) => void;
  addHighlight: () => void;
}

export function HighlightsSection({
  highlights,
  currentHighlights,
  highlightPage,
  totalPages,
  startIndex,
  setHighlightPage,
  updateHighlight,
  removeHighlight,
  addHighlight,
}: HighlightsSectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <FormLabel>
            Project Highlights
            {highlights.length > 0 && (
              <span className="ml-2 text-xs text-muted-foreground">
                ({highlights.length} total)
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
                onClick={() => setHighlightPage(highlightPage - 1)}
                disabled={highlightPage === 1}
              >
                <span className="text-xs">←</span>
              </Button>
              <span className="text-xs text-muted-foreground px-1">
                {highlightPage}/{totalPages}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => setHighlightPage(highlightPage + 1)}
                disabled={highlightPage === totalPages}
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
          onClick={addHighlight}
        >
          <IconPlus className="h-4 w-4 mr-2" />
          Add Highlight
        </Button>
      </div>
      <div className="space-y-2">
        {currentHighlights.map((highlight, index) => {
          const actualIndex = startIndex + index;
          return (
            <div key={actualIndex} className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <div className="flex items-center justify-center w-6 h-10 text-xs text-muted-foreground">
                  {actualIndex + 1}
                </div>
                <Input
                  placeholder="e.g., Reduced load time by 50% through optimization"
                  value={highlight}
                  onChange={(e) =>
                    updateHighlight(actualIndex, e.target.value)
                  }
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeHighlight(actualIndex)}
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

