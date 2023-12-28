// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Slider',
  argTypes: {
    value: { control: 'range', min: 0, max: 10, step: 5 },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
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
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-slider
      min="0" max="100" step="10" value="${args.value}"
      ${args.orientation ? `orientation="${args.orientation}"` : ''}
      ${args.disabled ? 'disabled' : ''}
      ${args.readonly ? 'readonly' : ''}
    >
      <jp-slider-label position="0">0%</jp-slider-label>
      <jp-slider-label position="10">10%</jp-slider-label>
      <jp-slider-label position="90">90%</jp-slider-label>
      <jp-slider-label position="100">100%</jp-slider-label>
    </jp-slider>`
  );

  const slider = container.firstChild as HTMLElement;

  if (args.onChange) {
    slider.addEventListener('change', args.onChange);
  }

  return slider;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  orientation: 'horizontal',
  disabled: false,
  readonly: false,
  value: 70,
  onChange: action('slider-onchange')
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
