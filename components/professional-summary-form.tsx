'use client';

import { Textarea } from './ui/textarea';

type Props = {
  summary: string | null;
};

export const ProfessionalSummaryForm: React.FC<Props> = ({
  summary,
}: Props) => {
  return (
    <Textarea
      defaultValue={summary ?? ''}
      placeholder="Write your Professional Summary here"
    />
  );
};
