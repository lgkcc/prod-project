import { FC } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    BAR = 'bar'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = (props) => {
  const {
    children, to, className, theme = AppLinkTheme.PRIMARY, ...otherProps
  } = props;
  return (
    <Link to={to} className={cn(classes.AppLink, {}, [className, classes[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
