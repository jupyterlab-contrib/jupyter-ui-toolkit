import { action } from '@storybook/addon-actions';
import { getFaIcon, setTheme } from '../utilities/storybook';
import { TextField } from './index';

export default {
  title: 'Library/Text Field',
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    maxLength: { control: 'number' },
    size: { control: 'number' },
    type: {
      control: {
        type: 'select',
        options: ['Email', 'Password', 'Tel', 'Text', 'Url']
      }
    },
    isReadOnly: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isAutoFocused: { control: 'boolean' },
    startIcon: { control: 'boolean' },
    endIcon: { control: 'boolean' },
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    }
  }
};

const Template = (
  args,
  { globals: { backgrounds, accent }, parameters }
): HTMLElement => {
  setTheme(accent, parameters.backgrounds, backgrounds);
  const container = document.createElement('div');
  container.insertAdjacentHTML(
    'afterbegin',
    `<jp-text-field 
      ${args.placeholder ? `placeholder="${args.placeholder}"` : ''}
      ${args.maxLength ? `maxlength="${args.maxLength}"` : ''}
      ${args.size ? `size="${args.size}"` : ''}
      ${args.type ? `type="${args.type.toLowerCase()}"` : ''}
      ${args.readonly ? 'readonly' : ''}
      ${args.disabled ? 'disabled' : ''}
      ${args.autofocus ? 'autofocus' : ''}
    >
      ${args.startIcon ? getFaIcon('search', 'start') : ''}
      ${args.label}
      ${args.endIcon ? getFaIcon('euro-sign', 'end') : ''}
    </jp-text-field>`
  );

  const textField = container.firstChild as TextField;

  if (args.value) {
    textField.value = args.value;
  }

  if (args.onChange) {
    textField.addEventListener('change', args.onChange);
  }

  return textField;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Text Field Label',
  placeholder: '',
  value: '',
  maxLength: '',
  size: '',
  type: 'Text',
  isReadOnly: false,
  isDisabled: false,
  isAutoFocused: false,
  startIcon: false,
  endIcon: false,
  onChange: action('text-field-onchange')
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  placeholder: 'Placeholder Text'
};

export const WithAutofocus = Template.bind({});
WithAutofocus.args = {
  ...Default.args,
  autofocus: true
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  ...Default.args,
  disabled: true
};

export const WithSize = Template.bind({});
WithSize.args = {
  ...Default.args,
  placeholder: 'This text field is 50 characters in width',
  size: 50
};

export const WithType = Template.bind({});
WithType.args = {
  ...Default.args,
  placeholder: 'This text field has type password',
  type: 'Password'
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  ...Default.args,
  placeholder: 'This text field can only contain a maximum of 10 characters',
  maxLength: 10
};

export const WithReadonly = Template.bind({});
WithReadonly.args = {
  ...Default.args,
  readonly: true
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  ...Default.args,
  startIcon: true
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  ...Default.args,
  endIcon: true
};
