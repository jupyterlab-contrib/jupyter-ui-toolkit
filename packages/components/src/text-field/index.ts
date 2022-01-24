import {
  TextField,
  textFieldTemplate as template
} from '@microsoft/fast-foundation';
import { textFieldStyles as styles } from '@microsoft/fast-components';

// TODO
//   we don't use outline/filled appearance
//   we need to focus with colored border and without at rest
//   we need to add error/invalid

/**
 * A function that returns a TextField registration for configuring the component with a DesignSystem.
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-text-field>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpTextField = TextField.compose({
  baseName: 'text-field',
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { TextField };

export { styles as textFieldStyles };
