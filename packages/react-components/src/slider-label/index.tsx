// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpSliderLabel
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const SliderLabel: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    position?: string;
    'hide-mark'?: boolean;
    disabled?: boolean;
  },
  HTMLElement
> = wrap(jpSliderLabel()) as any;
// @ts-expect-error unknown property
SliderLabel.displayName = 'Jupyter.SliderLabel';
