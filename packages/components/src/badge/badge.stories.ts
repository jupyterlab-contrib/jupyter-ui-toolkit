// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { StoryFn, Meta, StoryObj} from '@storybook/html';
import { setTheme } from '../utilities/storybook';

export default {
  title: 'Badge',
  argTypes: {
    circular: { control: 'boolean' },
    fill: {
      control: 'select',
      options: ['none', 'accent-primary', 'accent-secondary']
    },
    color: { control: 'select', options: ['none', 'foo', 'bar'] }
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
} as Meta;

const Template: StoryFn = (
  args,
  context // { globals: { backgrounds, accent }, parameters }
): string => {
  // setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-badge
    ${args.circular ? 'circular' : ''}
    ${args.fill !== 'none' ? `fill="${args.fill}"` : ''}
    ${args.color !== 'none' ? `color="${args.color}"` : ''}
  >
    42
  </jp-badge>`;
};

export const Default: StoryObj = {render: Template.bind({})};
Default.args = {
  circular: true,
  fill: 'none',
  color: 'none'
};

export const Square: StoryObj = {render: Template.bind({})};
Square.args = {
  ...Default.args,
  circular: false,
  fill: 'accent-primary',
  color: 'foo'
};
