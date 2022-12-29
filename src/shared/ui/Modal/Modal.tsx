import {
  FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import classes from './Modal.module.scss';

interface ModalProps {
    additionalCls?: string;
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: () => void;
    title?: ReactNode;
}

export const Modal:FC<ModalProps> = ({
  children, isOpen, setIsOpen, additionalCls, title,
}) => {
  const [isClosed, setIsClosed] = useState(false);
  const mods = {
    [classes.open]: isOpen,
    [classes.close]: isClosed,
  };
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const closeModal = useCallback(() => {
    setIsClosed(true);
    timerRef.current = setTimeout(() => {
      setIsOpen();
      setIsClosed(false);
    }, 250);
  }, [setIsOpen]);
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);
  return (
    <Portal>
      <div className={cn(classes.Modal, mods, [additionalCls])} data-testid="Modal">
        {/* eslint-disable-next-line */}
        <div className={classes.overlay} onClick={closeModal} data-testid="Overlay">
          {/* eslint-disable-next-line */}
          <div className={classes.content} onClick={(e) => e.stopPropagation()}>
            <div className={classes.header}>
              <div className={classes.title}>
                {title}
              </div>
              {/* eslint-disable-next-line */}
              <div className={classes.closeButton} onClick={closeModal} data-testid="Exit">
                X
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
