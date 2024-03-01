// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpSkeleton } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Skeleton: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    fill?: string;
    shape?: 'rect' | 'circle';
    pattern?: string;
    shimmer?: boolean;
  },
  HTMLElement
> = wrap(jpSkeleton()) as any;
// @ts-expect-error unknown property
Skeleton.displayName = 'Jupyter.Skeleton';
