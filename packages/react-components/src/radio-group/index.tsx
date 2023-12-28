// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpRadioGroup
} from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const RadioGroup: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
    name?: string;
    orientation?: 'horizontal' | 'vertical';
    readonly?: boolean;
    value?: string;
    'error-message'?: string;
  },
  HTMLElement
> = wrap(jpRadioGroup(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
RadioGroup.displayName = 'Jupyter.RadioGroup';
