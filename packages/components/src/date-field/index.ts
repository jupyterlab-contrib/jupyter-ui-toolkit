import { DateField, DateFieldOptions } from './date-field';
import { dateFieldStyles as styles } from './date-field.styles';
import { dateFieldTemplate as template } from './date-field.template';

export * from './date-field';
export * from './date-field.template';

/**
 * A function that returns a {@link @jupyter-notebook/web-components#DateField} registration for configuring the component with a DesignSystem.
 * Implements {@link @jupyter-notebook/web-components#dateFieldTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-date-field>`
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
export const jpDateField = DateField.compose<DateFieldOptions>({
  baseName: 'date-field',
  styles,
  template,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { styles as dateFieldStyles };
