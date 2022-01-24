// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import * as icons from '@fortawesome/free-solid-svg-icons';
import { library, icon } from '@fortawesome/fontawesome-svg-core';

export function getFaIcon(iconName: string, slotName: string): string {
  const objectName = iconName
    .split('-')
    .map(part => part[0].toUpperCase() + part.slice(1))
    .reduce((agg, part) => agg + part, 'fa');
  library.add((icons as any)[objectName]);
  const theIcon = icon({ prefix: 'fas', iconName: iconName as icons.IconName });

  const copy = theIcon!.node.item(0)!.cloneNode(true) as HTMLElement;
  copy.setAttribute('slot', slotName);
  return copy.outerHTML;
}
