import { FC, useCallback } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, TypographyTheme } from 'shared/ui/Typography/Typography';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLogin } from '../../model/selectors/getLogin/getLogin';
import { loginActions } from '../../model/slices/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    additionalCls?: string;
}

export const LoginForm:FC<LoginFormProps> = () => {
  const dispatch = useDispatch();
  const {
    login, status, password, error = '',
  } = useSelector(getLogin);
  const isLoading = status === 'loading';
  const { t } = useTranslation();
  const onChangeLogin = useCallback((value: string) => {
    dispatch(loginActions.setLogin(value));
  }, [dispatch]);
  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);
  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ login, password }) as any);
  }, [dispatch, login, password]);
  return (
    <div className={cn(classes.LoginForm)}>
      <Typography theme={TypographyTheme.ERROR}>
        {t(error)}
      </Typography>
      <Input
        type="text"
        placeholder={t('Логин')}
        className={classes.input}
        autoFocus
        onChange={onChangeLogin}
        value={login}
      />
      <Input
        type="text"
        placeholder={t('Пароль')}
        className={classes.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        disabled={isLoading}
        onClick={onLoginClick}
        theme={ButtonTheme.BACKGROUND}
        className={classes.loginBtn}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
