// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { Tag } from '../index';

export type TagArgs = {
  label: string;
};

export function createTag({ label }: TagArgs) {
  const tag = new Tag();

  if (label) {
    tag.textContent = label;
  }

  return tag;
}
