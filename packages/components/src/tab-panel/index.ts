import { TabPanel, tabPanelTemplate as template } from "@microsoft/fast-foundation";
import { tabPanelStyles as styles } from "./tab-panel.styles.js";

/**
 * A function that returns a {@link @microsoft/fast-foundation#TabPanel} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#tabPanelTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-tab-panel>`
 */
export const jpTabPanel = TabPanel.compose({
    baseName: 'tab-panel',
    template,
    styles,
});

/**
 * Base class for TabPanel
 * @public
 */
export { TabPanel };

export { styles as tabPanelStyles };
