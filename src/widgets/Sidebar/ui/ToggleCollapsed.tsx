import { FC } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './Sidebar.module.scss';

interface ToggleCollapsedProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

export const ToggleCollapsed:FC<ToggleCollapsedProps> = ({ collapsed, toggleCollapsed }) => (
  <Button
    onClick={toggleCollapsed}
    className={cn(classes.toggleCollapsed, { [classes.revert]: !collapsed })}
    theme={ButtonTheme.BACKGROUND_INVERTED}
    square
    size={ButtonSize.l}
  >
    <span>{'>'}</span>
  </Button>
);
