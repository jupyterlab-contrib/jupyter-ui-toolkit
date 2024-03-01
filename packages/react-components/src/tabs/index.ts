// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpTabs } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Tabs: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    activeid?: string;
    activeindicator?: boolean;
    orientation?: 'horizontal' | 'vertical';
  },
  HTMLElement
> = wrap(jpTabs(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
Tabs.displayName = 'Jupyter.Tabs';
