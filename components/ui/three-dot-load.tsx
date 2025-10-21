import { cn } from '@/lib/utils';

export const ThreeDotLoad = (): React.ReactElement => {
  return (
    <div className="flex gap-2 items-center">
      {[1, 2, 3].map((idx) => (
        <div
          key={idx}
          className={cn(
            'w-1 h-1 bg-current rounded-full animate-bounce will-change-transform',
            idx === 2 ? 'delay-150' : idx === 3 ? 'delay-300' : '',
          )}
        />
      ))}
    </div>
  );
};
