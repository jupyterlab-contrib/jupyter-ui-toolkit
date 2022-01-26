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

export const globalTypes = {
  accent: {
    name: 'Accent',
    description: 'Theme accent color for components',
    defaultValue: '#006CBE',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: '#006CBE', right: '🔵', title: 'blue' },
        { value: '#DA1A5F', title: 'pink' }
      ],
      // Property that specifies if the name of the item will be displayed
      showName: false
    }
  }
};
