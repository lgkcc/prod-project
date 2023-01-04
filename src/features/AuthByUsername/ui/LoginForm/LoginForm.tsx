import { FC } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    additionalCls?: string;
}

export const LoginForm:FC<LoginFormProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={cn(classes.LoginForm)}>
      <Input type="text" placeholder="Логин" className={classes.input} autoFocus />
      <Input type="text" placeholder="Пароль" className={classes.input} />
      <Button theme={ButtonTheme.BACKGROUND} className={classes.loginBtn}>{t('войти')}</Button>
    </div>
  );
};
