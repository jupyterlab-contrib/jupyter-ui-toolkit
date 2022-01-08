// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpCheckbox
} from '@jupyter-notebook/ui-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Checkbox: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    autofocus?: boolean;
    checked?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    value?: string;
    indeterminate?: boolean
  },
  HTMLElement
> = wrap(jpCheckbox()) as any;
// @ts-expect-error unknown property
Checkbox.displayName = 'Jupyter.Checkbox';
