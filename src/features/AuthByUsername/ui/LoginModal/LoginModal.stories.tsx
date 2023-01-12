import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginModal from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {

  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args}>Modal Content</LoginModal>
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
