// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { action } from '@storybook/addon-actions';
import { getFaIcon } from '../utilities/storybook';

export default {
  title: 'Library/Button',
  argTypes: {
    label: { control: 'text' },
    appearance: {
      control: {
        type: 'select',
        options: ['Accent', 'Neutral', 'Outline', 'Stealth']
      }
    },
    isDisabled: { control: 'boolean' },
    isAutoFocused: { control: 'boolean' },
    startIcon: { control: 'boolean' },
    onClick: {
      action: 'clicked',
      table: {
        disable: true
      }
    }
  }
};

const Template = ({ ...args }): HTMLElement => {
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-button appearance=${args.appearance.toLowerCase()} ${
      args.isDisabled ? 'disabled' : ''
    } ${args.isAutoFocused ? 'autofocus' : ''}
    >${args.startIcon ? getFaIcon('plus', 'start') : ''}${args.label}</jp-button
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
  startIcon: false,
  onClick: action('button-clicked')
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
