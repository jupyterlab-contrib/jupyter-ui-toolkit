// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { Meta, StoryFn, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { Checkbox } from './index';
import { withForm } from '../utilities/storybook';

export default {
  title: 'Components/Checkbox',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    errorMessage: { control: 'text' },
    inForm: { control: 'boolean' },
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
  decorators: [withForm]
} as Meta;

const Template: StoryFn = (args): HTMLElement => {
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-checkbox 
      ${args.checked ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
      ${args.errorMessage ? `error-message="${args.errorMessage}"` : ''}
    >
      ${args.label}
    </jp-checkbox>`
  );

  const checkbox = container.firstChild as Checkbox;

  if (args.indeterminate) {
    checkbox.indeterminate = true;
  }

  if (args.onChange) {
    checkbox.addEventListener('change', args.onChange);
  }
  if (args.onInvalid) {
    checkbox.addEventListener('invalid', args.onInvalid);
  }

  return checkbox;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Checkbox',
  checked: false,
  disabled: false,
  indeterminate: false,
  errorMessage: '',
  onChange: action('change'),
  onInvalid: action('invalid'),
  inForm: false
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

export const WithIndeterminate: StoryObj = { render: Template.bind({}) };
WithIndeterminate.args = {
  ...Default.args,
  indeterminate: true
};

export const WithError: StoryObj = { render: Template.bind({}) };
WithError.args = {
  ...Default.args,
  errorMessage: 'Invalid checkbox value'
};
