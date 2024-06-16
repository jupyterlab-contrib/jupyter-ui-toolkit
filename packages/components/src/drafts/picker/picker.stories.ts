// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { Meta, StoryFn, StoryObj } from '@storybook/html';

export default {
  title: 'Drafts/Picker',
  tags: ['!autodocs'],
  parameters: {
    controls: { expanded: true }
  },
  argsType: {
    defaultSelection: { control: 'text' },
    selection: { control: 'text' },
    options: { control: 'text' },
    noSuggestionsText: { control: 'text' },
    suggestionsAvailableText: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    maxSelected: { control: 'range', min: 0, max: 20, step: 1 }
    // menuPlacement: {control: 'select', options: ['tallest', 'tallest-fill', 'top-fill']}
    // loadingText: {control: 'text'}
  }
} as Meta;

const Template: StoryFn = (args): string => {
  const max = args.maxSelected ? `max-selected="${args.maxSelected}"` : '';

  return `
<jp-draft-picker
  default-selection="${args.defaultSelection}"
  selection="${args.selection}"
  options="${args.options}"
  no-suggestions-text="${args.noSuggestionsText}"
  suggestions-available-text="${args.suggestionsAvailableText}"
  loading-text="${args.loadingText ?? 'Loading'}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  ${max}
></jp-draft-picker>
  `;
};

export const Default: StoryObj = { render: Template.bind({}) };

Default.args = {
  defaultSelection: '',
  selection: '',
  options: 'apples,oranges,bananas,pears,pineapples,strawberries',
  noSuggestionsText: '',
  suggestionsAvailableText: '',
  label: '',
  placeholder: '',
  maxSelected: 0
};
