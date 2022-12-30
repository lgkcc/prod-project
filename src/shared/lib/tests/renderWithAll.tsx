import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';
import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export interface renderWithRouterOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

const renderWithAll = (component: ReactNode, options: renderWithRouterOptions = {}) => {
  const { route = '/', initialState } = options;
  return (
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};

export default renderWithAll;
