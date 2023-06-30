// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { setTheme } from '../utilities/storybook';
import { Switch } from './index';

export default {
  title: 'Components/Switch',
  argTypes: {
    label: { control: 'text' },
    withMessages: { control: 'boolean' },
    isChecked: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    }
  }
};

const Template: StoryFn = (args, context): HTMLElement => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-switch 
      ${args.isChecked ? 'checked' : ''}
      ${args.isDisabled ? 'disabled' : ''}
      ${args.isReadOnly ? 'readonly' : ''}
    >
      ${args.label}
      ${
        args.withMessages
          ? `<span slot="checked-message">On</span>
      <span slot="unchecked-message">Off</span>`
          : ''
      }
    </jp-switch>`
  );

  const switch_ = container.firstChild as Switch;

  if (args.onChange) {
    switch_.addEventListener('change', args.onChange);
  }

  return switch_;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Feature',
  isChecked: false,
  isDisabled: false,
  isReadOnly: false,
  withMessages: false,
  onChange: action('switch-onchange')
};

export const WithChecked: StoryObj = { render: Template.bind({}) };
WithChecked.args = {
  ...Default.args,
  isChecked: true
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};

export const WithReadOnly: StoryObj = { render: Template.bind({}) };
WithReadOnly.args = {
  ...Default.args,
  isReadOnly: true
};

export const WithMessages: StoryObj = { render: Template.bind({}) };
WithMessages.args = {
  ...Default.args,
  withMessages: true
};
