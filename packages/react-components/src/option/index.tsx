// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpOption
} from '@jupyter-notebook/ui-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Option = wrap(jpOption());
// @ts-expect-error unknown property
Option.displayName = 'Juypter.Option';
