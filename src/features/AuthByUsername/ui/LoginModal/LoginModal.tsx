import { FC } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { Typography, TypographySize, TypographyTheme } from 'shared/ui/Typography/Typography';
import { useTranslation } from 'react-i18next';

interface LoginModalProps {
    additionalCls?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal:FC<LoginModalProps> = ({ additionalCls, isOpen, onClose }) => {
  const { t } = useTranslation();
  return (
    <Modal
      additionalCls={cn(undefined, {}, [additionalCls])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
      title={(
        <Typography
          title
          theme={TypographyTheme.BACKGROUND}
          size={TypographySize.xl}
        >
          {t('Авторизация')}
        </Typography>
      )}
    >
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
