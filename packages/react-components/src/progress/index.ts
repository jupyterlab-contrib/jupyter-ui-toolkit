// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpProgress } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Progress: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    min?: number;
    max?: number;
    value?: number;
    paused?: boolean;
  },
  HTMLElement
> = wrap(jpProgress(), { name: 'jp-progress' }) as any;
// @ts-expect-error unknown property
Progress.displayName = 'Jupyter.Progress';
