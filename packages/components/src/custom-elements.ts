// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { Container } from '@microsoft/fast-foundation';
import { jpAnchoredRegion } from './anchored-region/index';
import { jpAvatar } from './avatar/index';
import { jpBreadcrumb } from './breadcrumb/index';
import { jpBreadcrumbItem } from './breadcrumb-item/index';
import { jpButton } from './button/index';
import { jpCard } from './card/index';
import { jpCheckbox } from './checkbox/index';
import { jpCombobox } from './combobox/index';
import { jpDataGrid, jpDataGridCell, jpDataGridRow } from './data-grid/index';
import { jpDivider } from './divider/index';
import { jpNumberField } from './number-field/index';
import { jpOption } from './option/index';
import { jpProgress } from './progress/index';
import { jpProgressRing } from './progress-ring/index';
import { jpSearch } from './search/index';
import { jpSelect } from './select/index';
import { jpSlider } from './slider/index';
import { jpSliderLabel } from './slider-label/index';
import { jpTabPanel } from './tab-panel/index';
import { jpTab } from './tab/index';
import { jpTabs } from './tabs/index';
import { jpTextField } from './text-field/index';
import { jpToolbar } from './toolbar/index';
import { jpTooltip } from './tooltip/index';
import { jpTreeItem } from './tree-item/index';
import { jpTreeView } from './tree-view/index';

// Don't delete these. They're needed so that API-extractor doesn't add import types
// with improper pathing
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { AnchoredRegion } from './anchored-region/index';
import type { Avatar } from './avatar/index';
import type { Breadcrumb } from './breadcrumb/index';
import type { BreadcrumbItem } from './breadcrumb-item/index';
import type { Button } from './button/index';
import type { Card } from './card/index';
import type { Checkbox } from './checkbox/index';
import type { Combobox } from './combobox/index';
import type { DataGrid, DataGridCell, DataGridRow } from './data-grid/index';
import type { Divider } from './divider/index';
import type { NumberField } from './number-field/index';
import type { Option } from './option/index';
import type { Progress } from './progress/index';
import type { ProgressRing } from './progress-ring/index';
import type { Search } from './search/index';
import type { Select } from './select/index';
import type { Slider } from './slider/index';
import type { SliderLabel } from './slider-label/index';
import type { TabPanel } from './tab-panel/index';
import type { Tab } from './tab/index';
import type { Tabs } from './tabs/index';
import type { TextField } from './text-field/index';
import type { Toolbar } from './toolbar/index';
import type { Tooltip } from './tooltip/index';
import type { TreeItem } from './tree-item/index';
import type { TreeView } from './tree-view/index';

// export all components
export {
  jpAnchoredRegion,
  jpAvatar,
  jpBreadcrumb,
  jpBreadcrumbItem,
  jpButton,
  jpCard,
  jpCheckbox,
  jpCombobox,
  jpDataGrid,
  jpDataGridCell,
  jpDataGridRow,
  jpDivider,
  jpNumberField,
  jpOption,
  jpProgress,
  jpProgressRing,
  jpSearch,
  jpSelect,
  jpSlider,
  jpSliderLabel,
  jpTab,
  jpTabPanel,
  jpTabs,
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
  jpAnchoredRegion,
  jpAvatar,
  jpBreadcrumb,
  jpBreadcrumbItem,
  jpButton,
  jpCard,
  jpCheckbox,
  jpCombobox,
  jpDataGrid,
  jpDataGridCell,
  jpDataGridRow,
  jpDivider,
  jpNumberField,
  jpOption,
  jpProgress,
  jpProgressRing,
  jpSearch,
  jpSelect,
  jpSlider,
  jpSliderLabel,
  jpTab,
  jpTabPanel,
  jpTabs,
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
