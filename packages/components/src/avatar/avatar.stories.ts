// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { setTheme } from '../utilities/storybook';

export default {
  title: 'Avatar',
  argTypes: {
    shape: { control: 'select', options: ['circle', 'square', 'default'] },
    fill: {
      control: 'select',
      options: ['none', 'accent-primary', 'accent-secondary']
    },
    color: { control: 'select', options: ['none', 'foo', 'bar'] },
    image: { control: 'boolean' }
  },
  parameters: {
    actions: {
      disabled: true
    }
  },
  decorators: [
    story => `<style>
    jp-avatar {
      --avatar-fill-accent-primary: #cf4073;
      --avatar-fill-accent-secondary: #0078d4;
      --avatar-color-foo: hsl(0, 0%, 100%);
      --avatar-color-bar: grey;
      --avatar-text-ratio: 3;
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

  return `<jp-avatar
    alt="John's avatar"
    link="#"
    shape="${args.shape}"
    ${args.fill !== 'none' ? `fill="${args.fill}"` : ''}
    ${args.color !== 'none' ? `color="${args.color}"` : ''}
  >
    ${
      args.image
        ? '<img class="image" slot="media" src="https://via.placeholder.com/32" />'
        : 'JS'
    }
  </jp-avatar>`;
};

export const Default = Template.bind({});
Default.args = {
  shape: 'circle',
  fill: 'none',
  color: 'none',
  image: false
};

export const Square = Template.bind({});
Square.args = {
  ...Default.args,
  fill: 'accent-primary',
  color: 'foo',
  shape: 'square'
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  image: true
};
