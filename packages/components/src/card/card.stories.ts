// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import {
  neutralForegroundRest,
  typeRampBaseFontSize
} from '../design-tokens.js';

export default {
  title: 'Components/Card',
  parameters: {
    controls: {
      disabled: true
    },
    actions: {
      disabled: true
    }
  },
  decorators: [
    story => `<style>
      jp-card {
        color: var(${neutralForegroundRest.cssCustomProperty});
        font-size: var(${typeRampBaseFontSize.cssCustomProperty});
        padding: 4px;
      }
      </style>
      ${story()}`
  ]
} as Meta;

const Template: StoryFn = (args, context): string => {
  return `<jp-card>
    Card with text
  </jp-card>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
