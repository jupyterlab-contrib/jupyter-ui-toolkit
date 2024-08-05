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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" fill="currentColor"/></svg>`
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
