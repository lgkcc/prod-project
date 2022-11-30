import { FC, useState } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((prev) => !prev);
  return (
    <div className={cn(classes.Sidebar, { [classes.collapsed]: collapsed })}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button onClick={toggleCollapsed}>Toggle</Button>
      <div className={classes.switcher}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
