// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { setTheme } from '../utilities/storybook';

export default {
  title: 'Option',
  argTypes: {
    label: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isSelected: { control: 'boolean' }
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
  return `<jp-option 
    ${args.isDisabled ? 'disabled' : ''}
    ${args.isSelected ? 'selected' : ''}
  >
    ${args.label}
  </jp-option>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Option Label',
  isDisabled: false,
  isSelected: false
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};

export const WithSelected: StoryObj = { render: Template.bind({}) };
WithSelected.args = {
  ...Default.args,
  isSelected: true
};
