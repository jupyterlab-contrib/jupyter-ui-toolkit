// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';

export default {
  title: 'Components/Toolbar',
  argTypes: {
    startSlot: { control: 'boolean' },
    endSlot: { control: 'boolean' }
  },
  parameters: {
    actions: {
      disabled: true
    }
  },
  decorators: [
    story => `<style>
      jp-toolbar > * {
        margin-top: auto;
        margin-bottom: auto;
      }
    </style>
    ${story()}`
  ]
} as Meta;

const Template: StoryFn = (args): string => {
  return `<jp-toolbar>
    <jp-button>Button</jp-button>
    ${args.endSlot ? '<jp-button slot="end">End Slot Button</jp-button>' : ''}
    ${
      args.startSlot
        ? '<jp-button slot="start">Start Slot Button</jp-button>'
        : ''
    }
    <jp-select>
      <jp-option>Option 1</jp-option>
      <jp-option>Second option</jp-option>
      <jp-option>Option 3</jp-option>
    </jp-select>
    <jp-checkbox>Checkbox 1</jp-checkbox>
    <jp-checkbox>Checkbox 2</jp-checkbox>
  </jp-toolbar>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  startSlot: false,
  endSlot: false
};
