// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { provideJupyterDesignSystem, jpListbox } from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Listbox: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
    multiple?: boolean;
    size?: number;
  },
  HTMLElement
> = wrap(jpListbox()) as any;
// @ts-expect-error unknown property
Listbox.displayName = 'Jupyter.Listbox';
