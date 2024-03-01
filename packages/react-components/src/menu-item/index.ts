// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpMenuItem } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const MenuItem: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    checked?: boolean;
    disabled?: boolean;
    expanded?: boolean;
    role?: 'menuitem' | 'menuitemcheckbox' | 'menuitemradio';
  },
  HTMLElement
> = wrap(jpMenuItem(), { events: { onExpand: 'expanded-change' } }) as any;
// @ts-expect-error unknown property
MenuItem.displayName = 'Jupyter.MenuItem';
