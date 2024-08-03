import type { StoryFn, Meta, StoryObj } from '@storybook/html';
import { Icon } from './index';

// Register the icon with proper SVG formatting
Icon.register({
  name: 'search',
  svgStr: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
    </svg>`
});

export default {
  title: 'Components/Icon',
  argTypes: {
    name: { control: 'select', options: ['search', 'default'] }
  },
  parameters: {
    actions: { disabled: true }
  }
} as Meta;

const Template: StoryFn = (args, context): string => {
  if (args.delay !== undefined) {
    setTimeout(() => {
      Icon.register({
        name: 'search',
        svgStr: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 24 24" height="24px fill="#e8eaed">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
    </svg>`
      });
    }, args.delay);
  }

  return `<jp-icon name="${args.name}"></jp-icon>`;
};

export const Default: StoryObj = { render: Template.bind({}) };
Default.args = { name: 'search' };
export const ChangeIcon: StoryObj = { render: Template.bind({}) };
ChangeIcon.args = {
  ...Default.args,
  delay: 2000 // Two seconds delay
};
