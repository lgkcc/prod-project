import React from 'react';
import '../../src/app/styles/index.scss'
import {addDecorator} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
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

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.Light))
addDecorator(withRouter)
