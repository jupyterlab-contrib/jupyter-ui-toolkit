// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpCheckbox
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Checkbox: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    checked?: boolean;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
  },
  HTMLElement
> = wrap(jpCheckbox()) as any;
// @ts-expect-error unknown property
Checkbox.displayName = 'Jupyter.Checkbox';
