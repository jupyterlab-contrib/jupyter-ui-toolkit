// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Radio',
  argTypes: {
    isChecked: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: StoryFn = (args, context): HTMLElement => {
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-radio
      ${args.isChecked ? 'checked' : ''}
      ${args.isDisabled ? 'disabled' : ''}
      ${args.isReadOnly ? 'readonly' : ''}
      value="value"
    >
      Radio element
    </jp-radio>`
  );

  const radio = container.firstChild as HTMLElement;

  if (args.onChange) {
    radio.addEventListener('change', args.onChange);
  }

  return radio;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  isChecked: false,
  isDisabled: false,
  isReadOnly: false,
  onChange: action('radio-onchange')
};

export const WithChecked: StoryObj = { render: Template.bind({}) };
WithChecked.args = {
  ...Default.args,
  isChecked: true
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};

export const WithReadOnly: StoryObj = { render: Template.bind({}) };
WithReadOnly.args = {
  ...Default.args,
  isDisabled: true
};
