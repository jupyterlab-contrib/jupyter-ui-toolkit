// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpBreadcrumbItem
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const BreadcrumbItem: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    separator?: boolean;
  },
  HTMLElement
> = wrap(jpBreadcrumbItem()) as any;
// @ts-expect-error unknown property
BreadcrumbItem.displayName = 'Jupyter.BreadcrumbItem';
