// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpSliderLabel } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const SliderLabel: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    position?: string;
    'hide-mark'?: boolean;
    disabled?: boolean;
  },
  HTMLElement
> = wrap(jpSliderLabel()) as any;
// @ts-expect-error unknown property
SliderLabel.displayName = 'Jupyter.SliderLabel';
