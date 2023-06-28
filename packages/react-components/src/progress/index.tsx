// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpProgress
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Progress: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    min?: number;
    max?: number;
    value?: number;
    paused?: boolean;
  },
  HTMLElement
> = wrap(jpProgress(), { name: 'jp-progress' }) as any;
// @ts-expect-error unknown property
Progress.displayName = 'Jupyter.Progress';
