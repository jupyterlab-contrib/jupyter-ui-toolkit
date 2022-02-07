// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { getFaIcon, setTheme } from '../utilities/storybook';

export default {
  title: 'Breadcrumb',
  argTypes: {
    customChildren: { control: 'boolean' },
    svgSeparator: { control: 'boolean' },
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' }
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

  return `<jp-breadcrumb>
    ${[1, 2, 3]
      .map(v =>
        args.customChildren
          ? `<jp-breadcrumb-item>
          ${args.startIcon ? getFaIcon('folder', 'start') : ''}
          <jp-button>
            Breadcrumb item ${v}
          </jp-button>
          ${args.endIcon ? getFaIcon('robot', 'end') : ''}
          ${args.svgSeparator ? getFaIcon('angle-right', 'separator') : ''}
        </jp-breadcrumb-item>`
          : `<jp-breadcrumb-item href="#">
          ${args.startIcon ? getFaIcon('folder', 'start') : ''}
          Breadcrumb item ${v}
          ${args.endIcon ? getFaIcon('robot', 'end') : ''}
          ${args.svgSeparator ? getFaIcon('angle-right', 'separator') : ''}
        </jp-breadcrumb-item>`
      )
      .join('\n')}
  </jp-breadcrumb>`;
};

export const Default = Template.bind({});
Default.args = {
  customChildren: false,
  svgSeparator: false,
  startIcon: false,
  endIcon: false
};

export const WithCustomChildren = Template.bind({});
WithCustomChildren.args = {
  ...Default.args,
  customChildren: true
};

export const WithSvgSeparator = Template.bind({});
WithSvgSeparator.args = {
  ...Default.args,
  svgSeparator: true
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  ...Default.args,
  startIcon: true
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  ...Default.args,
  endIcon: true
};
