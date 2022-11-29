import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

const ThemeProvider:FC = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const themeMemo = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);
  return (
    <ThemeContext.Provider value={themeMemo}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
