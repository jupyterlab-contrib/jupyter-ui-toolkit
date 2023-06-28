// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { getFaIcon, setTheme } from '../utilities/storybook';

export default {
  title: 'Breadcrumb Item',
  argTypes: {
    href: { control: 'boolean' },
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' }
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
};

const Template: StoryFn = (args, context): string => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-breadcrumb-item 
    ${args.href ? 'href="#"' : ''}
    >
      ${args.startIcon ? getFaIcon('folder', 'start') : ''}
      Breadcrumb item
      ${args.endIcon ? getFaIcon('robot', 'end') : ''}
    </jp-breadcrumb-item>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  href: true,
  startIcon: false,
  endIcon: false
};

export const WithoutHref: StoryObj = { render: Template.bind({}) };
WithoutHref.args = {
  ...Default.args,
  href: false
};

export const WithStartIcon: StoryObj = { render: Template.bind({}) };
WithStartIcon.args = {
  ...Default.args,
  startIcon: true
};

export const WithEndIcon: StoryObj = { render: Template.bind({}) };
WithEndIcon.args = {
  ...Default.args,
  endIcon: true
};
