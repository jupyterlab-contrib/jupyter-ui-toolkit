// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  BaseProgress,
  ProgressRingOptions,
  progressRingTemplate as template
} from '@microsoft/fast-foundation';
import { progressRingStyles as styles } from './progress-ring.styles';

/**
 * The  progress ring class.
 *
 * @public
 */
export class ProgressRing extends BaseProgress {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  public connectedCallback(): void {
    super.connectedCallback();

    // This will override any usage of the paused attribute
    // inherited by the FAST Foundation BaseProgress component
    // so that VSCodeProgressRing can never be paused
    if (this.paused) {
      this.paused = false;
    }

    // Defines a default aria label that screen readers can access
    this.setAttribute('aria-label', 'Loading');
    this.setAttribute('aria-live', 'assertive');
    this.setAttribute('role', 'alert');
  }

  /**
   * Component lifecycle method that runs when an attribute of the
   * element is changed.
   *
   * @param attrName - The attribute that was changed
   * @param oldVal - The old value of the attribute
   * @param newVal - The new value of the attribute
   *
   * @internal
   */
  public attributeChangedCallback(
    attrName: string,
    oldVal: string,
    newVal: string
  ): void {
    if (attrName === 'value') {
      // This will override any usage of the value attribute
      // inherited by the FAST Foundation BaseProgress component
      // so that VSCodeProgressRing can never set to be a
      // determinate state
      this.removeAttribute('value');
    }
  }
}

/**
 * The  progress ring component registration.
 *
 * @remarks
 * HTML Element: `<jp-progress-ring>`
 *
 * @public
 */
export const jpProgressRing = ProgressRing.compose<ProgressRingOptions>({
  baseName: 'progress-ring',
  template,
  styles,
  indeterminateIndicator: `
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`
});
