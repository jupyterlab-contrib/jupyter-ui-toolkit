// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpAnchor } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Anchor: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    appearance?:
      | 'accent'
      | 'lightweight'
      | 'neutral'
      | 'outline'
      | 'stealth'
      | 'hypertext';
    download?: string;
    href?: string;
    hreflang?: string;
    ping?: string;
    referrerpolicy?: string;
    rel?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    type?: string;
  },
  HTMLElement
> = wrap(jpAnchor()) as any;
// @ts-expect-error unknown property
Anchor.displayName = 'Jupyter.Anchor';
