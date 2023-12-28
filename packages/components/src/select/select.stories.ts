// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { getFaIcon } from '../utilities/storybook';

export default {
  title: 'Components/Select',
  argTypes: {
    isOpen: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    customIndicator: { control: 'boolean' },
    numberOfChildren: { control: 'number' },
    isMinimal: { control: 'boolean' },
    hasAutoWidth: { control: 'boolean' },
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

  const index = args.numberOfChildren ?? 3;
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-select 
      ${args.isDisabled ? 'disabled' : ''}
      ${args.isMinimal ? 'minimal' : ''}
      ${args.hasAutoWidth ? 'autowidth' : ''}
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

  if (args.isOpen) {
    select.setAttribute('open', '');
  }

  if (args.onChange) {
    select.addEventListener('change', args.onChange);
  }

  return select;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  isOpen: false,
  isDisabled: false,
  customIndicator: false,
  numberOfChildren: 3,
  isMinimal: false,
  hasAutoWidth: false,
  onChange: action('select-onchange')
};

export const WithOpen: StoryObj = { render: Template.bind({}) };
WithOpen.args = {
  ...Default.args,
  isOpen: true
};

export const WithAutoWidth: StoryObj = { render: Template.bind({}) };
WithAutoWidth.args = {
  ...Default.args,
  hasAutoWidth: true
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};

export const WithCustomIndicator: StoryObj = { render: Template.bind({}) };
WithCustomIndicator.args = {
  ...Default.args,
  customIndicator: true
};
