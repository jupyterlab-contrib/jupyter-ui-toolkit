// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpSlider
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Slider: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    min?: string;
    max?: string;
    step?: string;
    value?: string;
    direction?: 'ltr' | 'rtl';
    orientation?: 'horizontal' | 'vertical';
    disabled?: boolean;
    readonly?: boolean;
  },
  HTMLElement
> = wrap(jpSlider(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
Slider.displayName = 'Jupyter.Slider';
