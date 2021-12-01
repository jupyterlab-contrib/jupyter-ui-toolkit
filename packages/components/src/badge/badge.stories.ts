// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { BadgeArgs, createBadge } from './fixtures/createBadge';

export default {
  title: 'Library/Badge',
  argTypes: {
    label: { control: 'number' }
  },
  parameters: {
    actions: {
      disabled: true
    }
  }
};

const Template = ({ ...args }: BadgeArgs) => {
  return createBadge({ ...args });
};

export const Default: any = Template.bind({});
Default.args = {
  label: '1'
};
Default.parameters = {
  docs: {
    source: {
      code: `<jp-badge>1</jp-badge>`
    }
  }
};
