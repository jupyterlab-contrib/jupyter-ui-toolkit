// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { getFaIcon } from '../utilities/storybook';
import { TextField } from './index';

export default {
  title: 'Components/Text Field',
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    maxlength: { control: 'number' },
    size: { control: 'number' },
    type: {
      control: 'select',
      options: ['Email', 'Password', 'Tel', 'Text', 'Url']
    },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    autofocus: { control: 'boolean' },
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' },
    appearance: { control: 'radio', options: ['outline', 'filled'] },
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

const Template: StoryFn = (args): HTMLElement => {
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-text-field 
      ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
      ${args.maxlength ? `maxlength="${args.maxlength}"` : ''}
      ${args.size ? `size="${args.size}"` : ''}
      ${args.type ? `type="${args.type.toLowerCase()}"` : ''}
      ${args.readonly ? 'readonly' : ''}
      ${args.disabled ? 'disabled' : ''}
      ${args.autofocus ? 'autofocus' : ''}
      appearance="${args.appearance}"
      ${args.invalid ? `aria-invalid="${args.invalid}"` : ''}
    >
      ${args.startIcon ? getFaIcon('search', 'start') : ''}
      ${args.label}
      ${args.endIcon ? getFaIcon('euro-sign', 'end') : ''}
    </jp-text-field>`
  );

  const textField = container.firstChild as TextField;

  if (args.value) {
    textField.value = args.value;
  }

  if (args.onChange) {
    textField.addEventListener('change', args.onChange);
  }
  if (args.onInvalid) {
    textField.addEventListener('invalid', args.onInvalid);
  }

  return textField;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Text Field Label',
  placeholder: '',
  value: '',
  maxlength: '',
  size: '',
  type: 'Text',
  readonly: false,
  disabled: false,
  autofocus: false,
  startIcon: false,
  endIcon: false,
  appearance: 'outline',
  invalid: false,
  onChange: action('change'),
  onInvalid: action('invalid')
};

export const WithPlaceholder: StoryObj = { render: Template.bind({}) };
WithPlaceholder.args = {
  ...Default.args,
  placeholder: 'Placeholder Text'
};

export const WithAutofocus: StoryObj = { render: Template.bind({}) };
WithAutofocus.args = {
  ...Default.args,
  autofocus: true
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  disabled: true
};

export const WithSize: StoryObj = { render: Template.bind({}) };
WithSize.args = {
  ...Default.args,
  placeholder: 'This text field is 50 characters in width',
  size: 50
};

export const WithType: StoryObj = { render: Template.bind({}) };
WithType.args = {
  ...Default.args,
  placeholder: 'This text field has type password',
  type: 'Password'
};

export const WithMaxLength: StoryObj = { render: Template.bind({}) };
WithMaxLength.args = {
  ...Default.args,
  placeholder: 'This text field can only contain a maximum of 10 characters',
  maxlength: 10
};

export const WithReadonly: StoryObj = { render: Template.bind({}) };
WithReadonly.args = {
  ...Default.args,
  readonly: true
};

export const WithStartIcon: StoryObj = { render: Template.bind({}) };
WithStartIcon.args = {
  ...Default.args,
  startIcon: true
};

export const WithEndIcon: StoryObj = { render: Template.bind({}) };
WithEndIcon.args = {
  ...Default.args,
  endIcon: true
};

export const WithError: StoryObj = { render: Template.bind({}) };
WithError.args = {
  ...Default.args,
  invalid: true
};
