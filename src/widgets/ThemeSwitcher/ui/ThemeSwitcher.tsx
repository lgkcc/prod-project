import { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cn from 'shared/lib/classNames/classNames';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
      className={cn(classes.ThemeSwitcher, {}, [className])}
    >
      <ThemeIcon fill={theme === Theme.Dark ? '#242526' : 'white'} />
    </Button>
  );
};
