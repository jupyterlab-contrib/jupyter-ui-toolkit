// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  Tab as FoundationTab,
  TabPanel as FoundationTabPanel,
  Tabs as FoundationTabs,
  tabPanelTemplate,
  TabsOrientation,
  tabsTemplate,
  tabTemplate
} from '@microsoft/fast-foundation';
import { panelsStyles } from './panels.styles';
import { panelTabStyles } from './panel-tab.styles';
import { panelViewStyles } from './panel-view.styles';

/**
 * The  panels class.
 *
 * @public
 */
export class Panels extends FoundationTabs {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  public connectedCallback() {
    super.connectedCallback();

    // This will override any usage of the orientation attribute
    // inherited by the FAST Foundation Tabs component so that
    // VSCodePanels are always oriented horizontally
    if (this.orientation) {
      this.orientation = TabsOrientation.horizontal;
    }

    // Sets a default ARIA label on the panels component only if an
    // aria-label attribute does not already exist
    const ariaLabelValue = this.getAttribute('aria-label');
    if (!ariaLabelValue) {
      this.setAttribute('aria-label', 'Panels');
    }
  }
}

/**
 * The  panels component registration.
 *
 * @remarks
 * HTML Element: `<jp-panels>`
 *
 * @public
 */
export const jpPanels = Panels.compose({
  baseName: 'panels',
  template: tabsTemplate,
  styles: panelsStyles
});

/**
 * The  panel tab class.
 *
 * @public
 */
export class PanelTab extends FoundationTab {
  /**
   * Component lifecycle method that runs when the component is inserted
   * into the DOM.
   *
   * @internal
   */
  public connectedCallback() {
    super.connectedCallback();

    // This will override any usage of the disabled attribute
    // inherited by the FAST Foundation Tab component so that
    // VSCodePanelTab can never be disabled
    if (this.disabled) {
      this.disabled = false;
    }

    if (this.textContent) {
      this.setAttribute('aria-label', this.textContent);
    }
  }
}

/**
 * The  panel tab component registration.
 *
 * @remarks
 * HTML Element: `<jp-panel-tab>`
 *
 * @public
 */
export const jpPanelTab = PanelTab.compose({
  baseName: 'panel-tab',
  template: tabTemplate,
  styles: panelTabStyles
});

/**
 * The  panel view class.
 *
 * @public
 */
export class PanelView extends FoundationTabPanel {}

/**
 * The  panel view component registration.
 *
 * @remarks
 * HTML Element: `<jp-panel-view>`
 *
 * @public
 */
export const jpPanelView = PanelView.compose({
  baseName: 'panel-view',
  template: tabPanelTemplate,
  styles: panelViewStyles
});
