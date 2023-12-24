import { Dialog, dialogTemplate as template } from "@microsoft/fast-foundation";
import { dialogStyles as styles } from "./dialog.styles.js";

/**
 * A function that returns a {@link @microsoft/fast-foundation#Dialog} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#dialogTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: `<jp-dialog>`
*
 */
export const jpDialog = Dialog.compose({
    baseName: 'dialog',
    template,
    styles,
});

/**
 * Base class for Dialog
 * @public
 */
export { Dialog };

export { styles as dialogStyles };
