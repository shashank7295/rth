'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/stores/theme-store';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    // Force dark theme always
    setTheme('dark');
    localStorage.setItem('theme-preference', 'dark');
  }, [setTheme]);

  return <>{children}</>;
}
