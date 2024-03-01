// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpTreeItem } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const TreeItem: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    expanded?: boolean;
    selected?: boolean;
    disabled?: boolean;
  },
  HTMLElement
> = wrap(jpTreeItem(), {
  events: { onExpand: 'expanded-change', onSelect: 'selected-change' }
}) as any;
// @ts-expect-error unknown property
TreeItem.displayName = 'Jupyter.TreeItem';
