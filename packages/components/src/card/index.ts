// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  composedParent,
  Card,
  cardTemplate as template
} from '@microsoft/fast-foundation';
import { Swatch } from '../color/swatch.js';
import { fillColor, neutralFillLayerRecipe } from '../design-tokens.js';
import { cardStyles as styles } from './card.styles.js';

/**
 * Card class
 *
 * @public
 * @tagname jp-card
 */
class JupyterCard extends Card {
  connectedCallback() {
    super.connectedCallback();

    const parent = composedParent(this);

    if (parent) {
      fillColor.setValueFor(
        this,
        (target: HTMLElement): Swatch =>
          neutralFillLayerRecipe
            .getValueFor(target)
            .evaluate(target, fillColor.getValueFor(parent))
      );
    }
  }
}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Card} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#cardTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-card>`
 */
export const jpCard = JupyterCard.compose({
  baseName: 'card',
  baseClass: Card,
  template,
  styles
});

export { JupyterCard as Card };

export { styles as cardStyles };
