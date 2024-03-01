// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpDesignSystemProvider } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const DesignSystemProvider: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    'no-paint'?: boolean;
    'fill-color'?: string;
    'accent-color'?: string;
    'neutral-color'?: string;
    'error-color'?: string;
    density?: number;
    'design-unit'?: number;
    direction?: 'ltr' | 'rtl';
    'base-height-multiplier'?: number;
    'base-horizontal-spacing-multiplier'?: number;
    'control-corner-radius'?: number;
    'stroke-width'?: number;
    'focus-stroke-width'?: number;
    'disabled-opacity'?: number;
    'type-ramp-minus-2-font-size'?: string;
    'type-ramp-minus-2-line-height'?: string;
    'type-ramp-minus-1-font-size'?: string;
    'type-ramp-minus-1-line-height'?: string;
    'type-ramp-base-font-size'?: string;
    'type-ramp-base-line-height'?: string;
    'type-ramp-plus-1-font-size'?: string;
    'type-ramp-plus-1-line-height'?: string;
    'type-ramp-plus-2-font-size'?: string;
    'type-ramp-plus-2-line-height'?: string;
    'type-ramp-plus-3-font-size'?: string;
    'type-ramp-plus-3-line-height'?: string;
    'type-ramp-plus-4-font-size'?: string;
    'type-ramp-plus-4-line-height'?: string;
    'type-ramp-plus-5-font-size'?: string;
    'type-ramp-plus-5-line-height'?: string;
    'type-ramp-plus-6-font-size'?: string;
    'type-ramp-plus-6-line-height'?: string;
    'accent-fill-rest-delta'?: number;
    'accent-fill-hover-delta'?: number;
    'accent-fill-active-delta'?: number;
    'accent-fill-focus-delta'?: number;
    'accent-foreground-rest-delta'?: number;
    'accent-foreground-hover-delta'?: number;
    'accent-foreground-active-delta'?: number;
    'accent-foreground-focus-delta'?: number;
    'neutral-fill-rest-delta'?: number;
    'neutral-fill-hover-delta'?: number;
    'neutral-fill-active-delta'?: number;
    'neutral-fill-focus-delta'?: number;
    'neutral-fill-input-rest-delta'?: number;
    'neutral-fill-input-hover-delta'?: number;
    'neutral-fill-input-active-delta'?: number;
    'neutral-fill-input-focus-delta'?: number;
    'neutral-fill-stealth-rest-delta'?: number;
    'neutral-fill-stealth-hover-delta'?: number;
    'neutral-fill-stealth-active-delta'?: number;
    'neutral-fill-stealth-focus-delta'?: number;
    'neutral-fill-strong-hover-delta'?: number;
    'neutral-fill-strong-active-delta'?: number;
    'neutral-fill-strong-focus-delta'?: number;
    'base-layer-luminance'?: number;
    'neutral-fill-layer-rest-delta'?: number;
    'neutral-stroke-divider-rest-delta'?: number;
    'neutral-stroke-rest-delta'?: number;
    'neutral-stroke-hover-delta'?: number;
    'neutral-stroke-active-delta'?: number;
    'neutral-stroke-focus-delta'?: number;
  },
  HTMLElement
> = wrap(jpDesignSystemProvider()) as any;
// @ts-expect-error unknown property
DesignSystemProvider.displayName = 'Jupyter.DesignSystemProvider';
