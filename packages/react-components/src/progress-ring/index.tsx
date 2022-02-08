// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpProgressRing
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const ProgressRing: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    min?: number;
    max?: number;
    value?: number;
    paused?: boolean;
  },
  HTMLElement
> = wrap(jpProgressRing()) as any;
// @ts-expect-error unknown property
ProgressRing.displayName = 'Jupyter.ProgressRing';
