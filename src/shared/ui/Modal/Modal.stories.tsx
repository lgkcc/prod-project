import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal as ModalComponent } from './Modal';

export default {
  title: 'shared/Modal',
  component: ModalComponent,
  argTypes: {

  },
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args) => (
  <ModalComponent {...args} />
);

export const Light = Template.bind({});

Light.args = {
  isOpen: true,
  children: 'Lorem',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem',
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
