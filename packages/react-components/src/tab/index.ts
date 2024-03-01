// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpTab } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Tab: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
  },
  HTMLElement
> = wrap(jpTab()) as any;
// @ts-expect-error unknown property
Tab.displayName = 'Jupyter.Tab';
