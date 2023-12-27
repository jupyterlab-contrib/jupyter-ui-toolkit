import { Meta, StoryFn, StoryObj } from '@storybook/html';

export default {
  title: 'Components/Disclosure',
  argTypes: {
    expanded: { control: 'boolean', defaultValue: false },
    appearance: {
      control: 'radio',
      options: ['accent', 'lightweight']
    },
    title: { control: 'text' },
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' }
  }
} as Meta;

const Template: StoryFn = (args, context): string => {
  const expanded = args.expanded ? 'expanded' : '';

  return `
<jp-disclosure title="${args.title}" appearance="${
    args.appearance
  }" ${expanded}>
${args.startIcon ? '<span slot="start">⚡️</span>' : ''}
${args.endIcon ? '<span slot="end">⚡️</span>' : ''}
<div>
    Created by writer Gardner Fox and artist Harry Lampert, the original Flash first
    appeared in Flash Comics #1 (cover date January 1940/release month November 1939).
    Nicknamed the "Scarlet Speedster", all incarnations of the Flash possess "super
    speed", which includes the ability to run, move, and think extremely fast, use
    superhuman reflexes, and seemingly violate certain laws of physics.
</div>
</jp-disclosure>
`;
};

export const Default: StoryObj = { render: Template.bind({}) };

Default.args = {
  title: 'More about Flash',
  appearance: 'accent',
  expanded: false,
  startIcon: false,
  endIcon: false
};
