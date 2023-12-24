// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { Container } from '@microsoft/fast-foundation';

// Don't delete these. They're needed so that API-extractor doesn't add import types
// with improper pathing
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Accordion } from './accordion/index.js';
import type { AccordionItem } from './accordion-item/index.js';
import type { Anchor } from './anchor/index.js';
import type { AnchoredRegion } from './anchored-region/index.js';
import type { Avatar } from './avatar/index.js';
import type { Badge } from './badge/index.js';
import type { Breadcrumb } from './breadcrumb/index.js';
import type { BreadcrumbItem } from './breadcrumb-item/index.js';
import type { Button } from './button/index.js';
import type { Card } from './card/index.js';
import type { Checkbox } from './checkbox/index.js';
import type { Combobox } from './combobox/index.js';
import type { DataGrid, DataGridCell, DataGridRow } from './data-grid/index.js';
import type { DateField } from './date-field/index.js';
import type { Dialog } from './dialog/index.js';
import type {Disclosure} from './disclosure/index.js'
import type { Divider } from './divider/index.js';
import type { Listbox } from './listbox/index.js';
import type { Menu } from './menu/index.js';
import type { MenuItem } from './menu-item/index.js';
import type { NumberField } from './number-field/index.js';
import type { Option } from './option/index.js';
import type {Picker} from './picker/index.js'
import type { Progress } from './progress/index.js';
import type { ProgressRing } from './progress-ring/index.js';
import type { Radio } from './radio/index.js';
import type { RadioGroup } from './radio-group/index.js';
import type { Search } from './search/index.js';
import type { Select } from './select/index.js';
import type {Skeleton} from './skeleton/index.js'
import type { Slider } from './slider/index.js';
import type { SliderLabel } from './slider-label/index.js';
import type { Switch } from './switch/index.js';
import type { TabPanel } from './tab-panel/index.js';
import type { Tab } from './tab/index.js';
import type { Tabs } from './tabs/index.js';
import type { TextArea } from './text-area/index.js';
import type { TextField } from './text-field/index.js';
import type { Toolbar } from './toolbar/index.js';
import type { Tooltip } from './tooltip/index.js';
import type { TreeItem } from './tree-item/index.js';
import type { TreeView } from './tree-view/index.js';

/**
 * Export all custom element definitions
 */

import { jpAccordion } from './accordion/index.js';
import { jpAccordionItem } from './accordion-item/index.js';
import { jpAnchor } from './anchor/index.js';
import { jpAnchoredRegion } from './anchored-region/index.js';
import { jpAvatar } from './avatar/index.js';
import { jpBadge } from './badge/index.js';
import { jpBreadcrumb } from './breadcrumb/index.js';
import { jpBreadcrumbItem } from './breadcrumb-item/index.js';
import { jpButton } from './button/index.js';
import { jpCard } from './card/index.js';
import { jpCheckbox } from './checkbox/index.js';
import { jpCombobox } from './combobox/index.js';
import { jpDataGrid, jpDataGridCell, jpDataGridRow } from './data-grid/index.js';
import { jpDateField } from './date-field/index.js';
/**
 * Don't remove. This is needed to prevent api-extractor errors.
 */
// import type { DesignSystemProvider } from "./design-system-provider/index.js";
import { jpDialog } from './dialog/index.js';
import { jpDisclosure } from './disclosure/index.js';
import { jpDivider } from './divider/index.js';
import { jpListbox } from './listbox/index.js';
import { jpMenu } from './menu/index.js';
import { jpMenuItem } from './menu-item/index.js';
import { jpNumberField } from './number-field/index.js';
import { jpOption } from './option/index.js';
import {jpPicker, jpPickerList, jpPickerListItem, jpPickerMenu, jpPickerMenuOption} from './picker/index.js'
import { jpProgress } from './progress/index.js';
import { jpProgressRing } from './progress-ring/index.js';
import { jpRadio } from './radio/index.js';
import { jpRadioGroup } from './radio-group/index.js';
import { jpSearch } from './search/index.js';
import { jpSelect } from './select/index.js';
import { jpSkeleton } from './skeleton/index.js'
import { jpSlider } from './slider/index.js';
import { jpSliderLabel } from './slider-label/index.js';
import { jpSwitch } from './switch/index.js';
import { jpTabPanel } from './tab-panel/index.js';
import { jpTab } from './tab/index.js';
import { jpTabs } from './tabs/index.js';
import { jpTextArea } from './text-area/index.js';
import { jpTextField } from './text-field/index.js';
import { jpToolbar } from './toolbar/index.js';
import { jpTooltip } from './tooltip/index.js';
import { jpTreeItem } from './tree-item/index.js';
import { jpTreeView } from './tree-view/index.js';

// When adding new components, make sure to add the component to the `allComponents` object
// in addition to exporting the component by name. Ideally we would be able to just add
// `export * as allComponents from "./custom-elements" from  src/index.ts but API extractor
// throws for `export * as` expressions. https://github.com/microsoft/rushstack/pull/1796S

export {
  jpAccordion,
  jpAccordionItem,
  jpAnchor,
  jpAnchoredRegion,
  jpAvatar,
  jpBadge,
  jpBreadcrumb,
  jpBreadcrumbItem,
  jpButton,
  jpCard,
  jpCheckbox,
  jpCombobox,
  jpDataGrid,
  jpDataGridCell,
  jpDataGridRow,
  jpDateField,
  jpDialog,
  jpDisclosure,
  jpDivider,
  jpListbox,
  jpMenu,
  jpMenuItem,
  jpNumberField,
  jpOption,
  jpPicker,
  jpPickerList,
  jpPickerListItem,
  jpPickerMenu,
  jpPickerMenuOption,
  jpProgress,
  jpProgressRing,
  jpRadio,
  jpRadioGroup,
  jpSearch,
  jpSelect,
  jpSkeleton,
  jpSlider,
  jpSliderLabel,
  jpSwitch,
  jpTab,
  jpTabPanel,
  jpTabs,
  jpTextArea,
  jpTextField,
  jpToolbar,
  jpTooltip,
  jpTreeItem,
  jpTreeView
};

/**
 * All Jupyter Web Components
 * @public
 * @remarks
 * This object can be passed directly to the Design System's `register` method to
 * statically link and register all available components.
 */
export const allComponents = {
  jpAccordion,
  jpAccordionItem,
  jpAnchor,
  jpAnchoredRegion,
  jpAvatar,
  jpBadge,
  jpBreadcrumb,
  jpBreadcrumbItem,
  jpButton,
  jpCard,
  jpCheckbox,
  jpCombobox,
  jpDataGrid,
  jpDataGridCell,
  jpDataGridRow,
  jpDateField,
  jpDialog,
  jpDisclosure,
  jpDivider,
  jpListbox,
  jpMenu,
  jpMenuItem,
  jpNumberField,
  jpOption,
  jpPicker,
  jpPickerList,
  jpPickerListItem,
  jpPickerMenu,
  jpPickerMenuOption,
  jpProgress,
  jpProgressRing,
  jpRadio,
  jpRadioGroup,
  jpSearch,
  jpSelect,
  jpSkeleton,
  jpSlider,
  jpSliderLabel,
  jpSwitch,
  jpTab,
  jpTabPanel,
  jpTabs,
  jpTextArea,
  jpTextField,
  jpToolbar,
  jpTooltip,
  jpTreeItem,
  jpTreeView,
  register(container?: Container, ...rest: any[]): void {
    if (!container) {
      // preserve backward compatibility with code that loops through
      // the values of this object and calls them as funcs with no args
      return;
    }

    for (const key in this) {
      if (key === 'register') {
        continue;
      }

      (this as any)[key]().register(container, ...rest);
    }
  }
};
