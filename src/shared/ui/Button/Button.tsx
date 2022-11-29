import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import cn from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, ...otherProps
  } = props;
  return (
    <button
      type="button"
      {...otherProps}
      className={
        cn(classes.Button, {}, [className, classes[theme]])
      }
    >
      {children}
    </button>
  );
};
