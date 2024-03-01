// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpOption } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Option: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    checked?: boolean;
    defaultSelected?: boolean;
    disabled?: boolean;
    selected?: boolean;
    value?: string;
  },
  HTMLElement
> = wrap(jpOption()) as any;
// @ts-expect-error unknown property
Option.displayName = 'Juypter.Option';
