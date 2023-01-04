import { FC, useCallback, useState } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = () => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />

      <div className={cn(classes.Navbar)}>
        <div className={classes.links}>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <Button theme={ButtonTheme.CLEAR} onClick={onShowModal}>Войти</Button>
        </div>
      </div>
    </>
  );
};
