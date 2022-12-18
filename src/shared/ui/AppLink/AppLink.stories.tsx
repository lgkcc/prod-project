import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {

  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
export const PrimaryDark = Template.bind({});

export const Inverted = Template.bind({});
export const InvertedDark = Template.bind({});

export const Bar = Template.bind({});
export const BarDark = Template.bind({});

Primary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Click me!',
};
Inverted.args = {
  theme: AppLinkTheme.INVERTED,
  children: 'Click me!',
};
Bar.args = {
  theme: AppLinkTheme.BAR,
  children: 'Click me!',
};
PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Click me!',
};
InvertedDark.args = {
  theme: AppLinkTheme.INVERTED,
  children: 'Click me!',
};
BarDark.args = {
  theme: AppLinkTheme.BAR,
  children: 'Click me!',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];
InvertedDark.decorators = [ThemeDecorator(Theme.Dark)];
BarDark.decorators = [ThemeDecorator(Theme.Dark)];
