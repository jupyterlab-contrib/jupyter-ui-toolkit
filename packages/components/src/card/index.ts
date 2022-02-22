// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  Card as FoundationCard,
  cardTemplate as template
} from '@microsoft/fast-foundation';
import { Card, cardStyles as styles } from '@microsoft/fast-components';

/**
 * A function that returns a {@link @microsoft/fast-foundation#Card} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#cardTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-card>`
 */
export const jpCard = Card.compose({
  baseName: 'card',
  baseClass: FoundationCard,
  template,
  styles
});

export { Card, styles as cardStyles };
