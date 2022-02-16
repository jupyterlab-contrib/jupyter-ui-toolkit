// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { provideFASTDesignSystem } from '@microsoft/fast-components';
import type { DesignSystem } from '@microsoft/fast-foundation';

/**
 * Provides a design system for the specified element either by returning one that was
 * already created for that element or creating one.
 * @param element - The element to root the design system at. By default, this is the body.
 * @returns A Jupyter Design System
 * @public
 */
export function provideJupyterDesignSystem(
  element?: HTMLElement
): DesignSystem {
  // TODO we should not use fast or maybe due to design token reuse
  return provideFASTDesignSystem(element).withPrefix('jp');
}
