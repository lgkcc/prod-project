import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {

  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = () => <PageError />;

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {};
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
