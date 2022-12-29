import { FC, useState } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(false)}
        title="Авторизация"
      >
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line i18next/no-literal-string */}
        Введите логин и пароль
      </Modal>
      <div className={cn(classes.Navbar)}>
        <div className={classes.links}>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <Button theme={ButtonTheme.CLEAR} onClick={() => setIsOpen(true)}>Войти</Button>
        </div>
      </div>
    </>
  );
};
