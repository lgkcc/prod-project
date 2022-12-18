import React from 'react';
import '../../src/app/styles/index.scss'
import {addDecorator} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
import {i18nDecorator} from "../../src/shared/config/storybook/i18nDecorator/I18nDecorator";
import {withRouter} from "storybook-addon-react-router-v6";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ru', title: 'Русский' },
        { value: 'en', title: 'English' },
      ],
      showName: true,
    },
  },
};

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.Light))
addDecorator(i18nDecorator)
addDecorator(withRouter)
