import { tooltipTemplate as template, Tooltip } from "@microsoft/fast-foundation";
import { tooltipStyles as styles } from "./tooltip.styles.js";

/**
 * A function that returns a {@link @microsoft/fast-foundation#Tooltip} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#tooltipTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-tooltip>`
 */
export const jpTooltip = Tooltip.compose({
    baseName: 'tooltip',
    template,
    styles,
});

/**
 * Base class for Tooltip
 * @public
 */
export { Tooltip };

export { styles as tooltipStyles };
