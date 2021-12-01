// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { createPanels, PanelsArgs } from './fixtures/createPanels';

export default {
  title: 'Library/Panels',
  argTypes: {
    activeTab: {
      control: {
        type: 'select',
        options: ['Problems', 'Output', 'Debug Console', 'Terminal']
      }
    },
    hasComplexContent: { control: 'boolean' },
    tabMetaData: { control: 'array' },
    ariaLabel: { control: 'text' }
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
};

const Template = ({ ...args }: PanelsArgs) => {
  return createPanels({ ...args });
};

export const Default: any = Template.bind({});
Default.args = {
  activeTab: '',
  hasComplexContent: false,
  tabMetaData: [
    { title: 'PROBLEMS', hasBadge: false },
    { title: 'OUTPUT', hasBadge: false },
    { title: 'DEBUG CONSOLE', hasBadge: false },
    { title: 'TERMINAL', hasBadge: false }
  ],
  ariaLabel: 'Default'
};
Default.parameters = {
  docs: {
    source: {
      code: `<jp-panels aria-label="Default">\n\t<jp-panel-tab id="tab-1">PROBLEMS</jp-panel-tab>\n\t<jp-panel-tab id="tab-2">OUTPUT</jp-panel-tab>\n\t<jp-panel-tab id="tab-3">DEBUG CONSOLE</jp-panel-tab>\n\t<jp-panel-tab id="tab-4">TERMINAL</jp-panel-tab>\n\t<jp-panel-view id="view-1">\n\t\tProblems Content\n\t</jp-panel-view>\n\t<jp-panel-view id="view-2">\n\t\tOutput Content\n\t</jp-panel-view>\n\t<jp-panel-view id="view-3">\n\t\tDebug Console Content\n\t</jp-panel-view>\n\t<jp-panel-view id="view-4">\n\t\tTerminal Content\n\t</jp-panel-view>\n</jp-panels>`
    }
  }
};

export const WithActiveTab: any = Template.bind({});
WithActiveTab.args = {
  ...Default.args,
  activeTab: 'Terminal',
  ariaLabel: 'With Active Tab'
};
WithActiveTab.parameters = {
  docs: {
    source: {
      code: `<jp-panels activeid="tab-4" aria-label="With Active Tab">\n\t<jp-panel-tab id="tab-1">PROBLEMS</jp-panel-tab>\n\t<jp-panel-tab id="tab-2">OUTPUT</jp-panel-tab>\n\t<jp-panel-tab id="tab-3">DEBUG CONSOLE</jp-panel-tab>\n\t<jp-panel-tab id="tab-4">TERMINAL</jp-panel-tab>\n\t<jp-panel-view id="view-1">\n\t\tProblems Content\n\t</jp-panel-view>\n\t<jp-panel-view id="view-2">\n\t\tOutput Content\n\t</jp-panel-view>\n\t<jp-panel-view id="view-3">\n\t\tDebug Console Content\n\t</jp-panel-view>\n\t<jp-panel-view id="view-4">\n\t\tTerminal Content\n\t</jp-panel-view>\n</jp-panels>`
    }
  }
};

export const WithBadge: any = Template.bind({});
WithBadge.args = {
  ...Default.args,
  tabMetaData: [
    { title: 'PROBLEMS', hasBadge: true },
    { title: 'OUTPUT', hasBadge: true },
    { title: 'DEBUG CONSOLE', hasBadge: true },
    { title: 'TERMINAL', hasBadge: true }
  ],
  ariaLabel: 'With Badge'
};
WithBadge.parameters = {
  docs: {
    source: {
      code: `<jp-panels aria-label="With Badge">\n\t<jp-panel-tab id="tab-1">\n\t\tPROBLEMS\n\t\t<jp-badge appearance="secondary">1</jp-badge>\n\t</jp-panel-tab>\n\t<jp-panel-tab id="tab-2">\n\t\tOUTPUT\n\t\t<jp-badge appearance="secondary">1</jp-badge>\n\t</jp-panel-tab>\n\t<jp-panel-tab id="tab-3">\n\t\tDEBUG CONSOLE\n\t\t<jp-badge appearance="secondary">1</jp-badge>\n\t</jp-panel-tab>\n\t<jp-panel-tab id="tab-4">\n\t\tTERMINAL\n\t\t<jp-badge appearance="secondary">1</jp-badge>\n\t</jp-panel-tab>\n\t<jp-panel-view id="view-1">\n\t\tProblems Content\n\t</jp-panel-view>\n\t<jp-panel-view id="view-2">\n\t\tOutput Content\n\t</jp-panel-view>\n\t<jp-panel-view id="view-3">\n\t\tDebug Console Content\n\t</jp-panel-view>\n\t<jp-panel-view id="view-4">\n\t\tTerminal Content\n\t</jp-panel-view>\n</jp-panels>`
    }
  }
};

export const WithComplexContent: any = Template.bind({});
WithComplexContent.args = {
  ...Default.args,
  tabMetaData: [
    { title: 'PROBLEMS', hasBadge: false },
    { title: 'OUTPUT', hasBadge: false },
    { title: 'DEBUG CONSOLE', hasBadge: false },
    { title: 'TERMINAL', hasBadge: false }
  ],
  hasComplexContent: true,
  ariaLabel: 'With Complex Content'
};
WithComplexContent.parameters = {
  docs: {
    source: {
      code: `<jp-panels aria-label="With Complex Content">\n\t<jp-panel-tab id="tab-1">PROBLEMS</jp-panel-tab>\n\t<jp-panel-tab id="tab-2">OUTPUT</jp-panel-tab>\n\t<jp-panel-tab id="tab-3">DEBUG CONSOLE</jp-panel-tab>\n\t<jp-panel-tab id="tab-4">TERMINAL</jp-panel-tab>\n\t<jp-panel-view id="view-1">\n\t\t<section style="display: flex; flex-direction: column; width: 100%;">\n\t\t\t<h1 style="margin-top: 0;">Smoothie Maker 🍓</h1>\n\t\t\t<jp-checkbox>Apples</jp-checkbox>\n\t\t\t<jp-checkbox>Oranges</jp-checkbox>\n\t\t\t<jp-checkbox>Grapes</jp-checkbox>\n\t\t\t<jp-checkbox disabled>Blueberries</jp-checkbox>\n\t\t\t<jp-checkbox>Pineapple</jp-checkbox>\n\t\t\t<jp-checkbox>Mango</jp-checkbox>\n\t\t\t<jp-checkbox>Lemon</jp-checkbox>\n\t\t\t<jp-button style="margin-top: 1rem;">Make Smoothie!</jp-button>\n\t\t</section>\n\t</jp-panel-view>\n\t<jp-panel-view id="view-2">\n\t\t... Insert Complex Content ...\n\t</jp-panel-view>\n\t<jp-panel-view id="view-3">\n\t\t... Insert Complex Content ...\n\t</jp-panel-view>\n\t<jp-panel-view id="view-4">\n\t\t... Insert Complex Content ...\n\t</jp-panel-view>\n</jp-panels>`
    }
  }
};
