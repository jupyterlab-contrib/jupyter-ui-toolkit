// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';

export default {
  title: 'Components/Dialog',
  argTypes: {
    trapFocus: { control: 'boolean' }
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

        jp-dialog > div {
          padding: 10px;
          color: var(--neutral-foreground-rest);
        }
      </style>
      <div id="container">
        ${story()}
      </div>`
  ]
} as Meta;

const Template: StoryFn = (args): string => {
  return `<jp-dialog trap-focus="${args.trapFocus}">
    <div>
      <h2>Dialog heading</h2>
      <jp-button>Cancel</jp-button><jp-button appearance="accent">Ok</jp-button>
    </div>
</jp-dialog>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {
  trapFocus: true
};
