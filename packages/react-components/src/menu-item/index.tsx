// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpMenuItem
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

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
