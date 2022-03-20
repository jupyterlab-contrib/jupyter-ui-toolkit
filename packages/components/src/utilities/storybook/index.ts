// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { icon, library } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { parseColor } from '@microsoft/fast-colors';
import { isDark, PaletteRGB, StandardLuminance, SwatchRGB } from '../../colors';
import { accentPalette, baseLayerLuminance } from '../../design-token';

/**
 * Generate the SVG for a fontawesome icon
 *
 * @param iconName Icon name
 * @param slotName Optional slot for the icon
 * @returns HTML string to be inserted
 */
export function getFaIcon(iconName: string, slotName: string | null): string {
  const objectName = iconName
    .split('-')
    .map(part => part[0].toUpperCase() + part.slice(1))
    .reduce((agg, part) => agg + part, 'fa');
  library.add((icons as any)[objectName]);
  const theIcon = icon({ prefix: 'fas', iconName: iconName as icons.IconName });

  const copy = theIcon!.node.item(0)!.cloneNode(true) as HTMLElement;
  if (slotName) {
    copy.setAttribute('slot', slotName);
  }
  return copy.outerHTML;
}

/**
 * Set the theme based on the chosen accent color and the background color
 *
 * @param accent Global accent parameter
 * @param parameters Storybook parameters
 * @param backgrounds Storybook current background object
 */
export function setTheme(
  accent: string,
  parameters: { default: string; values?: { name: string; value: string }[] },
  backgrounds?: { value?: string }
): void {
  backgrounds = backgrounds ?? {};
  const backgroundColor =
    backgrounds.value ??
    parameters.values?.filter(v => v.name === parameters.default)[0].value ??
    '#252526';
  const parsedColor = parseColor(backgroundColor)!;

  const dark = isDark(
    SwatchRGB.create(parsedColor.r, parsedColor.g, parsedColor.b)
  );
  baseLayerLuminance.setValueFor(
    document.body,
    dark ? StandardLuminance.DarkMode : StandardLuminance.LightMode
  );
  const parsedAccentColor = parseColor(accent ?? '#DA1A5F');

  if (parsedAccentColor) {
    accentPalette.setValueFor(
      document.body,
      PaletteRGB.from(
        SwatchRGB.create(
          parsedAccentColor.r,
          parsedAccentColor.g,
          parsedAccentColor.b
        )
      )
    );
  }
}
