// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import {
  FoundationElementDefinition,
  PickerMenu,
  Picker,
  PickerList,
  PickerListItem,
  pickerListItemTemplate,
  pickerListTemplate,
  PickerMenuOption,
  pickerMenuOptionTemplate,
  pickerMenuTemplate,
  pickerTemplate
} from '@microsoft/fast-foundation';
import { fillColor, neutralLayerFloating } from '../../design-tokens.js';
import { pickerStyles } from './picker.styles.js';
import { pickerMenuStyles } from './picker-menu.styles.js';
import { pickerMenuOptionStyles } from './picker-menu-option.styles.js';
import { pickerListStyles } from './picker-list.styles.js';
import { pickerListItemStyles } from './picker-list-item.styles.js';

/**
 * Picker class
 * @alpha
 * @public
 * @tagname jp-draft-picker
 */
class JupyterPicker extends Picker {}

/**
 * The FAST Picker Custom Element. Implements {@link @microsoft/fast-foundation#Picker},
 * {@link @microsoft/fast-foundation#PickerTemplate}
 *
 *
 * @alpha
 * @remarks
 * * Generates HTML Element: `<jp-draft-picker>`
 */
export const jpPicker = JupyterPicker.compose({
  baseName: 'draft-picker',
  baseClass: Picker,
  template: pickerTemplate,
  styles: pickerStyles,
  shadowOptions: {}
});

/**
 * Picker menu class
 *
 * @alpha
 * @public
 * @tagname jp-draft-picker-menu
 */
class JupyterPickerMenu extends PickerMenu {
  /**
   * @public
   */
  public connectedCallback(): void {
    fillColor.setValueFor(this, neutralLayerFloating);

    super.connectedCallback();
  }
}

/**
 * Component that displays the list of available picker options
 *
 *
 * @alpha
 * @remarks
 * HTML Element: \<jp-draft-picker-menu\>
 */
export const jpPickerMenu =
  JupyterPickerMenu.compose<FoundationElementDefinition>({
    baseName: 'draft-picker-menu',
    baseClass: PickerMenu,
    template: pickerMenuTemplate,
    styles: pickerMenuStyles
  });

/**
 * Picker menu options class
 *
 * @alpha
 * @public
 * @tagname jp-draft-picker-menu-option
 */
class JupyterPickerMenuOption extends PickerMenuOption {}

/**
 *  Component that displays available picker menu options
 *
 *
 * @alpha
 * @remarks
 * HTML Element: \<jp-draft-picker-menu-option\>
 */
export const jpPickerMenuOption = JupyterPickerMenuOption.compose({
  baseName: 'draft-picker-menu-option',
  baseClass: PickerMenuOption,
  template: pickerMenuOptionTemplate,
  styles: pickerMenuOptionStyles
});

/**
 * Picker list class
 *
 * @alpha
 * @public
 * @tagname jp-draft-picker-list
 */
class JupyterPickerList extends PickerList {}

/**
 * Component that displays the list of selected picker items along
 * with the input combobox
 *
 * @alpha
 * @remarks
 * HTML Element: \<jp-draft-picker-list\>
 *
 */
export const jpPickerList = JupyterPickerList.compose({
  baseName: 'draft-picker-list',
  baseClass: PickerList,
  template: pickerListTemplate,
  styles: pickerListStyles
});

/**
 * Picker list item class
 *
 * @alpha
 * @public
 * @tagname jp-draft-picker-list-item
 */
class JupyterPickerListItem extends PickerListItem {}

/**
 * Component that displays selected items
 *
 * @alpha
 * @remarks
 * HTML Element: \<jp-draft-picker-list-item\>
 */
export const jpPickerListItem = JupyterPickerListItem.compose({
  baseName: 'draft-picker-list-item',
  baseClass: PickerListItem,
  template: pickerListItemTemplate,
  styles: pickerListItemStyles
});

export {
  JupyterPicker as Picker,
  JupyterPickerMenu as PickerMenu,
  JupyterPickerMenuOption as PickerMenuOption,
  JupyterPickerList as PickerList,
  JupyterPickerListItem as PickerListItem,
  pickerStyles,
  pickerListItemStyles,
  pickerMenuOptionStyles,
  pickerMenuStyles
};
