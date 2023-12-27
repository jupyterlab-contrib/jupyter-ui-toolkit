// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { ValueConverter } from '@microsoft/fast-element';

/**
 * A {@link ValueConverter} that converts to and from `Date` values.
 * @remarks
 * This converter allows for nullable Date, returning `null` if the
 * input was `null`, `undefined`, or a non-parsable date.
 * @public
 */
export const nullableDateConverter: ValueConverter = {
  toView(value?: Date | null): string | null {
    if (value === null || value === undefined) {
      return null;
    }
    const date = new Date(value);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#return_value
    return date.toString() === 'Invalid Date'
      ? null
      : `${date.getFullYear().toString().padStart(4, '0')}-${(
          date.getMonth() + 1
        )
          .toString()
          .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  },

  fromView(value?: string | null): Date | null {
    if (value === null || value === undefined) {
      return null;
    }

    const date = new Date(value);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#return_value
    return date.toString() === 'Invalid Date' ? null : date;
  }
};
