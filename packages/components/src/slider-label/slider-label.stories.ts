// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { setTheme } from '../utilities/storybook';

export default {
  title: 'Slider Label',
  argTypes: {
    hideMark: { control: 'boolean' },
    disabled: { control: 'boolean' }
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

  return `<jp-slider-label
    ${args.hideMark ? 'hide-mark="true"' : ''}
    ${args.disabled ? 'disabled' : ''}
    >
      Label
    </jp-slider-label>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  hideMark: false,
  position: null,
  disabled: false
};

export const WithHideMark: StoryObj = { render: Template.bind({}) };
WithHideMark.args = {
  ...Default.args,
  hideMark: true
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  disabled: true
};
