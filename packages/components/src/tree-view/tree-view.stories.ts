// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { TreeView } from './index';

export default {
  title: 'Components/Tree View',
  parameters: {
    controls: {
      disabled: true
    }
  }
} as Meta;

const Template: StoryFn = (args): HTMLElement => {
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-tree-view render-collapsed-nodes="false">
      <jp-tree-item>
        Root item 1
        <jp-tree-item expanded>
          Flowers
          <jp-tree-item>Daisy</jp-tree-item>
          <jp-tree-item disabled>Sunflower</jp-tree-item>
          <jp-tree-item expanded>
            Rose
            <jp-tree-item>Pink</jp-tree-item>
            <jp-tree-item>Red</jp-tree-item>
            <jp-tree-item>White</jp-tree-item>
          </jp-tree-item>
        </jp-tree-item>
        <jp-tree-item>Nested item 2</jp-tree-item>
        <jp-tree-item>Nested item 3</jp-tree-item>
      </jp-tree-item>
      <jp-tree-item expanded>
        Root item 2
        <jp-tree-item>
          Flowers
          <jp-tree-item disabled>Daisy</jp-tree-item>
          <jp-tree-item>Sunflower</jp-tree-item>
          <jp-tree-item>Rose</jp-tree-item>
        </jp-tree-item>
        <jp-tree-item>Nested item 2</jp-tree-item>
        <jp-tree-item>Nested item 3</jp-tree-item>
      </jp-tree-item>
      <jp-tree-item>
        Root item 3
      </jp-tree-item>
    </jp-tree-view>`
  );

  const treeView = container.firstChild as TreeView;

  if (args.onExpand) {
    treeView.addEventListener('expanded-change', args.onExpand);
  }
  if (args.onSelect) {
    treeView.addEventListener('selected-change', args.onSelect);
  }

  return treeView;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  onExpand: action('tree-item-expand'),
  onSelect: action('tree-item-select')
};
