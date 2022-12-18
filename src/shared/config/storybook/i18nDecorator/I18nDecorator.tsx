import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Story } from '@storybook/react';
import i18n from 'shared/config/i18n/i18nForSb';

export const i18nDecorator = (story: () => Story, context: any) => {
  const { locale } = context.globals;
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>
    </Suspense>
  );
};
