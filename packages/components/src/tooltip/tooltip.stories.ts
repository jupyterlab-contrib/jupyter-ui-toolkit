// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { setTheme } from '../utilities/storybook';

export default {
  title: 'Tooltip',
  argTypes: {
    visible: { control: 'boolean' },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left', 'start', 'end']
    },
    delay: {
      description: 'Delay to display the tooltip (in ms)',
      table: {
        defaultValue: { summary: 300 }
      },
      control: { type: 'range', min: 0, max: 2000, step: 100 }
    }
  },
  parameters: {
    controls: { expanded: true },
    actions: {
      disabled: true
    }
  },
  decorators: [
    story => `<div style="height: 300px; width:100%">
      ${story()}
    </div>`
  ]
};

const Template = (
  args,
  { globals: { backgrounds, accent }, parameters }
): string => {
  setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-tooltip anchor="anchor-default"
      ${args.visible ? 'visible' : ''}
      position="${args.position}"
      delay="${args.delay}"
    >
      Helpful text is helpful
    </jp-tooltip>
    <jp-button id="anchor-default" style="margin: 200px; height: 50px; width: 150px;">
      anchor
    </jp-button>`;
};

export const Default = Template.bind({});
Default.args = {
  visible: false,
  position: 'top',
  delay: 300
};
