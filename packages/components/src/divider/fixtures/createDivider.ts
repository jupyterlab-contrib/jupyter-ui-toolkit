// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { Divider } from '../index';

export type DividerArgs = {
  role: string;
};

export function createDivider({ role }: DividerArgs) {
  const divider = new Divider();

  if (role && role.toLocaleLowerCase() === 'presentation') {
    divider.setAttribute('role', role.toLocaleLowerCase());
  }

  return divider;
}
