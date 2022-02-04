// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpTabs
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Tabs: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    activeid?: string;
    activeindicator?: boolean;
    orientation?: 'horizontal' | 'vertical';
  },
  HTMLElement
> = wrap(jpTabs()) as any;
// @ts-expect-error unknown property
Tabs.displayName = 'Jupyter.Tabs';
