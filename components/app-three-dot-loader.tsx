import { Dot } from 'lucide-react';

export const ThreeDotLoading = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Dot className="size-8 animate-bounce [animation-delay:-0.3s]" />
      <Dot className="size-8 animate-bounce [animation-delay:-0.15s]" />
      <Dot className="size-8 animate-bounce" />
    </div>
  );
};
