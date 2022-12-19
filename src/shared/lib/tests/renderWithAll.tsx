import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';

export interface renderWithRouterOptions {
  route?: string;
}

const renderWithAll = (component: ReactNode, options: renderWithRouterOptions = {}) => {
  const { route = '/' } = options;
  return (
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  );
};

export default renderWithAll;
