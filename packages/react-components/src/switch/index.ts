// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { jpSwitch } from '@jupyter/web-components';
import type React from 'react';
import { wrap } from '../wrap';

export const Switch: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    required?: boolean;
    readonly?: boolean;
  },
  HTMLElement
> = wrap(jpSwitch(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
Switch.displayName = 'Jupyter.Switch';
