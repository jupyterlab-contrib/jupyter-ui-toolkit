// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { Switch } from './index';

export default {
  title: 'Components/Switch',
  argTypes: {
    label: { control: 'text' },
    withMessages: { control: 'boolean' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    },
    onInvalid: {
      action: 'invalid',
      table: {
        disable: true
      }
    }
  },
  decorators: []
} as Meta;

const Template: StoryFn = (args, context): HTMLElement => {
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-switch 
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
      ${args.readonly ? 'readonly' : ''}
      ${args.invalid ? `aria-invalid="${args.invalid}"` : ''}
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
  if (args.onInvalid) {
    switch_.addEventListener('invalid', args.onInvalid);
  }

  return switch_;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Feature',
  checked: false,
  disabled: false,
  readonly: false,
  withMessages: false,
  invalid: false,
  onChange: action('change'),
  onInvalid: action('invalid')
};

export const WithChecked: StoryObj = { render: Template.bind({}) };
WithChecked.args = {
  ...Default.args,
  checked: true
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  disabled: true
};

export const WithReadOnly: StoryObj = { render: Template.bind({}) };
WithReadOnly.args = {
  ...Default.args,
  readonly: true
};

export const WithMessages: StoryObj = { render: Template.bind({}) };
WithMessages.args = {
  ...Default.args,
  withMessages: true
};

export const WithError: StoryObj = { render: Template.bind({}) };
WithError.args = {
  ...Default.args,
  invalid: true
};
