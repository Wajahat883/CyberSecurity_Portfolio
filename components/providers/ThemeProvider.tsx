'use client';

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/** Inline script injected before paint to set the initial theme and avoid FOUC. */
export const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    // Dark-first brand: default to dark unless the visitor explicitly chose light.
    var theme = stored === 'light' ? 'light' : 'dark';
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  // Sync React state with whatever the init script applied.
  useEffect(() => {
    const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
    setTheme(current);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(next);
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* storage unavailable — ignore */
      }
      return next;
    });
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
