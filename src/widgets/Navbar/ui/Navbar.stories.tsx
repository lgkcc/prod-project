import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {

  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {};
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
