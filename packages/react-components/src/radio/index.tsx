// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpRadio
} from '@jupyter-notebook/ui-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Radio = wrap(jpRadio());
// @ts-expect-error unknown property
Radio.displayName = 'Jupyter.Radio';
