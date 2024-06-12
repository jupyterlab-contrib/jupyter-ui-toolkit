// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  RadioGroup,
  radioGroupTemplate as template
} from '@microsoft/fast-foundation';
import { radioGroupStyles as styles } from './radio-group.styles.js';
import { Observable } from '@microsoft/fast-element';

/**
 * RadioGroup class
 * @public
 * @tagname jp-radio-group
 */
class JupyterRadioGroup extends RadioGroup {
  constructor() {
    super();

    // FIXME work around for private slottedRadioButtonsChanged
    const notifier = Observable.getNotifier(this);
    const handler = {
      handleChange(source: JupyterRadioGroup, propertyName: string) {
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
export const jpRadioGroup = JupyterRadioGroup.compose({
  baseName: 'radio-group',
  baseClass: RadioGroup,
  template,
  styles
});

export { JupyterRadioGroup as RadioGroup, styles as radioGroupStyles };
