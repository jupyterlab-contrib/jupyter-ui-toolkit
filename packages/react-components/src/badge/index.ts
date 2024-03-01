// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpBadge } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Badge: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    circular?: boolean;
    color?: string;
    fill?: string;
  },
  HTMLElement
> = wrap(jpBadge()) as any;
// @ts-expect-error unknown property
Badge.displayName = 'Jupyter.Badge';
