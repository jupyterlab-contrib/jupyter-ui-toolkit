// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { setTheme } from '../utilities/storybook';

export default {
  title: 'Components/Listbox',
  argTypes: {
    isDisabled: { control: 'boolean' },
    multiple: { control: 'boolean' }
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
} as Meta;

const Template: StoryFn = (args, context): string => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-listbox
    ${args.isDisabled ? 'disabled' : ''}
    ${args.multiple ? 'multiple' : ''}
  >
    <jp-option value="1">Option 1</jp-option>
    <jp-option value="2">Option 2</jp-option>
    <jp-option value="3">Option 3</jp-option>
  </jp-listbox>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  isDisabled: false,
  multiple: false
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};
