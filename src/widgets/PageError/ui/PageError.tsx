import cn from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();
  return (
    <div className={cn(classes.PageError)} data-testid="PageError">
      <div>
        {t('Произошла ошибка')}
      </div>
      <div>
        {t('попробуйте позже')}
      </div>
    </div>
  );
};
