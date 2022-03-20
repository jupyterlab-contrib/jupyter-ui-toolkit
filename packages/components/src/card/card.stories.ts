// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { neutralForegroundRest, typeRampBaseFontSize } from '../design-token';
import { setTheme } from '../utilities/storybook';

export default {
  title: 'Card',
  parameters: {
    controls: {
      disabled: true
    },
    actions: {
      disabled: true
    }
  },
  decorators: [
    story => `<style>
      jp-card {
        color: var(${neutralForegroundRest.cssCustomProperty});
        font-size: var(${typeRampBaseFontSize.cssCustomProperty});
        padding: 4px;
      }
      </style>
      ${story()}`
  ]
};

const Template = (
  args,
  { globals: { backgrounds, accent }, parameters }
): string => {
  setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-card>
    Card with text
  </jp-card>`;
};

export const Default = Template.bind({});
