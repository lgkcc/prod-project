import { useContext, useEffect } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../../app/providers/ThemeProvider/lib/ThemeContext';

export interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme():UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };
  return { theme, toggleTheme };
}
