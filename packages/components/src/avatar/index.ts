// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Avatar,
  imgTemplate,
  avatarStyles as styles
} from '@microsoft/fast-components';
import {
  AvatarOptions,
  Avatar as FoundationAvatar,
  avatarTemplate as template
} from '@microsoft/fast-foundation';

export { Avatar } from '@microsoft/fast-components';

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

export { styles as avatarStyles };
