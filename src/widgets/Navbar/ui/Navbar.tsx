import { FC } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={cn(classes.Navbar)}>
      <div className={classes.links}>
        <AppLink to="/" theme={AppLinkTheme.BAR}>{t('Главная')}</AppLink>
        <AppLink to="/about" theme={AppLinkTheme.BAR}>{t('О нас')}</AppLink>
      </div>
    </div>
  );
};
