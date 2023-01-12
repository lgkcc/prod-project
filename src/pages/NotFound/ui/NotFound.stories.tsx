import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import NotFound from './NotFound';

export default {
  title: 'pages/NotFound',
  component: NotFound,
  argTypes: {

  },
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = () => <NotFound />;

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {};
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
