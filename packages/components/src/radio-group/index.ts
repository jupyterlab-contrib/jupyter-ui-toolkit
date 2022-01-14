// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  RadioGroup as FoundationRadioGroup,
  radioGroupTemplate as template
} from '@microsoft/fast-foundation';
import { radioGroupStyles as styles } from './radio-group.styles';

/**
 * The  radio group class.
 *
 * @public
 */
export class RadioGroup extends FoundationRadioGroup {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  public connectedCallback(): void {
    super.connectedCallback();
    // Generates a unique id for each radio group label so that the label element
    // within the group can be correctly associated with the radio group.
    const label = this.querySelector('label');
    if (label) {
      const id = 'radio-group-' + Math.random().toString(16).slice(2);
      label.setAttribute('id', id);
      this.setAttribute('aria-labelledby', id);
    }
  }
}

/**
 * The  radio group component registration.
 *
 * @remarks
 * HTML Element: `<jp-radio-group>`
 *
 * @public
 */
export const jpRadioGroup = RadioGroup.compose({
  baseName: 'radio-group',
  template,
  styles
});
