// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { initThemeChangeListener } from './utilities/theme/applyTheme';

export * from './design-token';
export * from './jupyter-design-system';
// export * from './custom-elements';

// Export components and classes
export * from './button/index';

// Add Jupyter theme change listener
{
  let isThemeChangeInitialized = false;

  if (!isThemeChangeInitialized) {
    isThemeChangeInitialized = true;
    initThemeChangeListener();
  }
}
