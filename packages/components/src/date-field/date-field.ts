import {
  attr,
  DOM,
  nullableNumberConverter,
  observable
} from '@microsoft/fast-element';
import { keyArrowDown, keyArrowUp } from '@microsoft/fast-web-utilities';
import {
  StartEnd,
  StartEndOptions,
  applyMixins,
  DelegatesARIATextbox
} from '@microsoft/fast-foundation';
import type { FoundationElementDefinition } from '@microsoft/fast-foundation';
import { FormAssociatedDateField } from './date-field.form-associated';

/**
 * Number field appearances
 * @public
 */
export type DateFieldAppearance = 'filled' | 'outline';

/**
 * Date field configuration options
 * @public
 */
export type DateFieldOptions = FoundationElementDefinition & StartEndOptions;

/**
 * A Dext Field Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date | <input type="date" /> element }.
 *
 * @public
 */
export class DateField extends FormAssociatedDateField {
  /**
   * The appearance of the element.
   *
   * @public
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance: DateFieldAppearance;

  /**
   * When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
   * @public
   * @remarks
   * HTML Attribute: readonly
   */
  @attr({ attribute: 'readonly', mode: 'boolean' })
  public readOnly: boolean;
  private readOnlyChanged(): void {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.readOnly = this.readOnly;
      this.validate();
    }
  }

  /**
   * Indicates that this element should get focus after the page finishes loading. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautofocus | autofocus HTML attribute} for more information.
   * @public
   * @remarks
   * HTML Attribute: autofocus
   */
  @attr({ mode: 'boolean' })
  public autofocus: boolean;
  private autofocusChanged(): void {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.autofocus = this.autofocus;
      this.validate();
    }
  }

  /**
   * Allows associating a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist} to the element by {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/id}.
   * @public
   * @remarks
   * HTML Attribute: list
   */
  @attr
  public list: string;
  private listChanged(): void {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.setAttribute('list', this.list);
      this.validate();
    }
  }

  /**
   * Amount to increment or decrement the value by
   * @public
   * @remarks
   * HTMLAttribute: step
   */
  @attr({ converter: nullableNumberConverter })
  public step = 1;

  /**
   * The maximum the value can be
   * @public
   * @remarks
   * HTMLAttribute: max
   */
  @attr({ converter: nullableNumberConverter })
  public max: number;

  /**
   * Ensures that the max is greater than the min and that the value
   *  is less than the max
   * @param previous - the previous max value
   * @param next - updated max value
   *
   * @internal
   */
  public maxChanged(previous: number, next: number): void {
    this.max = Math.max(next, this.min ?? next);
    const min = Math.min(this.min, this.max);
    if (this.min !== undefined && this.min !== min) {
      this.min = min;
    }
    this.value = this.getValidValue(this.value);
  }

  /**
   * The minimum the value can be
   * @public
   * @remarks
   * HTMLAttribute: min
   */
  @attr({ converter: nullableNumberConverter })
  public min: number;

  /**
   * Ensures that the min is less than the max and that the value
   *  is greater than the min
   * @param previous - previous min value
   * @param next - updated min value
   *
   * @internal
   */
  public minChanged(previous: number, next: number): void {
    this.min = Math.min(next, this.max ?? next);
    const max = Math.max(this.min, this.max);
    if (this.max !== undefined && this.max !== max) {
      this.max = max;
    }
    this.value = this.getValidValue(this.value);
  }

  /**
   * @internal
   */
  @observable
  public defaultSlottedNodes: Node[];

  /**
   * A reference to the internal input element
   * @internal
   */
  public control: HTMLInputElement;

  /**
   * Flag to indicate that the value change is from the user input
   * @internal
   */
  private isUserInput = false;

  /**
   * The value property, typed as a number.
   *
   * @public
   */
  public get valueAsNumber(): number {
    return parseFloat(super.value);
  }

  public set valueAsNumber(next: number) {
    this.value = next.toString();
  }

  /**
   * The value property, typed as a date.
   *
   * @public
   */
  public get valueAsDate(): Date {
    return new Date(parseFloat(super.value));
  }

  public set valueAsDate(next: Date) {
    this.value = next.toString();
  }

  /**
   * Validates that the value is a number between the min and max
   * @param previous - previous stored value
   * @param next - value being updated
   * @param updateControl - should the text field be updated with value, defaults to true
   * @internal
   */
  public valueChanged(previous: string, next: string): void {
    this.value = this.getValidValue(next);

    if (next !== this.value) {
      return;
    }

    if (this.control && !this.isUserInput) {
      this.control.value = this.value;
    }

    super.valueChanged(previous, this.value);

    if (previous !== undefined && !this.isUserInput) {
      this.$emit('input');
      this.$emit('change');
    }

    this.isUserInput = false;
  }

  /**
   * Sets the internal value to a valid number between the min and max properties
   * @param value - user input
   *
   * @internal
   */
  private getValidValue(value: string): string {
    let validValue: number | string = parseFloat(
      parseFloat(value).toPrecision(12)
    );
    if (isNaN(validValue)) {
      validValue = '';
    } else {
      validValue = Math.min(validValue, this.max ?? validValue);
      validValue = Math.max(validValue, this.min ?? validValue).toString();
    }

    return validValue;
  }

  /**
   * Increments the value using the step value
   *
   * @public
   */
  public stepUp(): void {
    // Step is given in days: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#step
    const step = 86400000 * this.step;
    const value = parseFloat(this.value);
    const stepUpValue = !isNaN(value)
      ? value + step
      : this.min > 0
      ? this.min
      : this.max < 0
      ? this.max
      : !this.min
      ? step
      : 0;

    this.value = stepUpValue.toString();
  }

  /**
   * Decrements the value using the step value
   *
   * @public
   */
  public stepDown(): void {
    // Step is given in days: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#step
    const step = 86400000 * this.step;
    const value = parseFloat(this.value);
    const stepDownValue = !isNaN(value)
      ? value - step
      : this.min > 0
      ? this.min
      : this.max < 0
      ? this.max
      : !this.min
      ? 0 - step
      : 0;

    this.value = stepDownValue.toString();
  }

  /**
   * @internal
   */
  public connectedCallback(): void {
    super.connectedCallback();

    this.validate();
    this.control.value = this.value;

    if (this.autofocus) {
      DOM.queueUpdate(() => {
        this.focus();
      });
    }

    if (!this.appearance) {
      this.appearance = 'outline';
    }
  }

  /**
   * Handles the internal control's `input` event
   * @internal
   */
  public handleTextInput(): void {
    this.isUserInput = true;
    this.value = this.control.value;
  }

  /**
   * Change event handler for inner control.
   * @remarks
   * "Change" events are not `composable` so they will not
   * permeate the shadow DOM boundary. This fn effectively proxies
   * the change event, emitting a `change` event whenever the internal
   * control emits a `change` event
   * @internal
   */
  public handleChange(): void {
    this.$emit('change');
  }

  /**
   * Handles the internal control's `keydown` event
   * @internal
   */
  public handleKeyDown(e: KeyboardEvent): boolean {
    const key = e.key;

    switch (key) {
      case keyArrowUp:
        this.stepUp();
        return false;

      case keyArrowDown:
        this.stepDown();
        return false;
    }

    return true;
  }

  /**
   * Handles populating the input field with a validated value when
   *  leaving the input field.
   * @internal
   */
  public handleBlur(): void {
    this.control.value = this.value;
  }
}

/**
 * Mark internal because exporting class and interface of the same name
 * confuses API documenter.
 * TODO: https://github.com/microsoft/fast/issues/3317
 * @internal
 */
export interface DateField extends StartEnd, DelegatesARIATextbox {}
applyMixins(DateField, StartEnd, DelegatesARIATextbox);
