// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpSwitch
} from '@jupyter-notebook/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Switch: React.DetailedHTMLFactory<
  React.HTMLAttributes<HTMLElement> & {
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    required?: boolean;
    readonly?: boolean;
  },
  HTMLElement
> = wrap(jpSwitch(), { events: { onChange: 'change' } }) as any;
// @ts-expect-error unknown property
Switch.displayName = 'Jupyter.Switch';
