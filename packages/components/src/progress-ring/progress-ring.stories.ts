// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { setTheme } from '../utilities/storybook';

export default {
  title: 'Progress Ring',
  argTypes: {
    min: { control: 'number', min: 0 },
    max: { control: 'number', min: 0 },
    value: { control: 'number', min: 0 },
    paused: { control: 'boolean' },
    height: { control: 'number', min: 4 }
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
  return `<jp-progress-ring
    ${typeof args.min === 'number' ? `min="${args.min}"` : ''}
    ${typeof args.max === 'number' ? `max="${args.max}"` : ''}
    ${typeof args.value === 'number' ? `value="${args.value}"` : ''}
    ${args.paused ? 'paused="true"' : ''}
    ${
      typeof args.height === 'number' ? `style="height: ${args.height}px;"` : ''
    }
  >
  </jp-progress-ring>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  min: null,
  max: null,
  value: null,
  paused: false,
  height: null
};

export const WithValue: StoryObj = { render: Template.bind({}) };
WithValue.args = {
  ...Default.args,
  min: 0,
  max: 50,
  value: 30
};

export const Paused: StoryObj = { render: Template.bind({}) };
Paused.args = {
  ...WithValue.args,
  paused: true
};
