// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { CSSDesignToken } from '@microsoft/fast-foundation';
import type { T } from '../design-tokens/create';

/**
 * Configures a MutationObserver to watch for Jupyter theme changes and
 * applies the current Jupyter theme to the toolkit components.
 */
export function initThemeChangeListener(tokenMappings: {
  [index: string]: CSSDesignToken<T>;
}): void {
  const addObserver = () => {
    const observer = new MutationObserver(() => {
      applyCurrentTheme(tokenMappings);
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-jp-theme-name'],
      childList: false,
      characterData: false
    });

    applyCurrentTheme(tokenMappings);
  };

  if (document.readyState === 'complete') {
    addObserver();
  } else {
    window.addEventListener('load', addObserver);
  }
}

/**
 * Applies the current Jupyter theme to the toolkit components.
 */
function applyCurrentTheme(tokenMappings: {
  [index: string]: CSSDesignToken<T>;
}) {
  // Get all the styles applied to the <body> tag in the webview HTML
  // Importantly this includes all the CSS variables associated with the
  // current Jupyter theme
  const styles = getComputedStyle(document.body);

  for (const jpTokenName in tokenMappings) {
    const toolkitTokenName = tokenMappings[jpTokenName];
    const body = document.querySelector('body');
    const value = styles.getPropertyValue(jpTokenName).toString();

    if (body) {
      toolkitTokenName.setValueFor(body, value);
    }
  }
}
