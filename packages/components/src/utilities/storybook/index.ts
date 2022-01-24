// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import * as icons from '@fortawesome/free-solid-svg-icons';
import { library, icon } from '@fortawesome/fontawesome-svg-core';

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
