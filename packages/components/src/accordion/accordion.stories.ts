// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { setTheme } from '../utilities/storybook';

export default {
  title: 'Accordion',

  parameters: {
    controls: {
      disabled: true
    },
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

  return `
  <jp-accordion>
      <jp-accordion-item expanded>
          <span slot="heading">Panel one</span>
          Panel one content
      </jp-accordion-item>
      <jp-accordion-item>
          <span slot="heading">Panel two</span>
          Panel two content
      </jp-accordion-item>
      <jp-accordion-item expanded>
          <span slot="heading">Panel three</span>
          Panel three content
      </jp-accordion-item>
  </jp-accordion>`;
};

export const Default = Template.bind({});
Default.args = {};
