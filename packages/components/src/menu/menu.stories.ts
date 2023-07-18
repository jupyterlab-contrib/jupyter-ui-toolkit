// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { getFaIcon, setTheme } from '../utilities/storybook';

export default {
  title: 'Components/Menu',
  parameters: {
    controls: {
      disabled: true
    },
    actions: {
      disabled: true
    }
  }
} as Meta;

const Template: StoryFn = (args, context): string => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);

  return `<jp-menu>
  <jp-menu-item role="menuitemcheckbox">
      ${getFaIcon('robot', 'start')}
      Menu item 1
      ${getFaIcon('robot', 'end')}
  </jp-menu-item>
  <jp-menu-item>
      Menu item 2
      <jp-menu>
          <jp-menu-item role="menuitemcheckbox">Checkbox 1</jp-menu-item>
          <jp-menu-item>Nested Menu item 1.1</jp-menu-item>
          <jp-menu-item>Nested Menu item 1.2</jp-menu-item>
          <jp-menu-item>Nested Menu item 1.3</jp-menu-item>
      </jp-menu>
  </jp-menu-item>
  <jp-menu-item>
      ${getFaIcon('robot', 'start')}
      Menu item 3
      <div slot="end">
          Shortcut text
      </div>
  </jp-menu-item>
  <jp-menu-item>
      Menu item 4
      <jp-menu slot="submenu">
          <jp-menu-item>Nested Menu item 4.1</jp-menu-item>
          <jp-menu-item>Nested Menu item 4.2</jp-menu-item>
          <jp-menu-item>Nested Menu item 4.3</jp-menu-item>
      </jp-menu>
  </jp-menu-item>
  <jp-menu-item>
      Menu item 5
      <jp-menu slot="submenu">
          <jp-menu-item role="menuitemcheckbox">Checkbox 1</jp-menu-item>
          <jp-menu-item>
              Nested Menu item 5.1
              <jp-menu>
                  <jp-menu-item role="menuitemcheckbox">Checkbox 1</jp-menu-item>
                  <jp-menu-item>Nested Menu item 5.1.1</jp-menu-item>
                  <jp-menu-item>Nested Menu item 5.1.2</jp-menu-item>
                  <jp-menu-item>Nested Menu item 5.1.3</jp-menu-item>
              </jp-menu>
          </jp-menu-item>
          <jp-menu-item disabled="true">
              Nested Menu item 5.2
              <jp-menu slot="submenu">
                  <jp-menu-item>Nested Menu item 5.2.1</jp-menu-item>
                  <jp-menu-item>Nested Menu item 5.2.2</jp-menu-item>
                  <jp-menu-item>Nested Menu item 5.2.3</jp-menu-item>
              </jp-menu>
          </jp-menu-item>
          <jp-menu-item>
              Nested Menu item 5.3
              <jp-menu slot="submenu">
                  <jp-menu-item>Nested Menu item 5.3.1</jp-menu-item>
                  <jp-menu-item>Nested Menu item 5.3.2</jp-menu-item>
                  <jp-menu-item>Nested Menu item 5.3.3</jp-menu-item>
              </jp-menu>
          </jp-menu-item>
      </jp-menu>
  </jp-menu-item>
</jp-menu>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = {};
