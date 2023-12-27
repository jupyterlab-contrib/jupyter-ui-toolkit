// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { icon, library } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { parseColor } from '@microsoft/fast-colors';
import { SwatchRGB } from '../../color/swatch.js';
import { StandardLuminance } from '../../color/utilities/base-layer-luminance.js';
import { isDark } from '../../color/utilities/is-dark.js';
import { StoryContext } from '@storybook/html';
import { DesignSystemProvider } from '../../design-system-provider/index.js';

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
 * Wrap the story within a theme provider.
 *
 * @param story Story
 * @param context Story context
 * @returns Wrapped story
 */
export function withTheme(story: any, context: StoryContext): HTMLElement {
  const theme = new DesignSystemProvider();
  theme.accentColor = context.globals.accent ?? '#DA1A5F';

  const background = context.globals.backgrounds?.value ?? '#252526';
  theme.fillColor = background;
  const parsedBackground = parseColor(background)!;
  const dark = isDark(
    SwatchRGB.create(parsedBackground.r, parsedBackground.g, parsedBackground.b)
  );
  theme.baseLayerLuminance = dark
    ? StandardLuminance.DarkMode
    : StandardLuminance.LightMode;

  const children = story(context);
  if (typeof children === 'string') {
    theme.insertAdjacentHTML('afterbegin', children);
  } else {
    theme.appendChild(children);
  }
  return theme;
}
