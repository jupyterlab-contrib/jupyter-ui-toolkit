// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpTextField
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const TextField: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    autofocus?: boolean;
    cols?: number;
    disabled?: boolean;
    form?: string;
    maxlength?: number;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
    rows?: number;
    value?: string;
  },
  HTMLElement
> = wrap(jpTextField()) as any;
// @ts-expect-error unknown property
TextField.displayName = 'Jupyter.TextField';
