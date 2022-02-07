// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { action } from '@storybook/addon-actions';
import { getFaIcon, setTheme } from '../utilities/storybook';
import { Search } from './index';

export default {
  title: 'Search',
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    maxLength: { control: 'number' },
    size: { control: 'number' },
    isReadOnly: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isAutoFocused: { control: 'boolean' },
    searchIcon: { control: 'boolean' },
    appearance: { control: 'radio', options: ['outline', 'filled'] },
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    }
  }
};

const Template = (
  args,
  { globals: { backgrounds, accent }, parameters }
): HTMLElement => {
  setTheme(accent, parameters.backgrounds, backgrounds);
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

  return search;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Search Label',
  placeholder: '',
  value: '',
  maxLength: '',
  size: '',
  isReadOnly: false,
  isDisabled: false,
  isAutoFocused: false,
  appearance: 'outline',
  searchIcon: false,
  onChange: action('search-onchange')
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  placeholder: 'Placeholder Text'
};

export const WithAutofocus = Template.bind({});
WithAutofocus.args = {
  ...Default.args,
  autofocus: true
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  ...Default.args,
  disabled: true
};

export const WithSize = Template.bind({});
WithSize.args = {
  ...Default.args,
  placeholder: 'This search is 50 characters in width',
  size: 50
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  ...Default.args,
  placeholder: 'This search field can only contain a maximum of 10 characters',
  maxLength: 10
};

export const WithReadonly = Template.bind({});
WithReadonly.args = {
  ...Default.args,
  readonly: true
};

export const WithSearchIcon = Template.bind({});
WithSearchIcon.args = {
  ...Default.args,
  searchIcon: true
};
