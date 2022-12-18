import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {

  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
export const Outline = Template.bind({});
export const ClearDark = Template.bind({});
export const OutlineDark = Template.bind({});
Clear.args = {
  theme: ButtonTheme.CLEAR,
  children: 'Click me!',
};
Outline.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Click me!',
};
ClearDark.args = {
  theme: ButtonTheme.CLEAR,
  children: 'Click me!',
};

ClearDark.decorators = [ThemeDecorator(Theme.Dark)];
OutlineDark.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Click me!',
};
OutlineDark.decorators = [ThemeDecorator(Theme.Dark)];
