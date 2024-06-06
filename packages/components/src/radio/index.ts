// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Radio,
  FoundationElementTemplate,
  RadioOptions
} from '@microsoft/fast-foundation';
import { radioStyles as styles } from './radio.styles.js';
import { ViewTemplate, html, slotted } from '@microsoft/fast-element';

export const radioTemplate: FoundationElementTemplate<
  ViewTemplate<JupyterRadio>,
  RadioOptions
> = (context, definition) => html`
  <template
    role="radio"
    aria-checked="${x => x.checked}"
    aria-required="${x => x.required}"
    aria-disabled="${x => x.disabled}"
    aria-readonly="${x => x.readOnly}"
    @keypress="${(x, c) => x.keypressHandler(c.event as KeyboardEvent)}"
    @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}"
  >
    <div part="control" class="control">
      <slot name="checked-indicator">
        ${definition.checkedIndicator || ''}
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
 * Radio class
 * @public
 * @tagname jp-radio
 */
class JupyterRadio extends Radio {}

/**
 * A function that returns a {@link @microsoft/fast-foundation#Radio} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#radioTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-radio>`
 */
export const jpRadio = JupyterRadio.compose<RadioOptions>({
  baseName: 'radio',
  baseClass: Radio,
  template: radioTemplate,
  styles,
  checkedIndicator: /* html */ `
        <div part="checked-indicator" class="checked-indicator"></div>
    `
});

export { JupyterRadio as Radio, styles as radioStyles };
