// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj} from '@storybook/html';
import { setTheme } from '../utilities/storybook';

export default {
  title: 'Divider',
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] }
  },
  parameters: {
    actions: {
      disabled: true
    }
  },
  decorators: [
    story => `
      <style>
        #container {
          width: 300px;
          height: 300px;
        }
      </style>
      <div id="container">
        ${story()}
      </div>`
  ]
} as Meta;

const Template: StoryFn = (
  args,
  context // { globals: { backgrounds, accent }, parameters }
): string => {
  // setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-divider orientation="${args.orientation}"></jp-divider>`;
};

export const Default: StoryObj = {render: Template.bind({})};
Default.args = {
  orientation: 'horizontal'
};

export const Vertical: StoryObj = {render: Template.bind({})};
Vertical.args = {
  ...Default.args,
  orientation: 'vertical'
};
