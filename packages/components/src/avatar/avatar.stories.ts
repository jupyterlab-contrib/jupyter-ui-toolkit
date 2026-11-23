// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { StoryFn, Meta, StoryObj } from '@storybook/html';

// Placeholder avatar image.
const AVATAR_IMAGE =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">' +
      '<rect width="32" height="32" fill="#9e9e9e"/>' +
      '<circle cx="16" cy="12" r="6" fill="#f5f5f5"/>' +
      '<path d="M5 32a11 11 0 0 1 22 0z" fill="#f5f5f5"/>' +
      '</svg>'
  );

export default {
  title: 'Components/Avatar',
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
} as Meta;

const Template: StoryFn = (args, context): string => {
  return `<jp-avatar
    alt="John's avatar"
    link="#"
    shape="${args.shape}"
    ${args.fill !== 'none' ? `fill="${args.fill}"` : ''}
    ${args.color !== 'none' ? `color="${args.color}"` : ''}
  >
    ${
      args.image
        ? `<img class="image" slot="media" src="${AVATAR_IMAGE}" />`
        : 'JS'
    }
  </jp-avatar>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  shape: 'circle',
  fill: 'none',
  color: 'none',
  image: false
};

export const Square: StoryObj = { render: Template.bind({}) };
Square.args = {
  ...Default.args,
  fill: 'accent-primary',
  color: 'foo',
  shape: 'square'
};

export const WithImage: StoryObj = { render: Template.bind({}) };
WithImage.args = {
  ...Default.args,
  image: true
};
