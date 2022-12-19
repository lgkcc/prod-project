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
export const Background = Template.bind({});
export const BackgroundInverted = Template.bind({});
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
Background.args = {
  theme: ButtonTheme.BACKGROUND,
  children: 'Click me!',
};
BackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
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
