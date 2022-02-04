// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  accentFillRest,
  Avatar,
  avatarStyles as styles,
  foregroundOnAccentRest,
  imgTemplate
} from '@microsoft/fast-components';
import { css, ElementStyles } from '@microsoft/fast-element';
import {
  Avatar as FoundationAvatar,
  AvatarOptions,
  avatarTemplate as template,
  FoundationElementTemplate
} from '@microsoft/fast-foundation';

export { Avatar } from '@microsoft/fast-components';

export const avatarStyles: FoundationElementTemplate<
  ElementStyles,
  AvatarOptions
> = (context, definition: AvatarOptions) => css`
  ${styles(context, definition)}

  .backplate {
    min-width: var(--avatar-size, var(--avatar-size-default));
    background-color: ${accentFillRest};
  }

  .link {
    color: ${foregroundOnAccentRest};
  }
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
export const jpAvatar = Avatar.compose<AvatarOptions>({
  baseName: 'avatar',
  baseClass: FoundationAvatar,
  template,
  styles: avatarStyles,
  media: imgTemplate,
  shadowOptions: {
    delegatesFocus: true
  }
});
