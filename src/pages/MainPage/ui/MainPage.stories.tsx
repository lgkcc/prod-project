import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {

  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const LightMainPage = Template.bind({});
export const DarkMainPage = Template.bind({});

LightMainPage.args = {};
DarkMainPage.args = {};
DarkMainPage.decorators = [ThemeDecorator(Theme.Dark)];
