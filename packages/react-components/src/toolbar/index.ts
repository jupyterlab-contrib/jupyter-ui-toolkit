// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpToolbar } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Toolbar: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    orientation?: 'horizontal' | 'vertical';
  },
  HTMLElement
> = wrap(jpToolbar()) as any;
// @ts-expect-error unknown property
Toolbar.displayName = 'Jupyter.Toolbar';
