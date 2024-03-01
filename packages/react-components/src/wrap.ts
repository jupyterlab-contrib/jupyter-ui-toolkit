// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { provideJupyterDesignSystem } from '@jupyter/web-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

export const { wrap } = provideReactWrapper(
  React,
  provideJupyterDesignSystem()
);
