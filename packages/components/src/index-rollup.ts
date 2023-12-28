// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { allComponents } from './custom-elements.js';
import { provideJupyterDesignSystem } from './jupyter-design-system.js';

export * from './index.js';

/**
 * The global Jupyter Design System.
 * @remarks
 * Only available if the components are added through a script tag
 * rather than a module/build system.
 */
export const JupyterDesignSystem =
  provideJupyterDesignSystem().register(allComponents);
