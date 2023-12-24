import {
  ListboxOption,
  listboxOptionTemplate as template,
} from "@microsoft/fast-foundation";
import { optionStyles as styles } from "./option.styles.js";

/**
* A function that returns a {@link @microsoft/fast-foundation#ListboxOption} registration for configuring the component with a DesignSystem.
* Implements {@link @microsoft/fast-foundation#listboxOptionTemplate}
*
*
* @public
* @remarks
* Generates HTML Element: `<jp-option>`
*
*/
export const jpOption = ListboxOption.compose({
  baseName: 'option',
  template,
  styles,
});

/**
* Base class for Option
* @public
*/
export { ListboxOption as Option};

export { styles as optionStyles };
