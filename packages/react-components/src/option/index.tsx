// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpOption
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Option: React.DetailedHTMLFactory<
React.HTMLAttributes<HTMLElement> & {
  disabled?: boolean;
  selected?: boolean;
  value?: string;
},
HTMLElement
> = wrap(jpOption()) as any;
// @ts-expect-error unknown property
Option.displayName = 'Juypter.Option';
