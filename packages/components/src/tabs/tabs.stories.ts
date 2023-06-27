// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj} from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { setTheme } from '../utilities/storybook';

export default {
  title: 'Tabs',
  argTypes: {
    activePanel: { control: 'select', options: [null, 'One', 'Two', 'Three'] },
    activeIndicator: { control: 'boolean' },
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] }
  }
};

const Template: StoryFn = (
  args,
  context // { globals: { backgrounds, accent }, parameters }
): HTMLElement => {
  // setTheme(accent, parameters.backgrounds, backgrounds);

  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-tabs 
    ${!args.activeIndicator && 'activeindicator="false"'}
    ${args.activePanel ? `activeid=Tab${args.activePanel}` : ''}
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

export const Default: StoryObj = {render: Template.bind({})};
Default.args = {
  activePanel: null,
  activeIndicator: true,
  orientation: 'horizontal',
  onChange: action('tabs-onchange')
};

export const Vertical: StoryObj = {render: Template.bind({})};
Vertical.args = {
  ...Default.args,
  orientation: 'vertical'
};

export const WithoutIndicator: StoryObj = {render: Template.bind({})};
WithoutIndicator.args = {
  ...Default.args,
  activeIndicator: false
};
