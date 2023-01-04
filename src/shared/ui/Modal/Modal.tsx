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
    onClose: () => void;
    title?: ReactNode;
    lazy?: boolean;
}

export const Modal:FC<ModalProps> = ({
  children, isOpen, onClose, additionalCls, title, lazy,
}) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const timerRefTwo = useRef<ReturnType<typeof setTimeout>>();
  const [isClosed, setIsClosed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const openModal = useCallback(() => {
    setIsOpened(false);
    timerRefTwo.current = setTimeout(() => {
      setIsOpened(true);
    }, 0);
  }, []);
  const closeModal = useCallback(() => {
    setIsClosed(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosed(false);
    }, 250);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      openModal();
    }
    return () => {
      setIsMounted(false);
    };
  }, [isOpen, openModal]);

  const mods = {
    [classes.open]: isOpened,
    [classes.close]: isClosed,
  };

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
      clearTimeout(timerRefTwo.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

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
