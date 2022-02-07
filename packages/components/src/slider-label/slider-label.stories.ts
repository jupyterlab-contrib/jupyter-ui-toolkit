// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { setTheme } from '../utilities/storybook';

export default {
  title: 'Slider Label',
  argTypes: {
    hideMark: { control: 'boolean' },
    disabled: { control: 'boolean' }
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

  return `<jp-slider-label
    ${args.hideMark ? 'hide-mark="true"' : ''}
    ${args.disabled ? 'disabled' : ''}
    >
      Label
    </jp-slider-label>`;
};

export const Default = Template.bind({});
Default.args = {
  hideMark: false,
  position: null,
  disabled: false
};

export const WithHideMark = Template.bind({});
WithHideMark.args = {
  ...Default.args,
  hideMark: true
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  ...Default.args,
  disabled: true
};
