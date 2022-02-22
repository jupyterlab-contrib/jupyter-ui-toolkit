// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { action } from '@storybook/addon-actions';
import { setTheme } from '../utilities/storybook';

export default {
  title: 'Radio',
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
};

const Template = (
  args,
  { globals: { backgrounds, accent }, parameters }
): HTMLElement => {
  setTheme(accent, parameters.backgrounds, backgrounds);
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

export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  isDisabled: false,
  isReadOnly: false,
  onChange: action('radio-onchange')
};

export const WithChecked = Template.bind({});
WithChecked.args = {
  ...Default.args,
  isChecked: true
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};

export const WithReadOnly = Template.bind({});
WithReadOnly.args = {
  ...Default.args,
  isDisabled: true
};
