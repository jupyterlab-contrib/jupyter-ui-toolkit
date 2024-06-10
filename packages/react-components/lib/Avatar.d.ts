import { Avatar as AvatarElement } from '@jupyter/web-components';

export type { AvatarElement };

export interface AvatarProps extends React.AllHTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<AvatarElement>;
  /** Indicates the Avatar should have an image source */
  src?: AvatarElement['imgSrc'];

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
