// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpTreeView } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const TreeView: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    'render-collapsed-nodes'?: boolean;
  },
  HTMLElement
> = wrap(jpTreeView()) as any;
// @ts-expect-error unknown property
TreeView.displayName = 'Jupyter.TreeView';
