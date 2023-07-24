// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { getFaIcon, setTheme } from '../utilities/storybook';

export default {
  title: 'Components/Anchor',
  argTypes: {
    label: { control: 'text' },
    appearance: {
      control: 'select',
      options: [
        'Accent',
        'Lightweight',
        'Neutral',
        'Outline',
        'Stealth',
        'Hypertext'
      ]
    },
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' }
  }
} as Meta;

const Template: StoryFn = (args, context): string => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-anchor
  href="#"
  ${args.appearance ? `appearance="${args.appearance.toLowerCase()}` : ''}">
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
