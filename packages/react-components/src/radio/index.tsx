// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpRadio
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

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
