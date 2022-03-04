// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { getFaIcon, setTheme } from '../utilities/storybook';

export default {
  title: 'Menu Item',
  argTypes: {
    role: {
      control: 'radio',
      options: ['menuitem', 'menuitemcheckbox', 'menuitemradio']
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
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

  return `<jp-menu-item
      ${args.role !== 'menuitem' ? `role="${args.role}"` : ''}
      ${args.checked && args.role !== 'menuitem' ? 'checked' : ''}
      ${args.disabled ? 'disabled' : ''}
    >
      ${args.startIcon ? getFaIcon('folder', 'start') : ''}
      Menu item
      ${args.endIcon ? getFaIcon('robot', 'end') : ''}
    </jp-menu-item>`;
};

export const Default = Template.bind({});
Default.args = {
  role: 'menuitem',
  checked: false,
  disabled: false,
  startIcon: false,
  endIcon: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  ...Default.args,
  role: 'menuitemcheckbox'
};

export const Radio = Template.bind({});
Radio.args = {
  ...Default.args,
  role: 'menuitemradio'
};
