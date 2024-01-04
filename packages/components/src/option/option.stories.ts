// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';

export default {
  title: 'Components/Option',
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    selected: { control: 'boolean' }
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
} as Meta;

const Template: StoryFn = (args): string => {
  return `<jp-option 
    ${args.disabled ? 'disabled' : ''}
    ${args.selected ? 'selected' : ''}
  >
    ${args.label}
  </jp-option>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Option Label',
  disabled: false,
  selected: false
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  disabled: true
};

export const WithSelected: StoryObj = { render: Template.bind({}) };
WithSelected.args = {
  ...Default.args,
  selected: true
};
