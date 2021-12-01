import { CSSDesignToken, DesignToken } from '@microsoft/fast-foundation';
import { initThemeChangeListener } from '../theme/applyTheme';

/**
 * The possible CSSDesignToken generic types.
 */
export type T =
  | string
  | number
  | boolean
  | symbol
  | any[]
  | Uint8Array
  | ({ createCSS?(): string } & Record<PropertyKey, any>)
  | null;

/**
 * A mapping of all the  theme CSS variables mapped to the
 * toolkit design tokens.
 */
export const tokenMappings: { [index: string]: CSSDesignToken<T> } = {};

/**
 * Boolean flag that ensures the Jupyter theme listener is initialized once.
 */
let isThemeListenerInitialized = false;

/**
 * Given a design token name, return a new FAST CSSDesignToken.
 *
 * @remarks A Jupyter theme CSS variable can be optionally passed to be
 * associated with the design token.
 *
 * @remarks On the first execution the Jupyter theme listener will also be
 * initialized.
 *
 * @param name A design token name.
 * @param jpThemeVar A Jupyter theme CSS variable name to be associated with
 * the design token.
 * @returns A FAST CSSDesignToken that emits a CSS custom property.
 */
export function create<T>(name: string, jpThemeVar?: string) {
  const designToken = DesignToken.create<T>(name);

  if (jpThemeVar) {
    tokenMappings[jpThemeVar] = designToken;
  }
  if (!isThemeListenerInitialized) {
    initThemeChangeListener(tokenMappings);
    isThemeListenerInitialized = true;
  }

  return designToken;
}
