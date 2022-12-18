import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {

  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {};
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
