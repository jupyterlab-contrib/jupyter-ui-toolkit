// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { withForm } from '../utilities/storybook';

export default {
  title: 'Components/Radio Group',
  argTypes: {
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    errorMessage: { control: 'text' },
    inForm: { control: 'boolean' },
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
  decorators: [withForm]
} as Meta;

const Template: StoryFn = (args, context): HTMLElement => {
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-radio-group
      orientation=${args.orientation}
      ${args.disabled ? 'disabled' : ''}
      ${args.readonly ? 'readonly' : ''}
      ${args.errorMessage ? `error-message="${args.errorMessage}"` : ''}
    >
      <label slot="label" style="color: var(--neutral-foreground-rest)">Fruit</label>
      <jp-radio value="apples">Apples</jp-radio>
      <jp-radio value="oranges">Oranges</jp-radio>
      <jp-radio value="bananas">Bananas</jp-radio>
      <jp-radio value="kiwi">Kiwi</jp-radio>
      <jp-radio value="grapefruit">Grapefruit</jp-radio>
      <jp-radio value="mango">Mango</jp-radio>
      <jp-radio value="blueberries">Blueberries</jp-radio>
      <jp-radio value="strawberries">Strawberries</jp-radio>
      <jp-radio value="pineapple">Pineapple</jp-radio>
    </jp-radio-group>`
  );

  const radioGroup = container.firstChild as HTMLElement;

  if (args.onChange) {
    radioGroup.addEventListener('change', args.onChange);
  }
  if (args.onInvalid) {
    radioGroup.addEventListener('invalid', args.onInvalid);
  }

  return radioGroup;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  disabled: false,
  readonly: false,
  orientation: 'horizontal',
  errorMessage: '',
  onChange: action('change'),
  onInvalid: action('invalid'),
  inForm: false
};

export const Vertical: StoryObj = { render: Template.bind({}) };
Vertical.args = {
  ...Default.args,
  orientation: 'vertical'
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  disabled: true
};

export const WithReadOnly: StoryObj = { render: Template.bind({}) };
WithReadOnly.args = {
  ...Default.args,
  disabled: true
};

export const WithError: StoryObj = { render: Template.bind({}) };
WithError.args = {
  ...Default.args,
  errorMessage: 'Invalid radio group'
};
