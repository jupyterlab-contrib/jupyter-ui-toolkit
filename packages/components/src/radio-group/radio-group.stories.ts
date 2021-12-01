// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { createRadioGroup, RadioGroupArgs } from './fixtures/createRadioGroup';

export default {
  title: 'Library/Radio Group',
  argTypes: {
    label: { control: 'text' },
    orientation: {
      control: {
        type: 'select',
        options: ['Vertical', 'Horizontal']
      }
    },
    numberOfChildren: { control: 'number' },
    isDisabled: { control: 'boolean' },
    isReadonly: { control: 'boolean' }
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
};

const Template = ({ ...args }: RadioGroupArgs) => {
  return createRadioGroup({ ...args });
};

export const Default: any = Template.bind({});
Default.args = {
  label: 'Radio Group Label',
  orientation: 'Horizontal',
  numberOfChildren: 3,
  isDisabled: false,
  isReadonly: false
};
Default.parameters = {
  docs: {
    source: {
      code: `<jp-radio-group>\n\t<label slot="label">Radio Group Label</label>\n\t<jp-radio>Radio Label</jp-radio>\n\t<jp-radio>Radio Label</jp-radio>\n\t<jp-radio>Radio Label</jp-radio>\n</jp-radio-group>`
    }
  }
};

export const WithVerticalOrientation: any = Template.bind({});
WithVerticalOrientation.args = {
  ...Default.args,
  orientation: 'Vertical'
};
WithVerticalOrientation.parameters = {
  docs: {
    source: {
      code: `<jp-radio-group orientation="vertical">\n\t<label slot="label">Radio Group Label</label>\n\t<jp-radio>Radio Label</jp-radio>\n\t<jp-radio>Radio Label</jp-radio>\n\t<jp-radio>Radio Label</jp-radio>\n</jp-radio-group>`
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
      code: `<jp-radio-group disabled>\n\t<label slot="label">Radio Group Label</label>\n\t<jp-radio>Radio Label</jp-radio>\n\t<jp-radio>Radio Label</jp-radio>\n\t<jp-radio>Radio Label</jp-radio>\n</jp-radio-group>`
    }
  }
};

export const WithReadonly: any = Template.bind({});
WithReadonly.args = {
  ...Default.args,
  isReadonly: true
};
WithReadonly.parameters = {
  docs: {
    source: {
      code: `<jp-radio-group readonly>\n\t<label slot="label">Radio Group Label</label>\n\t<jp-radio>Radio Label</jp-radio>\n\t<jp-radio>Radio Label</jp-radio>\n\t<jp-radio>Radio Label</jp-radio>\n</jp-radio-group>`
    }
  }
};
