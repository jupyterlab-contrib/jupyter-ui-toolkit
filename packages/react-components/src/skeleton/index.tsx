// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpSkeleton
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

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
