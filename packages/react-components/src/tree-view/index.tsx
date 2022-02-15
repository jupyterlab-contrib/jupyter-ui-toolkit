// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpTreeView
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const TreeView: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    'render-collapsed-nodes'?: boolean;
  },
  HTMLElement
> = wrap(jpTreeView()) as any;
// @ts-expect-error unknown property
TreeView.displayName = 'Jupyter.TreeView';
