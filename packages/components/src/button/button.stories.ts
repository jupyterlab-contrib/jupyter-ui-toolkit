// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { action } from '@storybook/addon-actions';
import { getFaIcon, setTheme } from '../utilities/storybook';

export default {
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
    appearance: {
      control: {
        type: 'select',
        options: ['Accent', 'Error', 'Neutral', 'Outline', 'Stealth']
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

const Template = (
  args,
  { globals: { backgrounds, accent }, parameters }
): HTMLElement => {
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
    container.firstChild.addEventListener('click', args.onClick);
  }
  return container.firstChild as HTMLElement;
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Button Text',
  appearance: 'Accent',
  isDisabled: false,
  isAutoFocused: false,
  isMinimal: false,
  startIcon: false,
  onClick: action('button-clicked')
};

export const Error: any = Template.bind({});
Error.args = {
  ...Default.args,
  appearance: 'Error'
};

export const Neutral: any = Template.bind({});
Neutral.args = {
  ...Default.args,
  appearance: 'Neutral'
};

export const WithAutofocus: any = Template.bind({});
WithAutofocus.args = {
  ...Default.args,
  isAutoFocused: true
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};

export const WithStartIcon: any = Template.bind({});
WithStartIcon.args = {
  ...Default.args,
  startIcon: true
};

export const IconOnly: any = Template.bind({});
IconOnly.args = {
  ...Default.args,
  label: null,
  startIcon: true
};
