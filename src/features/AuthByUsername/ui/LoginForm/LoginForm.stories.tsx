import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {

  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args}>Modal Content</LoginForm>
);

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {
  isOpen: true,
};
Light.decorators = [StoreDecorator({ login: { login: 'admin', password: '123' } })];
Dark.args = {
  isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({ login: { login: 'admin', password: '123' } })];
