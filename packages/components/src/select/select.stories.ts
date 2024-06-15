// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { getFaIcon } from '../utilities/storybook/index.js';

export default {
  title: 'Components/Select',
  argTypes: {
    open: { control: 'boolean' },
    disabled: { control: 'boolean' },
    customIndicator: { control: 'boolean' },
    numberOfChildren: { control: 'number' },
    scale: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge']
    },
    size: { control: 'number' },
    autowidth: { control: 'boolean' },
    ariaInvalid: { control: 'boolean' },
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

const Template: StoryFn = (args, context): HTMLElement => {
  const container = document.createElement('div');

  const index = args.numberOfChildren ?? 3;
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-select 
      ${args.disabled ? 'disabled' : ''}
      ${args.scale ? `scale=${args.scale}` : ''}
      ${args.size > 0 ? `size=${args.size}` : ''}
      ${args.autowidth ? 'autowidth' : ''}
      ${args.ariaInvalid ? `aria-invalid="${args.ariaInvalid}"` : ''}
    >
      ${args.customIndicator ? getFaIcon('sliders-h', 'indicator') : ''}
        ${new Array(args.numberOfChildren ?? 3)
          .fill(0)
          .map(
            (_, index) =>
              `<jp-option value="${index}">Option ${index + 1}</jp-option>`
          )
          .join('\n')}
        <jp-option value="${index}">This is a very long option ${
          index + 1
        }</jp-option>
    </jp-select>`
  );

  const select = container.firstChild as HTMLElement;

  if (args.open) {
    select.setAttribute('open', '');
  }

  if (args.onChange) {
    select.addEventListener('change', args.onChange);
  }
  if (args.onInvalid) {
    select.addEventListener('invalid', args.onInvalid);
  }

  return select;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  open: false,
  disabled: false,
  customIndicator: false,
  numberOfChildren: 3,
  scale: 'medium',
  size: 0,
  autowidth: false,
  ariaInvalid: false,
  onChange: action('change'),
  onInvalid: action('invalid')
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
  ariaInvalid: true
};
