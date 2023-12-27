import { Meta, StoryFn, StoryObj } from '@storybook/html';
import { StandardLuminance } from '../color/utilities/base-layer-luminance';

export default {
  title: 'Components/Design System Provider',
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    accentColor: {
      control: 'color',
      presetColors: [
        '#000000',
        '#ffffff',
        '#0078d4',
        '#107c10',
        '#5c2d91',
        '#d83b01',
        '#f2c812'
      ]
    },
    fillColor: {
      control: 'color',
      presetColors: [
        '#808080',
        '#73818c',
        '#718e71',
        '#7f738c',
        '#8c7a73',
        '#0078d4',
        '#107c10',
        '#5c2d91',
        '#d83b01'
      ]
    },
    neutralColor: { control: 'color' }
  }
} as Meta;

const Template: StoryFn = (args): string => {
  return `
<jp-design-system-provider
  fill-color="${args.fillColor}"
  accent-color="${args.accentColor}"
  neutral-color="${args.neutralColor}"
>
  <jp-button appearance="accent">Accent</jp-button><jp-button>Neutral</jp-button>
</jp-design-system-provider>
  `;
};

export const Default: StoryObj = { render: Template.bind({}) };

Default.args = {
  neutralColor: '#808080',
  accentColor: '#DA1A5F',
  fillColor: '#3b3b3b'
};
