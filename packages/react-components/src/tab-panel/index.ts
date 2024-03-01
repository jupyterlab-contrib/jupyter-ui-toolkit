// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpTabPanel } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const TabPanel: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> = wrap(jpTabPanel()) as any;
// @ts-expect-error unknown property
TabPanel.displayName = 'Jupyter.TabPanel';
