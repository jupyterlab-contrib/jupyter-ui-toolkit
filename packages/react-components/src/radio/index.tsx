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
  readonly?: boolean;
  value?: string;
},
HTMLElement
> = wrap(jpRadio()) as any;
// @ts-expect-error unknown property
Radio.displayName = 'Jupyter.Radio';
