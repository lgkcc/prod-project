import { FC, useState } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ToggleCollapsed } from 'widgets/Sidebar/ui/ToggleCollapsed';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import MainIcon from 'shared/assets/icons/Main.svg';
import AboutIcon from 'shared/assets/icons/About.svg';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((prev) => !prev);
  return (
    <div className={cn(classes.Sidebar, { [classes.collapsed]: collapsed })} data-testid="sidebar">
      <div className={classes.links}>
        <AppLink to="/" theme={AppLinkTheme.PRIMARY} className={classes.link}>
          <MainIcon />
          <span className={classes.linkText}>{t('Главная')}</span>
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.PRIMARY} className={classes.link}>
          <AboutIcon />
          <span className={classes.linkText}>{t('О нас')}</span>
        </AppLink>
      </div>
      <div className={classes.switcher}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
      <ToggleCollapsed
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
      />
    </div>
  );
};
