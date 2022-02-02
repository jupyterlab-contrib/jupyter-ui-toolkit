// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { initThemeChangeListener } from './utilities/theme/applyTheme';

export * from './design-token';
export * from './jupyter-design-system';
export * from './custom-elements';

// Export components and classes
export * from './avatar/index';
export * from './breadcrumb/index';
export * from './breadcrumb-item/index';
export * from './button/index';
export * from './option/index';
export * from './select/index';
export * from './text-field/index';

// Add Jupyter theme change listener
{
  let isThemeChangeInitialized = false;

  if (!isThemeChangeInitialized) {
    isThemeChangeInitialized = true;
    initThemeChangeListener();
  }
}
