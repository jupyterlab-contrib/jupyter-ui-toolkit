// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { TextArea } from './index';

export default {
  title: 'Components/Text Area',
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    maxLength: { control: 'number' },
    isReadOnly: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isAutoFocused: { control: 'boolean' },
    appearance: { control: 'radio', options: ['outline', 'filled'] },
    resize: {
      control: 'select',
      options: ['none', 'both', 'vertical', 'horizontal']
    },
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: StoryFn = (args): HTMLElement => {
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-text-area 
      ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
      ${args.maxLength ? `maxlength="${args.maxLength}"` : ''}
      ${args.readonly ? 'readonly' : ''}
      ${args.disabled ? 'disabled' : ''}
      ${args.autofocus ? 'autofocus' : ''}
      appearance="${args.appearance}"
      resize="${args.resize}"
    >
      ${args.label}
    </jp-text-area>`
  );

  const textField = container.firstChild as TextArea;

  if (args.value) {
    textField.value = args.value;
  }

  if (args.onChange) {
    textField.addEventListener('change', args.onChange);
  }

  return textField;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Text Area Label',
  placeholder: '',
  value: '',
  maxLength: '',
  resize: 'none',
  isReadOnly: false,
  isDisabled: false,
  isAutoFocused: false,
  appearance: 'outline',
  onChange: action('text-area-onchange')
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

export const WithMaxLength: StoryObj = { render: Template.bind({}) };
WithMaxLength.args = {
  ...Default.args,
  placeholder: 'This text field can only contain a maximum of 10 characters',
  maxLength: 10
};

export const WithReadonly: StoryObj = { render: Template.bind({}) };
WithReadonly.args = {
  ...Default.args,
  readonly: true
};
