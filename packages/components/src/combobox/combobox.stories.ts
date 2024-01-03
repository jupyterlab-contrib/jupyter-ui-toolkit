// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { getFaIcon,  } from '../utilities/storybook';
import { Combobox } from './index';

export default {
  title: 'Components/Combobox',
  argTypes: {
    open: { control: 'boolean' },
    disabled: { control: 'boolean' },
    customIndicator: { control: 'boolean' },
    numberOfChildren: { control: 'number' },
    minimal: { control: 'boolean' },
    autowidth: { control: 'boolean' },
    autocomplete: {
      control: 'select',
      options: ['none', 'inline', 'list', 'both']
    },
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

const nameList = [
  'William Hartnell',
  'Patrick Troughton',
  'Jon Pertwee',
  'Tom Baker',
  'Peter Davidson',
  'Colin Baker',
  'Sylvester McCoy',
  'Paul McGann',
  'Christopher Eccleston',
  'David Tenant',
  'Matt Smith',
  'Peter Capaldi',
  'Jodie Whittaker'
];

const Template: StoryFn = (args): HTMLElement => {
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-combobox 
      ${args.disabled ? 'disabled' : ''}
      ${args.minimal ? 'minimal' : ''}
      ${args.autowidth ? 'autowidth' : ''}
      ${args.autocomplete !== 'none' ? `autocomplete=${args.autocomplete}` : ''}
      ${args.invalid ? `aria-invalid="${args.invalid}"` : ''}
    >
      ${args.customIndicator ? getFaIcon('sliders-h', 'indicator') : ''}
        ${new Array(args.numberOfChildren ?? 10)
          .fill(0)
          .map((_, index) => {
            const name = nameList[index];
            return `<jp-option value="${index}">${
              name ? name : `Option ${index + 1}`
            }</jp-option>`;
          })
          .join('\n')}
    </jp-combobox>`
  );

  const combobox = container.firstChild as Combobox;

  if (args.open) {
    combobox.setAttribute('open', '');
  }

  if (args.onChange) {
    combobox.addEventListener('change', args.onChange);
  }
  if (args.onInvalid) {
    combobox.addEventListener('invalid', args.onInvalid);
  }

  return combobox;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  open: false,
  disabled: false,
  customIndicator: false,
  numberOfChildren: 10,
  minimal: false,
  autowidth: false,
  autocomplete: 'none',
  invalid: false,
  onChange: action('change'),
  onInvalid: action('invalid'),
};

export const WithOpen: StoryObj = { render: Template.bind({}) };
WithOpen.args = {
  ...Default.args,
  open: true
};

export const WithAutoWidth: StoryObj = { render: Template.bind({}) };
WithAutoWidth.args = {
  ...Default.args,
  autowidth: true
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  disabled: true
};

export const WithCustomIndicator: StoryObj = { render: Template.bind({}) };
WithCustomIndicator.args = {
  ...Default.args,
  customIndicator: true
};

export const WithError: StoryObj = { render: Template.bind({}) };
WithError.args = {
  ...Default.args,
  invalid: true
};
