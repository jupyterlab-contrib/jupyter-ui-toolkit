// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpNumberField
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const NumberField: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    appearance?: 'outline' | 'filled';
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    'hide-step'?: boolean;
    list?: string;
    max?: number;
    maxlength?: number;
    min?: number;
    minlength?: number;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    step?: number;
    value?: string;
  },
  HTMLElement
> = wrap(jpNumberField(), {
  events: { onChange: 'change', onInput: 'input' }
}) as any;
// @ts-expect-error unknown property
NumberField.displayName = 'Jupyter.NumberField';
