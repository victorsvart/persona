'use client';

import { useCompany } from '@/providers/company-provider';
import { BuildingIcon } from 'lucide-react';

export const CurriculumHeader = () => {
  const { company_name } = useCompany();

  return (
    <div className="flex items-center gap-2">
      <BuildingIcon className="w-4 h-4" />
      <span className="font-semibold">{company_name}</span>
    </div>
  );
};
