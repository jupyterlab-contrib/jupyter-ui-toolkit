// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpDateField } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

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
  },
  HTMLElement
> = wrap(jpDateField(), {
  events: { onChange: 'change' }
}) as any;
// @ts-expect-error unknown property
DateField.displayName = 'Jupyter.DateField';
