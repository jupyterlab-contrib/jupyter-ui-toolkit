// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { css, ElementStyles } from '@microsoft/fast-element';
import {
  display,
  ElementDefinitionContext,
  FoundationElementDefinition
} from '@microsoft/fast-foundation';
import { designUnit, foreground, typeRampBaseFontSize } from '../design-tokens';

export const radioGroupStyles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition
): ElementStyles => css`
  ${display('flex')} :host {
    align-items: flex-start;
    margin: calc(${designUnit} * 1px) 0;
    flex-direction: column;
  }
  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }
  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }
  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
  ::slotted([slot='label']) {
    color: ${foreground};
    font-size: ${typeRampBaseFontSize};
    margin: calc(${designUnit} * 1px) 0;
  }
`;
