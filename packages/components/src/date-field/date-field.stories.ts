// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { getFaIcon, withForm } from '../utilities/storybook';
import { DateField } from './index';

export default {
  title: 'Components/Date Field',
  argTypes: {
    label: { control: 'text' },
    value: { control: 'number' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    autofocus: { control: 'boolean' },
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' },
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

const Template: StoryFn = (args, context): HTMLElement => {
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-date-field
      ${args.readonly ? 'readonly=""' : ''}
      ${args.disabled ? 'disabled=""' : ''}
      ${args.autofocus ? 'autofocus' : ''}
      ${args.errorMessage ? `error-message="${args.errorMessage}"` : ''}
    >
      ${args.startIcon ? getFaIcon('search', 'start') : ''}
      ${args.label}
      ${args.endIcon ? getFaIcon('euro-sign', 'end') : ''}
    </jp-date-field>`
  );

  const dateField = container.firstChild as DateField;

  if (args.value) {
    dateField.value = args.value;
  }

  if (args.onChange) {
    dateField.addEventListener('change', args.onChange);
  }
  if (args.onInvalid) {
    dateField.addEventListener('invalid', args.onInvalid);
  }

  return dateField;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Date Field Label',
  value: '',
  readonly: false,
  disabled: false,
  autofocus: false,
  startIcon: false,
  endIcon: false,
  errorMessage: '',
  onChange: action('change'),
  onInvalid: action('invalid'),
  inForm: false
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
  errorMessage: 'Invalid date value'
};
