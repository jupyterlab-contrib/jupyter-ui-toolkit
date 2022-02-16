// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { getFaIcon, setTheme } from '../utilities/storybook';

export default {
  title: 'Tree Item',
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
};

const Template = (
  args,
  { globals: { backgrounds, accent }, parameters }
): string => {
  setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-tree-item
    ${args.selected ? 'selected' : ''}
  >
    ${args.beforeContent ? getFaIcon('robot', 'start') : ''}
    Tree item
    ${args.afterContent ? getFaIcon('robot', 'end') : ''}
  </jp-tree-item`;
};

export const Default = Template.bind({});
Default.args = {
  selected: false,
  beforeContent: false,
  afterContent: false
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  selected: true
};

export const WithBeforeContent = Template.bind({});
WithBeforeContent.args = {
  ...Default.args,
  beforeContent: true
};

export const WithAfterContent = Template.bind({});
WithAfterContent.args = {
  ...Default.args,
  afterContent: true
};
