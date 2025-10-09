'use client';
type Props = {
  resumeHTML: string;
};
export const ApplicationResume = ({ resumeHTML }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-muted/30 rounded-xl min-h-[100vh] p-4">
      <div
        className="bg-white text-black shadow-xl rounded-md w-full max-w-[794px] aspect-[1/1.4142] overflow-y-auto p-10 print:shadow-none"
        dangerouslySetInnerHTML={{ __html: resumeHTML }}
      />
    </div>
  );
};
