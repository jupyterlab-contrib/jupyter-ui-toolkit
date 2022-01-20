// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpButton
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Button: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    appearance?: 'accent' | 'neutral' | 'outline' | 'stealth';
    'aria-label'?: string;
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    formaction?: string;
    formenctype?: string;
    formmethod?: string;
    formtarget?: string;
    name?: string;
    type?: string;
    value?: string;
  },
  HTMLElement
> = wrap(jpButton()) as any;
// @ts-expect-error unknown property
Button.displayName = 'Jupyter.Button';
