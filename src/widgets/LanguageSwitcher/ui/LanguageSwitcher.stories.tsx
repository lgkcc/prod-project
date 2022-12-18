import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

export default {
  title: 'widgets/LanguageSwitcher',
  component: LanguageSwitcher,
  argTypes: {

  },
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => <LanguageSwitcher {...args} />;

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {};
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
