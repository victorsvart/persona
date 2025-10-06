'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type CompanyProviderValue = {
  company_name: string;
  application_id: string;
  setCompanyName: (name: string) => void;
  setApplicationId: (id: string) => void;
};

const CompanyContext = createContext<CompanyProviderValue | undefined>(
  undefined,
);

type CompanyProviderProps = {
  children: ReactNode;
};

export function CompanyProvider({ children }: CompanyProviderProps) {
  const [companyName, setCompanyName] = useState('');
  const [applicationId, setApplicationId] = useState('');

  return (
    <CompanyContext.Provider
      value={{
        company_name: companyName,
        application_id: applicationId,
        setCompanyName,
        setApplicationId,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompany must be used within a CompanyProvider');
  }
  return context;
}
