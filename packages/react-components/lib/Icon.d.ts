import { Icon as IconElement, type IconDefinition } from '@jupyter/web-components';

export type { IconElement, IconDefinition };

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
export const Icon: React.ForwardRefExoticComponent<IconProps> & {
  /**
   * Register a new icon.
   *
   * @param options Icon definition
   */
  register(options: IconDefinition): void;
  /**
   * Set the default icon.
   *
   * @param svgStr The SVG string to be used as the default icon.
   */
  setDefaultIcon(svgStr: string): void;
};
