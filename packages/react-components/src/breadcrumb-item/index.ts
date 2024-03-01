// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpBreadcrumbItem } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const BreadcrumbItem: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    download?: string;
    href?: string;
    hreflang?: string;
    ping?: string;
    referrerpolicy?: string;
    rel?: string;
    /**
     * Whether to display breadcrumb item separator
     */
    separator?: boolean;
    target?: '_self' | '_blank' | '_parent' | '_top';
    type?: string;
  },
  HTMLElement
> = wrap(jpBreadcrumbItem()) as any;
// @ts-expect-error unknown property
BreadcrumbItem.displayName = 'Jupyter.BreadcrumbItem';
