// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { getFaIcon } from '../utilities/storybook/index.js';

export default {
  title: 'Components/Anchor',
  argTypes: {
    label: { control: 'text' },
    appearance: {
      control: 'select',
      options: [
        'accent',
        'lightweight',
        'neutral',
        'outline',
        'stealth',
        'hypertext'
      ]
    },
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' }
  }
} as Meta;

const Template: StoryFn = (args, context): string => {
  return `<jp-anchor
  href="#"
  ${args.appearance ? `appearance="${args.appearance}` : ''}">
  ${args.startIcon ? getFaIcon('plus', 'start') : ''}${args.label ?? 'Link'}
  ${args.endIcon ? getFaIcon('plus', 'end') : ''}
  </jp-anchor>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Link',
  appearance: 'Neutral',
  startIcon: false,
  endIcon: false
};
