// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpRadioGroup
} from '@jupyter-notebook/ui-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const RadioGroup = wrap(jpRadioGroup());
// @ts-expect-error unknown property
RadioGroup.displayName = 'Jupyter.RadioGroup';
