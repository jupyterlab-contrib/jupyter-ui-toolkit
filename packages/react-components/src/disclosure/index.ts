// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpDisclosure } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Disclosure: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    appearance?: 'accent' | 'lightweight';
    expanded?: boolean;
    title?: string;
  },
  HTMLElement
> = wrap(jpDisclosure(), {
  events: { onToggle: 'toggle' }
}) as any;
// @ts-expect-error unknown property
Disclosure.displayName = 'Jupyter.Disclosure';
