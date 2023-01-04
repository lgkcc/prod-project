import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Theme } from 'app/providers/ThemeProvider';
import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  m = 'size_m',
  l = 'size_l',
  xl = 'size_xl',
}

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.BACKGROUND_INVERTED,
    square = false,
    size = ButtonSize.m,
    ...otherProps
  } = props;
  return (
    <button
      type="button"
      {...otherProps}
      className={
        cn(classes.Button, { [classes.square]: square }, [className, classes[theme], classes[size]])
      }
    >
      {children}
    </button>
  );
};
