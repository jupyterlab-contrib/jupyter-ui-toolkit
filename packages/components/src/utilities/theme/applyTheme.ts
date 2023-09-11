// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  ColorHSL,
  hslToRGB,
  parseColor,
  rgbToHSL
} from '@microsoft/fast-colors';
import { isDark } from '@microsoft/fast-components';
import { DesignToken } from '@microsoft/fast-foundation';
import {
  Palette,
  PaletteRGB,
  StandardLuminance,
  Swatch,
  SwatchRGB
} from '../../color';
import {
  accentFillHoverDelta,
  accentPalette,
  baseLayerLuminance,
  bodyFont,
  controlCornerRadius,
  neutralPalette,
  strokeWidth,
  typeRampBaseFontSize
} from '../../design-tokens';

const THEME_NAME_BODY_ATTRIBUTE = 'data-jp-theme-name';
const THEME_MODE_BODY_ATTRIBUTE = 'data-jp-theme-light';
// Use to determine the neutral color and possibly if theme is dark
const BASE_LAYOUT_COLOR = '--jp-layout-color1';

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
      applyJupyterTheme();
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [THEME_NAME_BODY_ATTRIBUTE],
      childList: false,
      characterData: false
    });

    applyJupyterTheme();
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
interface IConverter<
  T extends
    | string
    | number
    | boolean
    | BigInteger
    | null
    | Array<any>
    | symbol
    // eslint-disable-next-line @typescript-eslint/ban-types
    | {}
> {
  /**
   * Convert the CSS variable value to design token value
   */
  converter?: (value: string, isDark: boolean) => T | null;
  /**
   * Design token to update
   */
  token: DesignToken<T>;
}

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
  '--jp-border-radius': {
    converter: intConverter,
    token: controlCornerRadius
  },
  [BASE_LAYOUT_COLOR]: {
    converter: (value: string, isDark: boolean): Palette<Swatch> | null => {
      const parsedColor = parseColor(value);
      if (parsedColor) {
        const hsl = rgbToHSL(parsedColor);
        // Neutral luminance should be about 50%
        const correctedHSL = ColorHSL.fromObject({
          h: hsl.h,
          s: hsl.s,
          l: 0.5
        });
        const correctedRGB = hslToRGB(correctedHSL!);

        return PaletteRGB.from(
          SwatchRGB.create(correctedRGB.r, correctedRGB.g, correctedRGB.b)
        );
      } else {
        return null;
      }
    },
    token: neutralPalette
  },
  '--jp-brand-color1': {
    converter: (value: string, isDark: boolean): Palette<Swatch> | null => {
      const parsedColor = parseColor(value);
      if (parsedColor) {
        const hsl = rgbToHSL(parsedColor);
        // Correct luminance to get accent fill closer to brand color 1
        const direction = isDark ? 1 : -1;
        const correctedHSL = ColorHSL.fromObject({
          h: hsl.h,
          s: hsl.s,
          l:
            hsl.l +
            (direction * accentFillHoverDelta.getValueFor(document.body)) / 94.0
        });
        const correctedRGB = hslToRGB(correctedHSL!);

        return PaletteRGB.from(
          SwatchRGB.create(correctedRGB.r, correctedRGB.g, correctedRGB.b)
        );
      } else {
        return null;
      }
    },
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
export function applyJupyterTheme(): void {
  // Get all the styles applied to the <body> tag in the webview HTML
  // Importantly this includes all the CSS variables associated with the
  // current Jupyter theme
  const styles = getComputedStyle(document.body);

  // Set mode
  //   It will look at the body attribute or try to extrapolate
  const themeMode = document.body.getAttribute(THEME_MODE_BODY_ATTRIBUTE);
  let isDark_ = false;
  if (themeMode) {
    isDark_ = themeMode === 'false';
  } else {
    const layoutColor = styles.getPropertyValue(BASE_LAYOUT_COLOR).toString();
    if (layoutColor) {
      const parsedColor = parseColor(layoutColor);
      if (parsedColor) {
        isDark_ = isDark(
          SwatchRGB.create(parsedColor.r, parsedColor.g, parsedColor.b)
        );
        console.debug(
          `Theme is ${
            isDark_ ? 'dark' : 'light'
          } based on '${BASE_LAYOUT_COLOR}' value: ${layoutColor}.`
        );
      }
    }
  }
  baseLayerLuminance.setValueFor(
    document.body,
    isDark_ ? StandardLuminance.DarkMode : StandardLuminance.LightMode
  );

  for (const jpTokenName in tokenMappings) {
    const toolkitTokenName = tokenMappings[jpTokenName];
    const value = styles.getPropertyValue(jpTokenName).toString();

    if (document.body && value !== '') {
      const parsedValue = (toolkitTokenName.converter ?? ((v: string) => v))(
        value.trim(),
        isDark_
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
