// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { html, ref, slotted } from '@microsoft/fast-element';
import type { ViewTemplate } from '@microsoft/fast-element';
import {
  endSlotTemplate,
  startSlotTemplate,
  whitespaceFilter
} from '@microsoft/fast-foundation';
import type { FoundationElementTemplate } from '@microsoft/fast-foundation';
import type { DateField, DateFieldOptions } from './date-field.js';

/**
 * The template for the {@link @jupyter/web-components#(DateField:class)} component.
 * @public
 */
export const dateFieldTemplate: FoundationElementTemplate<
  ViewTemplate<DateField>,
  DateFieldOptions
> = (context, definition) => html`
  <template class="${x => (x.readOnly ? 'readonly' : '')}">
    <label
      part="label"
      for="control"
      class="${x =>
        x.defaultSlottedNodes && x.defaultSlottedNodes.length
          ? 'label'
          : 'label label__hidden'}"
    >
      <slot
        ${slotted({
          property: 'defaultSlottedNodes',
          filter: whitespaceFilter
        })}
      ></slot>
    </label>
    <div class="root" part="root">
      ${startSlotTemplate(context, definition)}
      <input
        class="control"
        part="control"
        id="control"
        @input="${x => x.handleTextInput()}"
        @change="${x => x.handleChange()}"
        ?autofocus="${x => x.autofocus}"
        ?disabled="${x => x.disabled}"
        list="${x => x.list}"
        ?readonly="${x => x.readOnly}"
        ?required="${x => x.required}"
        :value="${x => x.value}"
        type="date"
        aria-atomic="${x => x.ariaAtomic}"
        aria-busy="${x => x.ariaBusy}"
        aria-controls="${x => x.ariaControls}"
        aria-current="${x => x.ariaCurrent}"
        aria-describedby="${x => x.ariaDescribedby}"
        aria-details="${x => x.ariaDetails}"
        aria-disabled="${x => x.ariaDisabled}"
        aria-errormessage="${x => x.ariaErrormessage}"
        aria-flowto="${x => x.ariaFlowto}"
        aria-haspopup="${x => x.ariaHaspopup}"
        aria-hidden="${x => x.ariaHidden}"
        aria-invalid="${x => x.ariaInvalid}"
        aria-keyshortcuts="${x => x.ariaKeyshortcuts}"
        aria-label="${x => x.ariaLabel}"
        aria-labelledby="${x => x.ariaLabelledby}"
        aria-live="${x => x.ariaLive}"
        aria-owns="${x => x.ariaOwns}"
        aria-relevant="${x => x.ariaRelevant}"
        aria-roledescription="${x => x.ariaRoledescription}"
        ${ref('control')}
      />
      ${endSlotTemplate(context, definition)}
    </div>
  </template>
`;
