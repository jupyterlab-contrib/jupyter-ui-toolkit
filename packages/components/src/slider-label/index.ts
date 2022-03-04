// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  horizontalSliderLabelStyles,
  SliderLabel,
  sliderLabelStyles as styles,
  verticalSliderLabelStyles
} from '@microsoft/fast-components';
import {
  SliderLabel as FoundationSliderLabel,
  sliderLabelTemplate as template
} from '@microsoft/fast-foundation';

/**
 * A function that returns a {@link @microsoft/fast-foundation#SliderLabel} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#sliderLabelTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-slider-label>`
 */
export const jpSliderLabel = SliderLabel.compose({
  baseName: 'slider-label',
  baseClass: FoundationSliderLabel,
  template,
  styles
});

export {
  SliderLabel,
  horizontalSliderLabelStyles,
  styles as sliderLabelStyles,
  verticalSliderLabelStyles
};
