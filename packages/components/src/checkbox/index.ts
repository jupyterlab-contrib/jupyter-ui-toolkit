// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Checkbox as BaseCheckbox,
  CheckboxOptions,
  FoundationElementTemplate
} from '@microsoft/fast-foundation';
import { checkboxStyles as styles } from './checkbox.styles.js';
import { ErrorMessageMixin } from '../validation.js';
import { ViewTemplate, html, slotted } from '@microsoft/fast-element';

/**
 * The template for the {@link @microsoft/fast-foundation#(Checkbox:class)} component.
 * @public
 */
export const checkboxTemplate: FoundationElementTemplate<
  ViewTemplate<Checkbox>,
  CheckboxOptions
> = (context, definition) => html`
  <template
    role="checkbox"
    aria-checked="${x => x.checked}"
    aria-required="${x => x.required}"
    aria-disabled="${x => x.disabled}"
    aria-readonly="${x => x.readOnly}"
    tabindex="${x => (x.disabled ? null : 0)}"
    @keypress="${(x, c) => x.keypressHandler(c.event as KeyboardEvent)}"
    @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}"
  >
    <div part="control" class="control">
      <slot name="checked-indicator">
        ${definition.checkedIndicator || ''}
      </slot>
      <slot name="indeterminate-indicator">
        ${definition.indeterminateIndicator || ''}
      </slot>
    </div>
    <label
      part="label"
      class="${x =>
        x.defaultSlottedNodes && x.defaultSlottedNodes.length
          ? 'label'
          : 'label label__hidden'}"
    >
      <slot ${slotted('defaultSlottedNodes')}></slot>
    </label>
  </template>
`;

/**
 * Base class for Checkbox
 * @public
 */
export class Checkbox extends ErrorMessageMixin(BaseCheckbox) {
  indeterminateChanged(prev: boolean, next: boolean): void {
    if (this.indeterminate) {
      this.classList.add('indeterminate');
    } else {
      this.classList.remove('indeterminate');
    }
  }
}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Checkbox} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#checkboxTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-checkbox>`
 */
export const jpCheckbox = Checkbox.compose<CheckboxOptions>({
  baseName: 'checkbox',
  baseClass: BaseCheckbox,
  template: checkboxTemplate,
  styles,
  checkedIndicator: /* html */ `
        <svg
            part="checked-indicator"
            class="checked-indicator"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
            />
        </svg>
    `,
  indeterminateIndicator: /* html */ `
        <div part="indeterminate-indicator" class="indeterminate-indicator"></div>
    `
});

export { styles as checkboxStyles };
