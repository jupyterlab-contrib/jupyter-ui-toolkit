// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  SliderLabel,
  sliderLabelTemplate as template
} from '@microsoft/fast-foundation';
import { Orientation } from '@microsoft/fast-web-utilities';
import {
  horizontalSliderLabelStyles,
  sliderLabelStyles as styles,
  verticalSliderLabelStyles
} from './slider-label.styles.js';

/**
 * Slider label class
 *
 * @public
 * @tagname jp-slider-label
 */
class JupyterSliderLabel extends SliderLabel {
  protected sliderOrientationChanged(): void {
    if (this.sliderOrientation === Orientation.horizontal) {
      this.$fastController.addStyles(horizontalSliderLabelStyles);
      this.$fastController.removeStyles(verticalSliderLabelStyles);
    } else {
      this.$fastController.addStyles(verticalSliderLabelStyles);
      this.$fastController.removeStyles(horizontalSliderLabelStyles);
    }
  }
}

/**
 * A function that returns a {@link @microsoft/fast-foundation#SliderLabel} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#sliderLabelTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-slider-label>`
 */
export const jpSliderLabel = JupyterSliderLabel.compose({
  baseName: 'slider-label',
  baseClass: SliderLabel,
  template,
  styles
});

export {
  JupyterSliderLabel as SliderLabel,
  horizontalSliderLabelStyles,
  styles as sliderLabelStyles,
  verticalSliderLabelStyles
};
