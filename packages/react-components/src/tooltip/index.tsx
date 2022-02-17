// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpTooltip
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

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
