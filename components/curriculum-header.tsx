'use client';

import { useCompany } from '@/providers/company-provider';
import { BuildingIcon } from 'lucide-react';
import { ReactElement, useEffect, useState } from 'react';

export const CurriculumHeader = () => {
  const { company_name, loading: companyLoading } = useCompany();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (companyLoading) return;
  });

  useEffect(() => {
    if (!companyLoading) {
      const t = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [companyLoading]);

  const loadingFallback = (): ReactElement => {
    return (
      <div
        className={`flex gap-2 items-center transition-opacity duration-300 ease-in-out ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span
          aria-hidden="true"
          className="inline-block h-4 bg-gray-200 rounded animate-pulse"
          style={{ width: 30 }}
        />
        <span
          aria-hidden="true"
          className="inline-block h-4 bg-gray-200 rounded animate-pulse"
          style={{ width: 48 }}
        />
      </div>
    );
  };

  if (companyLoading) {
    return loadingFallback();
  }

  return (
    <div
      className={`flex gap-2 items-center transition-opacity duration-300 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <BuildingIcon className="w-4 h-4" />
      <span className="font-semibold">{company_name}</span>
    </div>
  );
};
