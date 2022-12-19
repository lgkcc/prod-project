import { FC } from 'react';
import cn from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar:FC<NavbarProps> = () => (
  <div className={cn(classes.Navbar)}>
    <div className={classes.links} />
  </div>
);
