// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Radio',
  argTypes: {
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
    `<jp-radio
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
      ${args.readonly ? 'readonly' : ''}
      ${args.invalid ? `aria-invalid="${args.invalid}"` : ''}
      value="value"
    >
      Radio element
    </jp-radio>`
  );

  const radio = container.firstChild as HTMLElement;

  if (args.onChange) {
    radio.addEventListener('change', args.onChange);
  }
  if (args.onInvalid) {
    radio.addEventListener('invalid', args.onInvalid);
  }

  return radio;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  checked: false,
  disabled: false,
  readonly: false,
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
  disabled: true
};

export const WithError: StoryObj = { render: Template.bind({}) };
WithError.args = {
  ...Default.args,
  invalid: true
};
