// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Tabs',
  argTypes: {
    activeid: { control: 'select', options: [null, 'One', 'Two', 'Three'] },
    activeindicator: { control: 'boolean' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] }
  }
} as Meta;

const Template: StoryFn = (args, context): HTMLElement => {
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-tabs 
    ${!args.activeindicator && 'activeindicator="false"'}
    ${args.activeid ? `activeid=Tab${args.activeid}` : ''}
    orientation="${args.orientation}"
  >
    <jp-tab id="TabOne">Tab one</jp-tab>
    <jp-tab id="TabTwo">Tab two</jp-tab>
    <jp-tab id="TabThree">Tab three</jp-tab>
    <jp-tab-panel id="TabPanelOne">
        Tab one content. This is for testing.
    </jp-tab-panel>
    <jp-tab-panel id="TabPanelTwo">
        Tab two content. This is for testing.
    </jp-tab-panel>
    <jp-tab-panel id="TabPanelThree">
        Tab three content. This is for testing.
    </jp-tab-panel>
  </jp-tabs>`
  );

  const tabs = container.firstChild as HTMLElement;

  if (args.onChange) {
    tabs.addEventListener('change', args.onChange);
  }

  return tabs;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  activeid: null,
  activeindicator: true,
  orientation: 'horizontal',
  onChange: action('tabs-onchange')
};

export const Vertical: StoryObj = { render: Template.bind({}) };
Vertical.args = {
  ...Default.args,
  orientation: 'vertical'
};

export const WithoutIndicator: StoryObj = { render: Template.bind({}) };
WithoutIndicator.args = {
  ...Default.args,
  activeindicator: false
};
