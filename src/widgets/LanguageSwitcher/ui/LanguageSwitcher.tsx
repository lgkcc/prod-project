import { FC } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher:FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();
  return (
    <Button
      className={cn(classes.LanguageSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
    >
      {i18n.language.toUpperCase()}
    </Button>
  );
};
