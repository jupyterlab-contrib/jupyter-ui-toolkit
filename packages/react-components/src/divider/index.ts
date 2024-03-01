// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpDivider } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Divider: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    orientation?: 'horizontal' | 'vertical';
    role?: 'separator' | 'presentation';
  },
  HTMLElement
> = wrap(jpDivider()) as any;
// @ts-expect-error unknown property
Divider.displayName = 'Jupyter.Divider';
