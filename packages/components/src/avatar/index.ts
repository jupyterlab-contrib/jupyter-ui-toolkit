// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { attr, html, when } from '@microsoft/fast-element';
import {
  AvatarOptions,
  Avatar,
  avatarTemplate as template
} from '@microsoft/fast-foundation';
import { avatarStyles as styles } from './avatar.styles.js';

/**
 * Jupyter Avatar Class
 *
 * @public
 * @tagname jp-avatar
 */
class JupyterAvatar extends Avatar {
  /**
   * Indicates the Avatar should have an image source
   *
   * @public
   * @remarks
   * HTML Attribute: src
   */
  @attr({ attribute: 'src' })
  public imgSrc: string | undefined;

  /**
   * Indicates the Avatar should have alt text
   *
   * @public
   * @remarks
   * HTML Attribute: alt
   */
  @attr public alt: string | undefined;
}

/**
 * The Jupyter Avatar Template for Images
 *  @public
 *
 */
export const imgTemplate = html<JupyterAvatar>`
  ${when(
    x => x.imgSrc,
    html`
      <img
        src="${x => x.imgSrc}"
        alt="${x => x.alt}"
        slot="media"
        class="media"
        part="media"
      />
    `
  )}
`;

/**
 * A function that returns a {@link @microsoft/fast-foundation#Avatar} registration for configuring the component with a DesignSystem.
 *  {@link @microsoft/fast-foundation#avatarTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-avatar>`
 */
export const jpAvatar = JupyterAvatar.compose<AvatarOptions>({
  baseName: 'avatar',
  baseClass: Avatar,
  template,
  styles,
  media: imgTemplate,
  shadowOptions: {
    delegatesFocus: true
  }
});

export { JupyterAvatar as Avatar };

export { styles as avatarStyles };
