import { Menu, menuTemplate as template } from '@microsoft/fast-foundation';
import { menuStyles as styles } from '@microsoft/fast-components';

/**
 * A function that returns a {@link @microsoft/fast-foundation#Menu} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#menuTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-menu>`
 */
export const jpMenu = Menu.compose({
  baseName: 'menu',
  template,
  styles
});

/**
 * Base class for Menu
 * @public
 */
export { Menu };

export { styles as menuStyles };
