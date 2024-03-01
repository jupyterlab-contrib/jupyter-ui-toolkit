// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpNumberField } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

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
