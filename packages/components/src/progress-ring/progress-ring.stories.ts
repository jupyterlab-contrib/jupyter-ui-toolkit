// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { createProgressRing } from './fixtures/createProgressRing';

export default {
  title: 'Library/Progress Ring',
  parameters: {
    actions: {
      disabled: true
    },
    controls: {
      disabled: true
    }
  }
};

const Template = () => {
  return createProgressRing();
};

export const Default: any = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<jp-progress-ring></jp-progress-ring>`
    }
  }
};
