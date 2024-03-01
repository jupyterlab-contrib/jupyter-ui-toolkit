// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpProgressRing } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const ProgressRing: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    min?: number;
    max?: number;
    value?: number;
    paused?: boolean;
  },
  HTMLElement
> = wrap(
  jpProgressRing(),
  // Name need to be exported otherwise a `jp-progress` element is instantiated
  { name: 'jp-progress-ring' }
) as any;
// @ts-expect-error unknown property
ProgressRing.displayName = 'Jupyter.ProgressRing';
