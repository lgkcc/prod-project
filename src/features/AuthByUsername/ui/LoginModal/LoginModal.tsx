import { FC } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import classes from './LoginModal.module.scss';

interface LoginModalProps {
    additionalCls?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal:FC<LoginModalProps> = ({ additionalCls, isOpen, onClose }) => (
  <Modal
    additionalCls={cn(classes.LoginModal, {}, [additionalCls])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </Modal>
);
