// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { Option } from '../index';

export type OptionArgs = {
  label: string;
  isDisabled: boolean;
  isSelected: boolean;
};

export function createOption({ label, isDisabled, isSelected }: OptionArgs) {
  const option = new Option();

  if (label) {
    option.textContent = label;
  }
  if (isDisabled) {
    option.setAttribute('disabled', '');
  }
  if (isSelected) {
    option.setAttribute('selected', '');
  }

  return option;
}
