// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { getFaIcon } from '../utilities/storybook';
import { NumberField } from './index';

export default {
  title: 'Components/Number Field',
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'number' },
    maxLength: { control: 'number' },
    size: { control: 'number' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    autofocus: { control: 'boolean' },
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' },
    appearance: { control: 'radio', options: ['outline', 'filled'] },
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
    `<jp-number-field 
      ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
      ${args.maxLength ? `maxlength="${args.maxLength}"` : ''}
      ${args.size ? `size="${args.size}"` : ''}
      ${args.readonly ? 'readonly' : ''}
      ${args.disabled ? 'disabled' : ''}
      ${args.autofocus ? 'autofocus' : ''}
      appearance="${args.appearance}"
      ${args.invalid ? `aria-invalid="${args.invalid}"` : ''}
    >
      ${args.startIcon ? getFaIcon('search', 'start') : ''}
      ${args.label}
      ${args.endIcon ? getFaIcon('euro-sign', 'end') : ''}
    </jp-number-field>`
  );

  const numberField = container.firstChild as NumberField;

  if (args.value) {
    numberField.value = args.value;
  }

  if (args.onChange) {
    numberField.addEventListener('change', args.onChange);
  }
  if (args.onInvalid) {
    numberField.addEventListener('invalid', args.onInvalid);
  }

  return numberField;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Number Field Label',
  placeholder: '',
  value: '',
  maxLength: '',
  size: '',
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
  placeholder: 'This number field is 50 characters in width',
  size: 50
};

export const WithMaxLength: StoryObj = { render: Template.bind({}) };
WithMaxLength.args = {
  ...Default.args,
  placeholder: 'This number field can only contain a maximum of 10 characters',
  maxLength: 10
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
