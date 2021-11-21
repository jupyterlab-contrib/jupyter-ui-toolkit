// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import type {Container} from '@microsoft/fast-foundation';
import {jpBadge} from './badge/index';
import {jpButton} from './button/index';
import {jpCheckbox} from './checkbox/index';
import {
	jpDataGrid,
	jpDataGridCell,
	jpDataGridRow,
} from './data-grid/index';
import {jpDivider} from './divider/index';
import {jpDropdown} from './dropdown/index';
import {jpLink} from './link/index';
import {jpOption} from './option/index';
import {jpPanels, jpPanelTab, jpPanelView} from './panels/index';
import {jpProgressRing} from './progress-ring/index';
import {jpRadioGroup} from './radio-group/index';
import {jpRadio} from './radio/index';
import {jpTag} from './tag/index';
import {jpTextArea} from './text-area/index';
import {jpTextField} from './text-field/index';

// Don't delete these. They're needed so that API-extractor doesn't add import types
// with improper pathing
/* eslint-disable @typescript-eslint/no-unused-vars */
import type {Badge} from './badge/index';
import type {Button} from './button/index';
import type {Checkbox} from './checkbox/index';
import type {DataGrid, DataGridCell, DataGridRow} from './data-grid/index';
import type {Divider} from './divider/index';
import type {Dropdown} from './dropdown/index';
import type {Link} from './link/index';
import type {Option} from './option/index';
import type {Panels, PanelTab, PanelView} from './panels/index';
import type {ProgressRing} from './progress-ring/index';
import type {RadioGroup} from './radio-group/index';
import type {Radio} from './radio/index';
import type {Tag} from './tag/index';
import type {TextArea} from './text-area/index';
import type {TextField} from './text-field/index';

// export all components
export {
	jpBadge,
	jpButton,
	jpCheckbox,
	jpDataGrid,
	jpDataGridCell,
	jpDataGridRow,
	jpDivider,
	jpDropdown,
	jpLink,
	jpOption,
	jpPanels,
	jpPanelTab,
	jpPanelView,
	jpProgressRing,
	jpRadioGroup,
	jpRadio,
	jpTag,
	jpTextArea,
	jpTextField,
};

/**
 * All Jupyter Web Components
 * @public
 * @remarks
 * This object can be passed directly to the Design System's `register` method to
 * statically link and register all available components.
 */
export const allComponents = {
	jpBadge,
	jpButton,
	jpCheckbox,
	jpDataGrid,
	jpDataGridCell,
	jpDataGridRow,
	jpDivider,
	jpDropdown,
	jpLink,
	jpOption,
	jpPanels,
	jpPanelTab,
	jpPanelView,
	jpProgressRing,
	jpRadioGroup,
	jpRadio,
	jpTag,
	jpTextArea,
	jpTextField,
	register(container?: Container, ...rest: any[]) {
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
	},
};
