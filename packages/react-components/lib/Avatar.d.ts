import { Avatar as AvatarElement } from '@jupyter/web-components';

export type { AvatarElement };

export interface AvatarProps
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
  /** Indicates the Avatar should have an image source */
  src?: AvatarElement['src'];

  /** Indicates the Avatar should have alt text */
  alt?: AvatarElement['alt'];

  /** Indicates the Avatar should have a color fill. */
  fill?: AvatarElement['fill'];

  /** Indicates the Avatar should have a text color. */
  color?: AvatarElement['color'];

  /** Indicates the Avatar should have url link */
  link?: AvatarElement['link'];

  /** Indicates the Avatar shape should be. By default it will be set to "circle". */
  shape?: AvatarElement['shape'];

  /** A property which resolves the ComponentPresentation instance
for the current component. */
  $presentation?: AvatarElement['$presentation'];

  /** Sets the template of the element instance. When undefined,
the element will attempt to resolve the template from
the associated presentation or custom element definition. */
  template?: AvatarElement['template'];

  /** Sets the default styles for the element instance. When undefined,
the element will attempt to resolve default styles from
the associated presentation or custom element definition. */
  styles?: AvatarElement['styles'];
}

/**
 * Jupyter Avatar Class
 * ---
 *
 *
 * ### **Methods:**
 *  - **compose(this: _K_, elementDefinition: _T_): _(
 *         overrideDefinition?: OverrideFoundationElementDefinition<T>
 *     ) => FoundationElementRegistry<T, K>_** - Defines an element registry function with a set of element definition defaults.
 *
 * ### **Slots:**
 *  - **media** - Used for media such as an image
 * - _default_ - The default slot for avatar text, commonly a name or initials
 * - **badge** - Used to provide a badge, such as a status badge
 *
 * ### **CSS Parts:**
 *  - **backplate** - The wrapping container for the avatar
 * - **link** - The avatar link
 * - **media** - The media slot
 * - **content** - The default slot
 */
export const Avatar: React.ForwardRefExoticComponent<AvatarProps>;
