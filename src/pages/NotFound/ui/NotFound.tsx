import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div>
      {`${t('Не найдено')} (404)`}
    </div>
  );
};

export default NotFound;
