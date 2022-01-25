// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { action } from '@storybook/addon-actions';
import { getFaIcon, setTheme } from '../utilities/storybook';

export default {
  title: 'Library/Select',
  argTypes: {
    isOpen: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    customIndicator: { control: 'boolean' },
    numberOfChildren: { control: 'number' },
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
    `<jp-select ${args.isDisabled ? 'disabled' : ''}>
      ${args.customIndicator ? getFaIcon('sliders-h', 'indicator') : ''}
        ${new Array(args.numberOfChildren ?? 3)
          .fill(0)
          .map(
            (_, index) =>
              `<jp-option value="${index}">Option ${index + 1}</jp-option>`
          )
          .join('\n')}
    </jp-select>`
  );

  const select = container.firstChild as HTMLElement;

  if (args.isOpen) {
    select.setAttribute('open', '');
  }

  if (args.onChange) {
    select.addEventListener('change', args.onChange);
  }

  return select;
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  isDisabled: false,
  customIndicator: false,
  numberOfChildren: 3,
  onChange: action('select-onchange')
};

export const WithOpen = Template.bind({});
WithOpen.args = {
  ...Default.args,
  isOpen: true
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};

export const WithCustomIndicator = Template.bind({});
WithCustomIndicator.args = {
  ...Default.args,
  customIndicator: true
};
