// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpSlider } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Slider: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    min?: string;
    max?: string;
    step?: string;
    value?: string;
    direction?: 'ltr' | 'rtl';
    orientation?: 'horizontal' | 'vertical';
    disabled?: boolean;
    readonly?: boolean;
  },
  HTMLElement
> = wrap(jpSlider(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
Slider.displayName = 'Jupyter.Slider';
