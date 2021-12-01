// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { action } from '@storybook/addon-actions';
import { ButtonArgs, createButton } from './fixtures/createButton';

export default {
  title: 'Library/Button',
  argTypes: {
    label: { control: 'text' },
    appearance: {
      control: {
        type: 'select',
        options: ['Primary', 'Secondary', 'Icon']
      }
    },
    isDisabled: { control: 'boolean' },
    isAutoFocused: { control: 'boolean' },
    startIcon: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    onClick: {
      action: 'clicked',
      table: {
        disable: true
      }
    }
  }
};

const Template = ({ ...args }: ButtonArgs) => {
  return createButton({ ...args });
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Button Text',
  appearance: 'Primary',
  isDisabled: false,
  isAutoFocused: false,
  startIcon: false,
  iconOnly: false,
  onClick: action('button-clicked')
};
Default.parameters = {
  docs: {
    source: {
      code: `<jp-button>Button Text</jp-button>`
    }
  }
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  ...Default.args,
  appearance: 'Secondary'
};
Secondary.parameters = {
  docs: {
    source: {
      code: `<jp-button appearance="secondary">Button Text</jp-button>`
    }
  }
};

export const WithAutofocus: any = Template.bind({});
WithAutofocus.args = {
  ...Default.args,
  isAutoFocused: true
};
WithAutofocus.parameters = {
  docs: {
    source: {
      code: `<jp-button autofocus>Button Text</jp-button>`
    }
  }
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
  ...Default.args,
  isDisabled: true
};
WithDisabled.parameters = {
  docs: {
    source: {
      code: `<jp-button disabled>Button Text</jp-button>`
    }
  }
};

export const WithStartIcon: any = Template.bind({});
WithStartIcon.args = {
  ...Default.args,
  startIcon: true
};
WithStartIcon.parameters = {
  docs: {
    source: {
      code: `<!-- Note: Using Visual Studio Code Codicon Library -->\n\n<jp-button>\n\tButton Text\n\t<span slot="start" class="codicon codicon-add"></span>\n</jp-button>`
    }
  }
};

export const WithIconOnly: any = Template.bind({});
WithIconOnly.args = {
  ...Default.args,
  appearance: 'Icon',
  iconOnly: true,
  ariaLabel: 'Confirm'
};
WithIconOnly.parameters = {
  docs: {
    source: {
      code: `<!-- Note: Using Visual Studio Code Codicon Library -->\n\n<jp-button appearance="icon" aria-label="Confirm">\n\t<span class="codicon codicon-check"></span>\n</jp-button>`
    }
  }
};
