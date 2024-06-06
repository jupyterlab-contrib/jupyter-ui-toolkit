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
 * Accordion class
 *
 * @public
 * @tagname jp-accordion
 */
class JupyterAccordion extends Accordion {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Accordion} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#accordionTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-accordion>`
 */
export const jpAccordion = JupyterAccordion.compose({
  baseName: 'accordion',
  baseClass: Accordion,
  template,
  styles
});

export { JupyterAccordion as Accordion };

export { styles as accordionStyles };
