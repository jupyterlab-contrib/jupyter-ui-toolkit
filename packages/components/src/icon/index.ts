// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  FASTElement,
  customElement,
  attr,
  html
} from '@microsoft/fast-element';

const template = html<Icon>`<div :innerHTML="${x => x.getSvg()}"></div>`;

@customElement({
  name: 'jp-icon',
  template
})
export class Icon extends FASTElement {
  @attr name: string;

  private static iconsMap = new Map<string, string>();

  static register(options: { name: string; svgStr: string }): void {
    if (Icon.iconsMap.has(options.name)) {
      throw new Error(`Icon with name ${options.name} is already defined`);
    }
    Icon.iconsMap.set(options.name, options.svgStr);
  }

  static defaultIcon(): string {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/></svg>';
  }

  getSvg(): string {
    return Icon.iconsMap.get(this.name) ?? Icon.defaultIcon();
  }
}
