import { Icon as IconElement } from '@jupyter/web-components';

export type { IconElement as BadgeElement };

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Allows getting a ref to the component instance.
   */
  ref?: React.Ref<IconElement>;

  /** Name of the icon to display. */
  name?: IconElement['name'];
}

/**
 * Icon class
 * ---
 */
export const Icon: React.ForwardRefExoticComponent<IconProps>;
