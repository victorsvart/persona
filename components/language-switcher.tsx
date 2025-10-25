'use client';

import * as React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { locales } from '@/i18n';
import { useRouter } from '@/lib/navigation';

type LanguageSwitcherProps = {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  showLabel?: boolean;
};

export function LanguageSwitcher({
  variant = 'ghost',
  size = 'default',
  showLabel = false,
}: LanguageSwitcherProps) {
  const t = useTranslations('common');
  const tLanguages = useTranslations('languages');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    // Create a cookie to remember the user's language preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Navigate to the same path with the new locale
    router.replace(pathname, { locale: newLocale as any });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className="gap-2">
          <Globe className="h-4 w-4" />
          {showLabel && (
            <span className="hidden sm:inline-block">
              {t('language')}
            </span>
          )}
          <span className="font-medium">
            {locale.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>{t('changeLanguage')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLanguageChange(loc)}
            className={`cursor-pointer ${locale === loc ? 'bg-accent' : ''}`}
          >
            <span className="flex items-center justify-between w-full">
              <span>{tLanguages(loc as 'en' | 'es' | 'pt-BR')}</span>
              {locale === loc && (
                <span className="ml-2 text-xs text-muted-foreground">✓</span>
              )}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

