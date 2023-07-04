// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { getFaIcon, setTheme } from '../utilities/storybook';

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    appearance: {
      control: {
        type: 'select',
        options: [
          'Accent',
          'Error',
          'Lightweight',
          'Neutral',
          'Outline',
          'Stealth'
        ]
      }
    },
    isDisabled: { control: 'boolean' },
    isAutoFocused: { control: 'boolean' },
    isMinimal: { control: 'boolean' },
    startIcon: { control: 'boolean' },
    onClick: {
      action: 'clicked',
      table: {
        disable: true
      }
    }
  }
};

const Template: StoryFn = (args, context): HTMLElement => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-button 
      ${args.appearance ? `appearance=${args.appearance.toLowerCase()}` : ''}
      ${args.isDisabled ? 'disabled' : ''} 
      ${args.isAutoFocused ? 'autofocus' : ''}
      ${args.isMinimal ? 'minimal' : ''}
    >${args.startIcon ? getFaIcon('plus', args.label ? 'start' : null) : ''}${
      args.label ?? ''
    }</jp-button
  >`
  );

  if (args.onClick) {
    container.firstChild!.addEventListener('click', args.onClick);
  }
  return container.firstChild as HTMLElement;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  label: 'Button Text',
  appearance: 'Accent',
  isDisabled: false,
  isAutoFocused: false,
  isMinimal: false,
  startIcon: false,
  onClick: action('button-clicked')
};

export const Error: StoryObj = { render: Template.bind({}) };
Error.args = {
  ...Default.args,
  appearance: 'Error'
};

export const Neutral: StoryObj = { render: Template.bind({}) };
Neutral.args = {
  ...Default.args,
  appearance: 'Neutral'
};

export const Lightweight: StoryObj = { render: Template.bind({}) };
Lightweight.args = {
  ...Default.args,
  appearance: 'Lightweight'
};

export const WithAutofocus: StoryObj = { render: Template.bind({}) };
WithAutofocus.args = {
  ...Default.args,
  isAutoFocused: true
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};

export const WithStartIcon: StoryObj = { render: Template.bind({}) };
WithStartIcon.args = {
  ...Default.args,
  startIcon: true
};

export const IconOnly: StoryObj = { render: Template.bind({}) };
IconOnly.args = {
  ...Default.args,
  label: null,
  startIcon: true
};
