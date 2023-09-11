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
      control: 'select',
      options: [
        'Accent',
        'Error',
        'Lightweight',
        'Neutral',
        'Outline',
        'Stealth'
      ]
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
    },
    ariaPressed: {
      control: 'select',
      options: ['none', 'true', 'false']
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
    `<jp-button 
      ${args.appearance ? `appearance=${args.appearance.toLowerCase()}` : ''}
      ${args.isDisabled ? 'disabled' : ''} 
      ${args.isAutoFocused ? 'autofocus' : ''}
      ${args.isMinimal ? 'minimal' : ''}
      ${args.ariaPressed !== 'none' ? `aria-pressed=${args.ariaPressed}` : ''}
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

export const Accent: StoryObj = { render: Template.bind({}) };
Accent.args = {
  label: 'Button Text',
  appearance: 'Accent',
  isDisabled: false,
  isAutoFocused: false,
  isMinimal: false,
  startIcon: false,
  ariaPressed: 'none',
  onClick: action('button-clicked')
};

export const Error: StoryObj = { render: Template.bind({}) };
Error.args = {
  ...Accent.args,
  appearance: 'Error'
};

export const Neutral: StoryObj = { render: Template.bind({}) };
Neutral.args = {
  ...Accent.args,
  appearance: 'Neutral'
};

export const Lightweight: StoryObj = { render: Template.bind({}) };
Lightweight.args = {
  ...Accent.args,
  appearance: 'Lightweight'
};

export const WithAutofocus: StoryObj = { render: Template.bind({}) };
WithAutofocus.args = {
  ...Accent.args,
  isAutoFocused: true
};

export const WithDisabled: StoryObj = { render: Template.bind({}) };
WithDisabled.args = {
  ...Accent.args,
  isDisabled: true
};

export const WithStartIcon: StoryObj = { render: Template.bind({}) };
WithStartIcon.args = {
  ...Accent.args,
  startIcon: true
};

export const IconOnly: StoryObj = { render: Template.bind({}) };
IconOnly.args = {
  ...Accent.args,
  label: null,
  startIcon: true
};

export const Toggle: StoryObj = { render: Template.bind({}) };
Toggle.storyName = 'Toggle button';
Toggle.args = {
  ...Accent.args,
  ariaPressed: 'true'
};
