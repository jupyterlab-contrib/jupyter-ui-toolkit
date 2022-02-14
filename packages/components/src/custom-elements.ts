// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import type { Container } from '@microsoft/fast-foundation';
import { jpAvatar } from './avatar/index';
import { jpBreadcrumb } from './breadcrumb/index';
import { jpBreadcrumbItem } from './breadcrumb-item/index';
import { jpButton } from './button/index';
import { jpCheckbox } from './checkbox/index';
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

// Don't delete these. They're needed so that API-extractor doesn't add import types
// with improper pathing
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Avatar } from './avatar/index';
import type { Breadcrumb } from './breadcrumb/index';
import type { BreadcrumbItem } from './breadcrumb-item/index';
import type { Button } from './button/index';
import type { Checkbox } from './checkbox/index';
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

// export all components
export {
  jpAvatar,
  jpBreadcrumb,
  jpBreadcrumbItem,
  jpButton,
  jpCheckbox,
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
  jpTextField
};

/**
 * All Jupyter Web Components
 * @public
 * @remarks
 * This object can be passed directly to the Design System's `register` method to
 * statically link and register all available components.
 */
export const allComponents = {
  jpAvatar,
  jpBreadcrumb,
  jpBreadcrumbItem,
  jpButton,
  jpCheckbox,
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
