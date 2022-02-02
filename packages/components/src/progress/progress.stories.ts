// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { setTheme } from '../utilities/storybook';

export default {
  title: 'Progress',
  argTypes: {
    min: { control: 'number', min: 0 },
    max: { control: 'number', min: 0 },
    value: { control: 'number', min: 0 },
    paused: { control: 'boolean' },
    height: { control: 'number', min: 4 }
  },
  decorators: [
    story => `<div style="width: 300px;">
    ${story()}
  </div>`
  ]
};

const Template = (
  args,
  { globals: { backgrounds, accent }, parameters }
): string => {
  setTheme(accent, parameters.backgrounds, backgrounds);
  return `<jp-progress
    ${typeof args.min === 'number' ? `min="${args.min}"` : ''}
    ${typeof args.max === 'number' ? `max="${args.max}"` : ''}
    ${typeof args.value === 'number' ? `value="${args.value}"` : ''}
    ${args.paused ? 'paused="true"' : ''}
    ${
      typeof args.height === 'number' ? `style="height: ${args.height}px;"` : ''
    }
  >
  </jp-progress>`;
};

export const Default = Template.bind({});
Default.args = {
  min: null,
  max: null,
  value: null,
  paused: false,
  height: null
};

export const WithValue = Template.bind({});
WithValue.args = {
  ...Default.args,
  min: 0,
  max: 50,
  value: 30
};

export const Paused = Template.bind({});
Paused.args = {
  ...WithValue.args,
  paused: true
};
