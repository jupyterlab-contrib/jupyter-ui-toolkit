// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpTreeItem
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const TreeItem: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    expanded?: boolean;
    selected?: boolean;
    disabled?: boolean;
  },
  HTMLElement
> = wrap(jpTreeItem()) as any;
// @ts-expect-error unknown property
TreeItem.displayName = 'Jupyter.TreeItem';
