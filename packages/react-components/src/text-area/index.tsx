// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpTextArea
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const TextArea: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    autofocus?: boolean;
    cols?: number;
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
> = wrap(jpTextArea()) as any;
// @ts-expect-error unknown property
TextArea.displayName = 'Jupyter.TextArea';
