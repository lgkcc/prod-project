import {
  FC, useCallback, useState,
} from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData';
import { userActions } from 'entities/User';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = () => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const { t } = useTranslation();

  const user = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logoutData());
  }, [dispatch]);

  if (user) {
    return (
      <div className={cn(classes.Navbar)}>
        <div className={classes.links}>
          <Button theme={ButtonTheme.CLEAR} onClick={onLogout}>{t('Выйти')}</Button>
        </div>
      </div>
    );
  }
  return (
    <>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}

      <div className={cn(classes.Navbar)}>
        <div className={classes.links}>
          <Button theme={ButtonTheme.CLEAR} onClick={onShowModal}>{t('Войти')}</Button>
        </div>
      </div>
    </>
  );
};
