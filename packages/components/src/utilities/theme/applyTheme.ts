// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { parseColor } from '@microsoft/fast-colors';
import {
  accentPalette,
  baseLayerLuminance,
  bodyFont,
  neutralPalette,
  Palette,
  PaletteRGB,
  StandardLuminance,
  strokeWidth,
  Swatch,
  SwatchRGB,
  typeRampBaseFontSize
} from '@microsoft/fast-components';
import { DesignToken } from '@microsoft/fast-foundation';

const THEME_NAME_BODY_ATTRIBUTE = 'data-jp-theme-name';
const THEME_MODE_BODY_ATTRIBUTE = 'data-jp-theme-light';

/**
 * Flag to initialized only one listener
 */
let isThemeChangeInitialized = false;

/**
 * Configures a MutationObserver to watch for Jupyter theme changes and
 * applies the current Jupyter theme to the toolkit components.
 */
export function addJupyterLabThemeChangeListener(): void {
  if (!isThemeChangeInitialized) {
    isThemeChangeInitialized = true;
    initThemeChangeListener();
  }
}

function initThemeChangeListener(): void {
  const addObserver = () => {
    const observer = new MutationObserver(() => {
      applyCurrentTheme();
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [THEME_NAME_BODY_ATTRIBUTE],
      childList: false,
      characterData: false
    });

    applyCurrentTheme();
  };

  if (document.readyState === 'complete') {
    addObserver();
  } else {
    window.addEventListener('load', addObserver);
  }
}

/**
 * JupyterLab CSS variable to Design Token converter
 */
interface IConverter<T> {
  /**
   * Convert the CSS variable value to design token value
   */
  converter?: (value: string) => T | null;
  /**
   * Design token to update
   */
  token: DesignToken<T>;
}

/**
 * Convert a base color to a palette.
 *
 * @param value Color string
 * @returns The palette generated from the color
 */
const colorConverter = (value: string): Palette<Swatch> | null => {
  const parsedColor = parseColor(value);

  return parsedColor
    ? PaletteRGB.from(
        SwatchRGB.create(parsedColor.r, parsedColor.g, parsedColor.b)
      )
    : null;
};

/**
 * Convert a string to an integer.
 *
 * @param value String to convert
 * @returns Extracted integer or null
 */
const intConverter = (value: string): number | null => {
  const parsedValue = parseInt(value, 10);
  return isNaN(parsedValue) ? null : parsedValue;
};

/**
 * Mapping JupyterLab CSS variables to FAST design tokens
 */
const tokenMappings: { [key: string]: IConverter<any> } = {
  '--jp-border-width': {
    converter: intConverter,
    token: strokeWidth
  },
  '--jp-border-color1': {
    converter: colorConverter,
    token: neutralPalette
  },
  '--jp-brand-color1': {
    converter: colorConverter,
    token: accentPalette
  },
  '--jp-ui-font-family': {
    token: bodyFont
  },
  '--jp-ui-font-size1': {
    token: typeRampBaseFontSize
  }
};

/**
 * Applies the current Jupyter theme to the toolkit components.
 */
function applyCurrentTheme() {
  if (!document.body.getAttribute(THEME_NAME_BODY_ATTRIBUTE)) {
    return;
  }

  // Get all the styles applied to the <body> tag in the webview HTML
  // Importantly this includes all the CSS variables associated with the
  // current Jupyter theme
  const styles = getComputedStyle(document.body);

  // Set mode
  const value = document.body.getAttribute(THEME_MODE_BODY_ATTRIBUTE);
  baseLayerLuminance.setValueFor(
    document.body,
    value === 'false' ? StandardLuminance.DarkMode : StandardLuminance.LightMode
  );

  for (const jpTokenName in tokenMappings) {
    const toolkitTokenName = tokenMappings[jpTokenName];
    const value = styles.getPropertyValue(jpTokenName).toString();

    if (document.body && value !== '') {
      const parsedValue = (toolkitTokenName.converter ?? ((v: string) => v))(
        value.trim()
      );
      if (parsedValue !== null) {
        toolkitTokenName.token.setValueFor(document.body, parsedValue);
      } else {
        console.error(
          `Fail to parse value '${value}' for '${jpTokenName}' as FAST design token.`
        );
      }
    }
  }
}
