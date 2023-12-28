// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpDateField
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const DateField: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    appearance?: 'outline' | 'filled';
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    'hide-step'?: boolean;
    list?: string;
    max?: Date;
    min?: Date;
    name?: string;
    readonly?: boolean;
    required?: boolean;
    step?: number;
    value?: string;
    'error-message'?: string;
  },
  HTMLElement
> = wrap(jpDateField(), {
  events: { onChange: 'change' }
}) as any;
// @ts-expect-error unknown property
DateField.displayName = 'Jupyter.DateField';
