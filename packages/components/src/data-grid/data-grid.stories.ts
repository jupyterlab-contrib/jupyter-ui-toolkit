// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { DataGrid } from './index.js';

export default {
  title: 'Components/Data Grid',
  argTypes: {},
  parameters: {
    controls: { disabled: true },
    actions: {
      disabled: true
    }
  }
} as Meta;

const Template: StoryFn = (args): string => {
  //   return `<jp-data-grid grid-template-columns="1fr 1fr">
  //     <jp-data-grid-row>
  //         <jp-data-grid-cell grid-column="1">1.1</jp-data-grid-cell>
  //         <jp-data-grid-cell grid-column="2">1.2</jp-data-grid-cell>
  //     </jp-data-grid-row>
  //     <jp-data-grid-row>
  //         <jp-data-grid-cell grid-column="1">2.1</jp-data-grid-cell>
  //         <jp-data-grid-cell grid-column="2">2.2</jp-data-grid-cell>
  //     </jp-data-grid-row>
  //     </jp-data-grid>`;

  setTimeout(() => {
    const grid = document.getElementById('basic-grid') as DataGrid | null;

    if (grid) {
      grid.rowsData = [
        {
          Header1: 'Data 1 1',
          Header2: 'Data 2 1',
          Header3: 'Data 3 1',
          Header4: 'Cell Data 4 1'
        },
        {
          Header1: 'Data 1 2',
          Header2: 'Data 2 2',
          Header3: 'Data 3 2',
          Header4: 'Cell Data 4 2'
        },
        {
          Header1: 'Data 1 3',
          Header2: 'Data 2 3',
          Header3: 'Data 3 3',
          Header4: 'Cell Data 4 3'
        }
      ];
    }
  }, 0);

  return '<jp-data-grid id="basic-grid" generate-header="sticky" aria-label="With Sticky Header"></jp-data-grid>';
};

export const Default: StoryObj = { render: Template.bind({}) };
