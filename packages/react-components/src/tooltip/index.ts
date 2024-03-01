// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpTooltip } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Tooltip: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    visible?: boolean;
    anchor?: string;
    delay?: number;
    'auto-update-mode'?: 'anchor' | 'auto';
    position?: 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
    'horizontal-viewport-lock'?: boolean;
    'vertical-viewport-lock'?: boolean;
    /**
     * @property
     */
    anchorElement?: HTMLElement | null;
  },
  HTMLElement
> = wrap(jpTooltip()) as any;
// @ts-expect-error unknown property
Tooltip.displayName = 'Jupyter.Tooltip';
