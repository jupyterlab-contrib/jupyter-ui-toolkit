// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { getFaIcon } from '../utilities/storybook/index.js';

export default {
  title: 'Components/Tree Item',
  argTypes: {
    selected: { control: 'boolean' },
    beforeContent: { control: 'boolean' },
    afterContent: { control: 'boolean' }
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
} as Meta;

const Template: StoryFn = (args, context): string => {
  return `<jp-tree-item
    ${args.selected ? 'selected' : ''}
  >
    ${args.beforeContent ? getFaIcon('robot', 'start') : ''}
    Tree item
    ${args.afterContent ? getFaIcon('robot', 'end') : ''}
  </jp-tree-item`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  selected: false,
  beforeContent: false,
  afterContent: false
};

export const Selected: StoryObj = { render: Template.bind({}) };
Selected.args = {
  ...Default.args,
  selected: true
};

export const WithBeforeContent: StoryObj = { render: Template.bind({}) };
WithBeforeContent.args = {
  ...Default.args,
  beforeContent: true
};

export const WithAfterContent: StoryObj = { render: Template.bind({}) };
WithAfterContent.args = {
  ...Default.args,
  afterContent: true
};
