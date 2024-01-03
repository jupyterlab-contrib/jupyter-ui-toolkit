// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { getFaIcon } from '../utilities/storybook';
import { Search } from './index';

export default {
  title: 'Components/Search',
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    maxLength: { control: 'number' },
    size: { control: 'number' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    autofocus: { control: 'boolean' },
    searchIcon: { control: 'boolean' },
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
    `<jp-search
        ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
        ${args.maxLength ? `maxlength="${args.maxLength}"` : ''}
        ${args.size ? `size="${args.size}"` : ''}
        ${args.readonly ? 'readonly' : ''}
        ${args.disabled ? 'disabled' : ''}
        ${args.autofocus ? 'autofocus' : ''}
        appearance="${args.appearance}"
        ${args.invalid ? `aria-invalid="${args.invalid}"` : ''}
      >
        ${args.label}
        ${args.searchIcon ? getFaIcon('search', 'end') : ''}
      </jp-search>`
  );

  const search = container.firstChild as Search;

  if (args.value) {
    search.value = args.value;
  }

  if (args.onChange) {
    search.addEventListener('change', args.onChange);
  }
  if (args.onInvalid) {
    search.addEventListener('invalid', args.onInvalid);
  }

  return search;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Search Label',
  placeholder: '',
  value: '',
  maxLength: '',
  size: '',
  readonly: false,
  disabled: false,
  autofocus: false,
  appearance: 'outline',
  searchIcon: false,
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
  placeholder: 'This search is 50 characters in width',
  size: 50
};

export const WithMaxLength: StoryObj = { render: Template.bind({}) };
WithMaxLength.args = {
  ...Default.args,
  placeholder: 'This search field can only contain a maximum of 10 characters',
  maxLength: 10
};

export const WithReadonly: StoryObj = { render: Template.bind({}) };
WithReadonly.args = {
  ...Default.args,
  readonly: true
};

export const WithSearchIcon: StoryObj = { render: Template.bind({}) };
WithSearchIcon.args = {
  ...Default.args,
  searchIcon: true
};

export const WithError: StoryObj = { render: Template.bind({}) };
WithError.args = {
  ...Default.args,
  invalid: true
};
