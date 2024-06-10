import { SliderLabel as SliderLabelElement } from '@jupyter/web-components';

export type { SliderLabelElement };

export interface SliderLabelProps
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
  /** Hides the tick mark. */
  hideMark?: boolean;

  /** The disabled state of the label. This is generally controlled by the parent @microsoft/fast-foundation#(Slider:class). */
  disabled?: boolean;

  /** The position of the label relative to the min and max value of the parent @microsoft/fast-foundation#(Slider:class). */
  position?: SliderLabelElement['position'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: SliderLabelElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: SliderLabelElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: SliderLabelElement['styles'];
}

/**
 * Slider label class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for the label content
 *
 * ### **CSS Parts:**
 *  - **root** - The element wrapping the label mark and text
 */
export const SliderLabel: React.ForwardRefExoticComponent<SliderLabelProps>;
