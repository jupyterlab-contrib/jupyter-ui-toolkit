// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { getFaIcon, setTheme } from '../utilities/storybook';
import { DateField } from './index';

export default {
  title: 'Components/Date Field',
  argTypes: {
    label: { control: 'text' },
    value: { control: 'number' },
    isReadOnly: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isAutoFocused: { control: 'boolean' },
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' },
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
    `<jp-date-field
      ${args.readonly ? 'readonly=""' : ''}
      ${args.disabled ? 'disabled=""' : ''}
      ${args.autofocus ? 'autofocus' : ''}
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

  return dateField;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Date Field Label',
  value: '',
  isReadOnly: false,
  isDisabled: false,
  isAutoFocused: false,
  startIcon: false,
  endIcon: false,
  onChange: action('date-field-onchange')
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
