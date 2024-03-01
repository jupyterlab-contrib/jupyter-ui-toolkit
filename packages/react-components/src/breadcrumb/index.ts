// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpBreadcrumb } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Breadcrumb: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    href?: string;
  },
  HTMLElement
> = wrap(jpBreadcrumb()) as any;
// @ts-expect-error unknown property
Breadcrumb.displayName = 'Jupyter.Breadcrumb';
