// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { getFaIcon, setTheme } from '../utilities/storybook';

export default {
  title: 'Breadcrumb Item',
  argTypes: {
    href: { control: 'boolean' },
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

  return `<jp-breadcrumb-item 
    ${args.href ? 'href="#"' : ''}
    >
      ${args.startIcon ? getFaIcon('folder', 'start') : ''}
      Breadcrumb item
      ${args.endIcon ? getFaIcon('robot', 'end') : ''}
    </jp-breadcrumb-item>`;
};

export const Default = Template.bind({});
Default.args = {
  href: true,
  startIcon: false,
  endIcon: false
};

export const WithoutHref = Template.bind({});
WithoutHref.args = {
  ...Default.args,
  href: false
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
