// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpTabPanel
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const TabPanel: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> = wrap(jpTabPanel()) as any;
// @ts-expect-error unknown property
TabPanel.displayName = 'Jupyter.TabPanel';
