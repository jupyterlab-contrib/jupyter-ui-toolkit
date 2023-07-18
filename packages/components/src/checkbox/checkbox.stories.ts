// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { setTheme } from '../utilities/storybook';
import { Checkbox } from './index';

export default {
  title: 'Components/Checkbox',
  argTypes: {
    label: { control: 'text' },
    isChecked: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isIndeterminate: { control: 'boolean' },
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: StoryFn = (args, context): HTMLElement => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-checkbox 
      ${args.isChecked ? 'checked' : ''}
      ${args.isDisabled ? 'disabled' : ''}
    >
      ${args.label}
    </jp-checkbox>`
  );

  const checkbox = container.firstChild as Checkbox;

  if (args.isIndeterminate) {
    checkbox.indeterminate = true;
  }

  if (args.onChange) {
    checkbox.addEventListener('change', args.onChange);
  }

  return checkbox;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Checkbox',
  isChecked: false,
  isDisabled: false,
  isIndeterminate: false,
  onChange: action('checkbox-onchange')
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

export const WithIndeterminate: StoryObj = { render: Template.bind({}) };
WithIndeterminate.args = {
  ...Default.args,
  isIndeterminate: true
};
