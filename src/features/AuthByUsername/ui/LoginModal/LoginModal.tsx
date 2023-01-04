import { FC } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

interface LoginModalProps {
    additionalCls?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal:FC<LoginModalProps> = ({ additionalCls, isOpen, onClose }) => (
  <Modal
    additionalCls={cn(undefined, {}, [additionalCls])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </Modal>
);
