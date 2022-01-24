export default {
  title: 'Library/Option',
  argTypes: {
    label: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isSelected: { control: 'boolean' }
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
};

const Template = ({ ...args }): string => {
  return `<jp-option ${args.isDisabled ? 'disabled' : ''}${
    args.isSelected ? 'selected' : ''
  }>${args.label}</jp-option>`;
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Option Label',
  isDisabled: false,
  isSelected: false
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};

export const WithSelected: any = Template.bind({});
WithSelected.args = {
  ...Default.args,
  isSelected: true
};
