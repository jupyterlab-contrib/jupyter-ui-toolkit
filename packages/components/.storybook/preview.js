import * as JupyterComponents from '../src/index-rollup';
import { themes } from '@storybook/theming';

JupyterComponents;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Docs', 'Library']
    },
    isToolshown: true,
    enableShortcuts: false
  },
  docs: {
    theme: themes.dark
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#f9f9f9'
      },
      {
        name: 'dark',
        value: '#252526'
      }
    ]
  }
};
