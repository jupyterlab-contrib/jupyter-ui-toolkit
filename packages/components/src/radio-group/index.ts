// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  RadioGroup as BaseRadioGroup,
  radioGroupTemplate as template
} from '@microsoft/fast-foundation';
import { radioGroupStyles as styles } from './radio-group.styles.js';
import { Observable } from '@microsoft/fast-element';

/**
 * Base class for RadioGroup
 * @public
 */
export class RadioGroup extends BaseRadioGroup {
  constructor() {
    super();

    // FIXME work around for private slottedRadioButtonsChanged
    const notifier = Observable.getNotifier(this);
    const handler = {
      handleChange(source: RadioGroup, propertyName: string) {
        if (propertyName === 'slottedRadioButtons') {
          source.ariaInvalidChanged();
        }
      }
    };

    notifier.subscribe(handler, 'slottedRadioButtons');
  }

  ariaInvalidChanged(): void {
    if (this.slottedRadioButtons) {
      this.slottedRadioButtons.forEach(radio => {
        radio.setAttribute(
          'aria-invalid',
          this.getAttribute('aria-invalid') ?? 'false'
        );
      });
    }
  }
}

/**
 * A function that returns a {@link @microsoft/fast-foundation#RadioGroup} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#radioGroupTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-radio-group>`
 */
export const jpRadioGroup = RadioGroup.compose({
  baseName: 'radio-group',
  baseClass: BaseRadioGroup,
  template,
  styles
});

export { styles as radioGroupStyles };
