// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { provideJupyterDesignSystem, jpToolbar } from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Toolbar: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    orientation?: 'horizontal' | 'vertical';
  },
  HTMLElement
> = wrap(jpToolbar()) as any;
// @ts-expect-error unknown property
Toolbar.displayName = 'Jupyter.Toolbar';
