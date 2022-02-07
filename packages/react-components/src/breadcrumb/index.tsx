// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpBreadcrumb
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Breadcrumb: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    href?: string;
  },
  HTMLElement
> = wrap(jpBreadcrumb()) as any;
// @ts-expect-error unknown property
Breadcrumb.displayName = 'Jupyter.Breadcrumb';
