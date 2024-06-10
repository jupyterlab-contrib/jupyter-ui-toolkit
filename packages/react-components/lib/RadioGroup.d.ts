import { RadioGroup as RadioGroupElement } from '@jupyter/web-components';

export type { RadioGroupElement };

export interface RadioGroupProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | 'children'
    | 'className'
    | 'dir'
    | 'exportparts'
    | 'htmlFor'
    | 'hidden'
    | 'id'
    | 'key'
    | 'lang'
    | 'part'
    | 'ref'
    | 'slot'
    | 'style'
    | 'tabIndex'
    | 'title'
    | 'translate'
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
  > {
  /** When true, the child radios will be immutable by user interaction. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute for more information. */
  readonly?: boolean;

  /** Disables the radio group and child radios. */
  disabled?: boolean;

  /** The name of the radio group. Setting this value will set the name value
for all child radio elements. */
  name?: RadioGroupElement['name'];

  /** The value of the checked radio */
  value?: RadioGroupElement['value'];

  /** The orientation of the group */
  orientation?: RadioGroupElement['orientation'];

  /** When true, the child radios will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information. */
  readOnly?: RadioGroupElement['readOnly'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: RadioGroupElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: RadioGroupElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: RadioGroupElement['styles'];

  /** Fires a custom 'change' event when the value changes */
  onChange?: (event: CustomEvent) => void;
}

/**
 * RadioGroup class
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Fires a custom 'change' event when the value changes
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **label** - The slot for the label
 * - _default_ - The default slot for radio buttons
 *
 * ### **CSS Parts:**
 *  - **positioning-region** - The positioning region for laying out the radios
 */
export const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps>;
