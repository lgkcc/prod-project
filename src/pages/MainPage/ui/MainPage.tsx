import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

function MainPage() {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');
  const onChange = (val: string) => setValue(val);
  return (
    <div>
      {t('Главная страница')}
      <Input value={value} onChange={onChange} placeholder="blabla" />
    </div>
  );
}

export default MainPage;
