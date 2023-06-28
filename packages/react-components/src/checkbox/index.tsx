// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpCheckbox
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Checkbox: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    checked?: boolean;
    indeterminate?: boolean;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
  },
  HTMLElement
> = wrap(jpCheckbox(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
Checkbox.displayName = 'Jupyter.Checkbox';
