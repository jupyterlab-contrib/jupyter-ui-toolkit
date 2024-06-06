// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Slider,
  SliderOptions,
  sliderTemplate as template
} from '@microsoft/fast-foundation';
import { sliderStyles as styles } from './slider.styles.js';

/**
 * Slider class
 * @public
 * @tagname jp-slider
 */
class JupyterSlider extends Slider {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Slider} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#sliderTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-slider>`
 */
export const jpSlider = JupyterSlider.compose<SliderOptions>({
  baseName: 'slider',
  baseClass: Slider,
  template,
  styles,
  thumb: /* html */ `
        <div class="thumb-cursor"></div>
    `
});

export { JupyterSlider as Slider, styles as sliderStyles };
