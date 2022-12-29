import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal as ModalComponent } from './Modal';

export default {
  title: 'shared/Modal',
  component: ModalComponent,
  argTypes: {

  },
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args) => (
  <ModalComponent {...args}>Modal Content</ModalComponent>
);

export const Modal = Template.bind({});

Modal.args = {
  isOpen: true,
};
