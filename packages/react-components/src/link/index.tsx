// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  provideJupyterDesignSystem,
  jpLink
} from '@jupyter-notebook/ui-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(React, provideJupyterDesignSystem());

export const Link = wrap(jpLink());
// @ts-expect-error unknown property
Link.displayName = 'Jupyter.Link';
