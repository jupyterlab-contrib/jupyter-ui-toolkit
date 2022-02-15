// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpCombobox
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Combobox: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    autocomplete?: 'inline' | 'list' | 'both' | 'none';
    disabled?: boolean;
    name?: string;
    position?: 'above' | 'below';
    placeholder?: 'string';
    value?: 'string';
  },
  HTMLElement
> = wrap(jpCombobox()) as any;
// @ts-expect-error unknown property
Combobox.displayName = 'Jupyter.Combobox';
