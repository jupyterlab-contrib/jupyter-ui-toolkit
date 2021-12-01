// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpTextArea
} from '@jupyter-notebook/ui-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const TextArea = wrap(jpTextArea());
// @ts-expect-error unknown property
TextArea.displayName = 'Jupyter.TextArea';
