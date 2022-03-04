// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { setTheme } from '../utilities/storybook';

export default {
  title: 'Badge',
  argTypes: {
    circular: { control: 'boolean' },
    fill: {
      control: 'select',
      options: ['accent-primary', 'accent-secondary']
    },
    color: { control: 'select', options: ['foo', 'bar'] }
  },
  parameters: {
    actions: {
      disabled: true
    }
  },
  decorators: [
    story => `<style>
    jp-badge {
      --badge-fill-accent-primary: #cf4073;
      --badge-fill-accent-secondary: #0078d4;
      --badge-color-foo: hsl(0, 0%, 100%);
      --badge-color-bar: grey;
    }
  </style>
  ${story()}`
  ]
};

const Template = (
  args,
  { globals: { backgrounds, accent }, parameters }
): string => {
  setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-badge
    ${args.circular ? 'circular' : ''}
    fill="${args.fill}"
    color="${args.color}"
  >
  </jp-badge>`;
};

export const Default = Template.bind({});
Default.args = {
  circular: true,
  fill: 'accent-primary',
  color: 'foo'
};

export const Square = Template.bind({});
Square.args = {
  ...Default.args,
  circular: false
};
