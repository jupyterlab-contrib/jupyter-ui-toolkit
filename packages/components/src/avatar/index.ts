// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { Avatar, imgTemplate } from '@microsoft/fast-components';
import {
  Avatar as FoundationAvatar,
  AvatarOptions,
  avatarTemplate as template
} from '@microsoft/fast-foundation';
import { avatarStyles as styles } from './avatar.styles';

export { Avatar, imgTemplate } from '@microsoft/fast-components';
export { styles as avatarStyles };

/**
 * A function that returns a {@link @microsoft/fast-foundation#Avatar} registration for configuring the component with a DesignSystem.
 *  {@link @microsoft/fast-foundation#avatarTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<jp-avatar>`
 */
export const jpAvatar = Avatar.compose<AvatarOptions>({
  baseName: 'avatar',
  baseClass: FoundationAvatar,
  template,
  styles,
  media: imgTemplate,
  shadowOptions: {
    delegatesFocus: true
  }
});
