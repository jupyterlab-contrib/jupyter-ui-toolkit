// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpRadio } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Radio: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    readonly?: boolean;
    required?: boolean;
    value?: string;
  },
  HTMLElement
> = wrap(jpRadio(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
Radio.displayName = 'Jupyter.Radio';
