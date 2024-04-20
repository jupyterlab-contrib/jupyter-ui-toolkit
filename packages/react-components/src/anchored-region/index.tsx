// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpAnchoredRegion
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const AnchoredRegion: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    anchor: string;
    viewport?: string;
    'horizontal-positioning-mode'?:
      | 'uncontrolled'
      | 'locktodefault'
      | 'dynamic';
    'horizontal-default-position'?:
      | 'start'
      | 'end'
      | 'left'
      | 'right'
      | 'unset'
      | 'center';
    'horizontal-inset'?: boolean;
    'horizontal-viewport-lock'?: boolean;
    'horizontal-threshold'?: number;
    'horizontal-scaling'?: 'anchor' | 'fill' | 'content';
    'vertical-positioning-mode'?: 'uncontrolled' | 'locktodefault' | 'dynamic';
    'vertical-default-position'?: 'top' | 'bottom' | 'unset' | 'center';
    'vertical-inset'?: boolean;
    'vertical-viewport-lock'?: boolean;
    'vertical-threshold'?: number;
    'vertical-scaling'?: 'anchor' | 'fill' | 'content';
    'fixed-placement'?: boolean;
    'auto-update-mode'?: 'anchor' | 'auto';
    /**
     * @property
     */
    anchorElement?: HTMLElement | null;
    /**
     * @property
     */
    viewportElement?: HTMLElement | null;
  },
  HTMLElement
> = wrap(jpAnchoredRegion()) as any;
// @ts-expect-error unknown property
AnchoredRegion.displayName = 'Jupyter.AnchoredRegion';
