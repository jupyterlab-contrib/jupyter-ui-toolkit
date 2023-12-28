// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpTextField
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const TextField: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    appearance?: 'outline' | 'filled';
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    list?: string;
    maxlength?: number;
    minlength?: number;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    spellcheck?: boolean;
    type?: 'text' | 'email' | 'password' | 'tel' | 'url';
    value?: string;
    'error-message'?: string;
  },
  HTMLElement
> = wrap(jpTextField(), {
  events: { onChange: 'change', onInput: 'input' }
}) as any;
// @ts-expect-error unknown property
TextField.displayName = 'Jupyter.TextField';
