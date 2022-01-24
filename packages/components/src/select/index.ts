import {
  Select,
  SelectOptions,
  selectTemplate as template
} from '@microsoft/fast-foundation';
import { selectStyles as styles } from '@microsoft/fast-components';

// TODO
//   we need to focus with colored border and without at rest
//   we need to add error/invalid

/**
 * A function that returns a Select registration for configuring the component with a DesignSystem.
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-select>`
 *
 */
export const jpSelect = Select.compose<SelectOptions>({
  baseName: 'select',
  template,
  styles,
  indicator: `
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `
});

/**
 * Base class for Select
 * @public
 */
export { Select };

export { styles as selectStyles };
