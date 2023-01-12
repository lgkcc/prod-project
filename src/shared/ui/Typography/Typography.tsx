import { FC, ReactNode } from 'react';
import cn from 'shared/lib/classNames/classNames';
import classes from './Typography.module.scss';

export enum TypographyTheme {
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TypographySize {
  m = 'size_m',
  l = 'size_l',
  xl = 'size_xl',
}

interface TypographyProps {
    additionalCls?: string;
    theme?: TypographyTheme;
    size?: TypographySize;
    children: ReactNode;
    title?: boolean;
}

export const Typography:FC<TypographyProps> = (props) => {
  const {
    additionalCls, theme = TypographyTheme.PRIMARY, size = TypographySize.l, children, title,
  } = props;
  return (
    <>
      {title
        ? <h2 className={cn(classes.Typography, {}, [additionalCls, classes[theme], classes[size]])}>{children}</h2>
        : <p className={cn(classes.Typography, {}, [additionalCls, classes[theme], classes[size]])}>{children}</p>}
    </>
  );
};
