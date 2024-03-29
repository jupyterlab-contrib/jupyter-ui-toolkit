// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Accordion,
  accordionTemplate as template
} from '@microsoft/fast-foundation';
import { accordionStyles as styles } from './accordion.styles.js';

export * from '../accordion-item/index.js';

/**
 * A function that returns a {@link @microsoft/fast-foundation#Accordion} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#accordionTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-accordion>`
 */
export const jpAccordion = Accordion.compose({
  baseName: 'accordion',
  template,
  styles
});

/**
 * Base class for Accordion
 * @public
 */
export { Accordion };

export { styles as accordionStyles };
