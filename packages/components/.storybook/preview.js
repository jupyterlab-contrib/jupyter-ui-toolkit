import * as JupyterComponents from '../src/index-rollup';
import { themes } from '@storybook/theming';
import { withTheme } from '../src/utilities/storybook';

// Ensure the components are not tree shaked.
JupyterComponents;

const parameters = {
  // actions: { argTypesRegex: '^on[A-Z].*' },
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

const globalTypes = {
  accent: {
    name: 'Accent color',
    description: 'Theme accent color for components',
    defaultValue: '#006CBE',
    toolbar: {
      title: 'Accent color',
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: '#006CBE', right: '🔵', title: 'blue' },
        { value: '#DA1A5F', title: 'pink' },
        { value: '#f2c812', title: 'yellow' }
      ],
      dynamicTitle: true
    }
  },
  density: {
    name: 'Density',
    description: 'UI element density',
    defaultValue: 0,
    toolbar: {
      title: 'Density',
      icon: 'grow',
      items: [
        { value: -4, title: 'xsmall' },
        { value: -2, title: 'small' },
        { value: 0, title: 'medium' },
        { value: 2, title: 'large' },
        { value: 4, title: 'xlarge' }
      ],
      dynamicTitle: true
    }
  }
};

const preview = {
  parameters,
  globalTypes,
  decorators: [withTheme],
  tags: ['autodocs']
};

export default preview;
