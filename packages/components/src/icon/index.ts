import {
  FASTElement,
  customElement,
  attr,
  html
} from '@microsoft/fast-element';

const template = html<Icon>`<div :innerHTML="${x => x.getSvg()}"></div>`;

/**
 * Icon component
 *
 * Icon must first be registered: `Icon.register({ name, svgStr });`
 *
 * Then you can use it with `<jp-icon name="{name}"></jp-icon>` .
 *
 * To style your icon, you should set `fill` and/or `stroke` attributes to `currentColor`.
 * Then the icon will be colored with the active text color.
 */
@customElement({
  name: 'jp-icon',
  template
})
export class Icon extends FASTElement {
  /**
   * Name of the icon to display.
   */
  @attr name: string;

  private static iconsMap = new Map<string, string>();
  private static _defaultIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/></svg>';

  /**
   * Register a new icon.
   *
   * @param options { name: Icon unique name, svgStr: Icon SVG as string }
   */
  static register(options: { name: string; svgStr: string }): void {
    if (Icon.iconsMap.has(options.name)) {
      console.warn(
        `Redefining previously loaded icon svgStr. name: ${
          options.name
        }, svgStrOld: ${Icon.iconsMap.get(options.name)}, svgStr: ${
          options.svgStr
        }`
      );
    }
    Icon.iconsMap.set(options.name, options.svgStr);

    // Rerender all existing icons with the same name
    document
      .querySelectorAll(`jp-icon[name="${options.name}"]`)
      .forEach((node: HTMLElement) => {
        node.setAttribute('name', '');
        node.setAttribute('name', options.name);
      });
  }

  /**
   * Set a new default icon.
   *
   * @param svgStr The SVG string to be used as the default icon.
   */
  static setDefaultIcon(svgStr: string): void {
    Icon._defaultIcon = svgStr;
  }

  /**
   * Default icon
   *
   * This icon will be displayed if the {@link name} does not match any known
   * icon names.
   */
  static defaultIcon(): string {
    return Icon._defaultIcon;
  }

  /**
   * Get the icon SVG
   */
  getSvg(): string {
    return Icon.iconsMap.get(this.name) ?? Icon.defaultIcon();
  }
}
