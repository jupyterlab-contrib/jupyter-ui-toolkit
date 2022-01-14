// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpDropdown
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Dropdown: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
    open?: boolean;
    position?: 'above' | 'below';
  },
  HTMLElement
> = wrap(jpDropdown()) as any;
// @ts-expect-error unknown property
Dropdown.displayName = 'Jupyter.Dropdown';
