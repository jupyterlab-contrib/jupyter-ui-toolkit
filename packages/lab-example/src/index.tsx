// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  Accordion,
  AccordionItem,
  Anchor,
  Avatar,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Checkbox,
  Combobox,
  DataGrid,
  // DateField,
  Disclosure,
  Divider,
  Listbox,
  Menu,
  MenuItem,
  NumberField,
  Option,
  Progress,
  ProgressRing,
  Radio,
  RadioGroup,
  Search,
  Select,
  Skeleton,
  Slider,
  SliderLabel,
  Switch,
  Tab,
  TabPanel,
  Tabs,
  TextArea,
  TextField,
  Toolbar,
  Tooltip,
  TreeItem,
  TreeView
} from '@jupyter/react-components';
import {
  addJupyterLabThemeChangeListener,
  allComponents,
  DataGrid as WebDataGrid,
  provideJupyterDesignSystem
} from '@jupyter/web-components';
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { IThemeManager, ReactWidget } from '@jupyterlab/apputils';
import { Panel, Widget } from '@lumino/widgets';
import React from 'react';
import {
  BasicModel,
  BasicView,
  ObservableModel,
  ObservableView
} from './model';

provideJupyterDesignSystem().register(allComponents);
addJupyterLabThemeChangeListener();

const TABLE_DATA = [
  {
    Header1: 'Data 1 1',
    Header2: 'Data 2 1',
    Header3: 'Data 3 1',
    Header4: 'Cell Data 4 1'
  },
  {
    Header1: 'Data 1 2',
    Header2: 'Data 2 2',
    Header3: 'Data 3 2',
    Header4: 'Cell Data 4 2'
  },
  {
    Header1: 'Data 1 3',
    Header2: 'Data 2 3',
    Header3: 'Data 3 3',
    Header4: 'Cell Data 4 3'
  }
];

/**
 * Initialization data for the jupyter-ui-demo extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter-ui-demo:plugin',
  optional: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyter-ui-demo is activated!');

    const widget = new Widget({ node: createNode() });
    widget.addClass('jp-Artwork');
    widget.id = 'artwork-ui-components';
    widget.title.label = 'Toolkit Gallery';

    // Add listeners
    const clickListener = () => {
      alert('Reacting to vanilla click event.');
    };
    const changeListener = (name: string) => {
      const f = (event: Event) => {
        console.log(event);
        alert(`${name} change event: ${(event as any).target.value}`);
      };
      return f;
    };
    const changeConsoleListener = (name: string) => {
      const f = (event: Event) => {
        console.log(`${name} change event: ${(event as any).target.value}`);
      };
      return f;
    };
    const eventListener = (name: string, emitAlert = false) => {
      const f = (event: Event) => {
        console.log(event);
        if (emitAlert) {
          alert(`${name} event: ${event.type}`);
        }
      };
      return f;
    };
    const buttons = widget.node.querySelectorAll('jp-button');
    buttons.forEach(button => {
      button.addEventListener('click', clickListener);
    });
    const search = widget.node.querySelector('jp-search');
    search?.addEventListener('change', changeListener('Search'));
    search?.addEventListener('input', changeConsoleListener('Search'));

    const textField = widget.node.querySelector('jp-text-field');
    textField?.addEventListener('change', changeListener('Text field'));
    textField?.addEventListener('input', changeListener('Text field'));

    const numberField = widget.node.querySelector('jp-number-field');
    numberField?.addEventListener('change', changeListener('Number field'));
    numberField?.addEventListener('input', changeListener('Number field'));

    const dateField = widget.node.querySelector('jp-date-field');
    dateField?.addEventListener('change', changeListener('Date field'));

    const select = widget.node.querySelector('jp-select');
    select?.addEventListener('change', changeListener('Select'));

    const listbox = widget.node.querySelector('jp-listbox');
    listbox?.addEventListener('change', changeListener('Listbox'));

    const combobox = widget.node.querySelector('jp-combobox');
    combobox?.addEventListener('change', changeListener('Combobox'));
    combobox?.addEventListener('input', changeConsoleListener('Combobox'));

    const slider = widget.node.querySelector('jp-slider');
    slider?.addEventListener('change', changeConsoleListener('Slider'));

    const radioGroup = widget.node.querySelector('jp-radio-group');
    radioGroup?.addEventListener(
      'change',
      changeConsoleListener('Radio Group')
    );

    const checkbox = widget.node.querySelectorAll('jp-checkbox');
    checkbox.forEach(box => {
      box.addEventListener('change', eventListener('Checkbox', true));
    });

    const switch_ = widget.node.querySelector('jp-switch');
    switch_?.addEventListener('change', changeListener('Switch'));

    const tooltip = widget.node.querySelector('jp-tooltip');
    tooltip?.addEventListener('dismiss', eventListener('Tooltip'));

    const tabs = widget.node.querySelector('jp-tabs');
    tabs?.addEventListener('change', eventListener('Tabs'));

    const treeItems = widget.node.querySelectorAll('jp-tree-item');
    treeItems.forEach(item => {
      item.addEventListener('selected-change', eventListener('Tree Item'));
      item.addEventListener('expanded-change', eventListener('Tree Item'));
    });

    const dataRef = React.createRef<WebDataGrid>();
    const reactWidget = ReactWidget.create(<Artwork dataRef={dataRef} />);
    reactWidget.addClass('jp-Artwork');
    reactWidget.id = 'artwork-react-ui-components';
    reactWidget.title.label = 'React Toolkit Gallery';

    app.restored.then(() => {
      app.shell.add(widget, 'main');
      app.shell.add(reactWidget, 'main', { mode: 'split-right' });
      app.shell.activateById(widget.id);

      const dataGrid: WebDataGrid | null =
        widget.node.querySelector('#basic-grid');
      if (dataGrid?.isConnected) {
        dataGrid.rowsData = TABLE_DATA;
        if (dataRef.current) {
          dataRef.current.rowsData = TABLE_DATA;
        }
      }

      // Demo Model-View
      const panel = new Panel();
      panel.id = 'jupyter-ui-toolkit-demo-panel';
      const title1 = new Widget();
      title1.node.textContent = 'Using signal';
      panel.addWidget(title1);
      const view1 = new BasicView();
      view1.model = new BasicModel();
      panel.addWidget(new Widget({ node: view1 }));

      const title2 = new Widget();
      title2.node.textContent = 'Using FAST observable';
      panel.addWidget(title2);
      const view2 = new ObservableView();
      view2.model = new ObservableModel();
      panel.addWidget(new Widget({ node: view2 }));

      panel.title.label = 'Demo';
      app.shell.add(panel, 'right');
    });
  }
};

function Artwork(props: { dataRef: React.Ref<WebDataGrid> }): JSX.Element {
  const [tooltipAnchor, setTooltipAnchor] = React.useState<HTMLElement | null>(
    null
  );

  const onEvent = (event: any) => {
    console.log(event);
    alert(`Got a React event: ${event.type}`);
  };
  const onChange = (event: any) => {
    alert(`React on React change event: ${event?.target?.value}`);
  };
  const onConsole = (event: any) => {
    console.log('React on react event: ', event);
  };
  const onChangeConsole = (event: any) => {
    console.log(`React on React change event: ${event?.target?.value}`);
  };
  const onCheckedConsole = (event: any) => {
    console.log(`React on React change event: ${event?.target?.checked}`);
  };
  const onClick = () => {
    alert('Reacting on React click event.');
  };

  return (
    <div className="jp-Grid">
      <div className="jp-FlexColumn" style={{ gridColumn: 1 }}>
        <div className="jp-FlexRow">
          <Button appearance="accent" onClick={onClick}>
            Accent
          </Button>
          <Button appearance="neutral" onClick={onClick}>
            Default
          </Button>
          <Button appearance="error" onClick={onClick}>
            Error
          </Button>
          <Button appearance="stealth" aria-label="Confirm" onClick={onClick}>
            <span className="fa fa-cog"></span>
          </Button>
        </div>
        <Anchor appearance="outline" href="#">
          Anchor element
        </Anchor>
        <Search
          value="Dummy search text"
          onChange={onChange}
          onInput={onChangeConsole}
        >
          Search Label
        </Search>
        <TextField
          value="Populated text"
          onChange={onChange}
          onInput={onChangeConsole}
        >
          Text Field Label
        </TextField>
        <NumberField value="10" onChange={onChange} onInput={onChangeConsole}>
          Number Field Label
        </NumberField>
        {/*        <DateField value="2021-09-12" onChange={onChange}>
          Date Field Label
  </DateField> */}
        <div className="jp-FlexColumn">
          <label>Select</label>
          <Select onChange={onChange}>
            <Option>Option Label #1</Option>
            <Option>Option Label #2</Option>
            <Option>Option Label #3</Option>
          </Select>
        </div>
        <div className="jp-FlexColumn">
          <label>Listbox</label>
          <Listbox onChange={onChange}>
            <Option>Option Label #1</Option>
            <Option>Option Label #2</Option>
            <Option>Option Label #3</Option>
          </Listbox>
        </div>
        <div className="jp-FlexColumn">
          <label>Combobox</label>
          <Combobox onChange={onChange} onInput={onConsole}>
            <Option>Option Label #1</Option>
            <Option>Option Label #2</Option>
            <Option>Option Label #3</Option>
          </Combobox>
        </div>
      </div>
      <div className="jp-FlexColumn" style={{ gridColumn: 2 }}>
        <TextArea>Text Area Label</TextArea>
        <Slider min={0} max={100} onChange={onChangeConsole}>
          <SliderLabel position="0">0%</SliderLabel>
          <SliderLabel position="50">50%</SliderLabel>
          <SliderLabel position="100">100%</SliderLabel>
        </Slider>
        <RadioGroup orientation="vertical" onChange={onChangeConsole}>
          <label slot="label">Label</label>
          <Radio value="radio-1" checked>
            Radio Label
          </Radio>
          <Radio value="radio-2">Radio Label</Radio>
          <Radio value="radio-3" disabled>
            Radio Label
          </Radio>
        </RadioGroup>
        <div className="jp-FlexColumn">
          <label>Checkboxes</label>
          <Checkbox onChange={onCheckedConsole} checked>
            Label
          </Checkbox>
          <Checkbox onChange={onCheckedConsole}>Label</Checkbox>
          <Checkbox onChange={onCheckedConsole} disabled>
            Label
          </Checkbox>
        </div>
        <Switch onChange={onCheckedConsole}>Switch</Switch>
        <Disclosure title="Disclosure">
          <p>Very long blabla</p>
        </Disclosure>
      </div>
      <div className="jp-FlexColumn" style={{ gridColumn: 3 }}>
        <Avatar shape="circle">JS</Avatar>
        <Badge>22</Badge>
        <Breadcrumb>
          <BreadcrumbItem href="#">Item 1</BreadcrumbItem>
          <BreadcrumbItem href="#">Item 2</BreadcrumbItem>
          <BreadcrumbItem href="#">Item 3</BreadcrumbItem>
        </Breadcrumb>
        <Card>This is a card</Card>
        <div className="jp-FlexColumn">
          <label>Divider</label>
          <Divider></Divider>
        </div>
        <div className="jp-FlexColumn">
          <label>Progress</label>
          <Progress></Progress>
          <Progress min={0} max={50} value={30}></Progress>
        </div>
        <div className="jp-FlexColumn">
          <label>Progress Ring</label>
          <ProgressRing></ProgressRing>
          <ProgressRing min={0} max={50} value={30}></ProgressRing>
        </div>
        <div className="jp-FlexColumn">
          <label>Tooltip</label>
          {/* Use callback ref to react to the component mount */}
          <Button
            ref={anchor => {
              setTooltipAnchor(anchor);
            }}
          >
            Anchor
          </Button>
          <Tooltip anchorElement={tooltipAnchor}>React tooltip</Tooltip>
        </div>

        <Menu>
          <MenuItem role="menuitemcheckbox">Menu item 1</MenuItem>
          <MenuItem onExpand={onConsole} onChange={onConsole}>
            Menu item 2
            <Menu>
              <MenuItem role="menuitemcheckbox" onChange={onConsole}>
                Checkbox 1
              </MenuItem>
              <MenuItem>Nested Menu item 1.1</MenuItem>
              <MenuItem>Nested Menu item 1.2</MenuItem>
              <MenuItem>Nested Menu item 1.3</MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem>
            Menu item 3<div slot="end">Shortcut text</div>
          </MenuItem>
        </Menu>
      </div>
      <div className="jp-FlexColumn" style={{ gridColumn: 4 }}>
        <Toolbar>
          <label slot="start">Toolbar</label>
          <Button>Button</Button>
          <Checkbox>Choice 1</Checkbox>
          <Checkbox>Choice 2</Checkbox>
        </Toolbar>

        <Accordion {...{ 'expand-mode': 'single' }}>
          <AccordionItem expanded>
            <span slot="heading">Panel one</span>
            Panel one content
          </AccordionItem>
          <AccordionItem>
            <span slot="heading">Panel two</span>
            Panel two content
          </AccordionItem>
          <AccordionItem>
            <span slot="heading">Panel three</span>
            Panel three content
          </AccordionItem>
        </Accordion>

        <DataGrid
          ref={props.dataRef}
          generate-header="sticky"
          aria-label="With Sticky Header"
        ></DataGrid>

        <div style={{ display: 'block', width: '100%' }}>
          <Skeleton
            shimmer={true}
            shape="circle"
            style={{ borderRadius: '4px', width: '50px', height: '50px' }}
          ></Skeleton>
          <Skeleton
            shimmer={true}
            shape="rect"
            style={{ borderRadius: '4px', marginTop: '10px', height: '10px' }}
          ></Skeleton>
        </div>

        <Tabs onChange={onEvent}>
          <Tab id="one">One</Tab>
          <Tab id="two">Two</Tab>
          <Tab id="three">Three</Tab>
          <TabPanel id="panelOne">This is panel one content.</TabPanel>
          <TabPanel id="panelTwo">This is panel two content.</TabPanel>
          <TabPanel id="panelThree">This is panel three content.</TabPanel>
        </Tabs>
        <TreeView>
          <TreeItem onSelect={onEvent} onExpand={onEvent}>
            Root item 1
            <TreeItem expanded>
              Flowers
              <TreeItem>Daisy</TreeItem>
              <TreeItem disabled>Sunflower</TreeItem>
              <TreeItem>
                Rose
                <TreeItem>Pink</TreeItem>
                <TreeItem>Red</TreeItem>
                <TreeItem>White</TreeItem>
              </TreeItem>
            </TreeItem>
            <TreeItem>Nested item 2</TreeItem>
            <TreeItem>Nested item 3</TreeItem>
          </TreeItem>
          <TreeItem>
            Root item 2
            <TreeItem>
              Flowers
              <TreeItem disabled>Daisy</TreeItem>
              <TreeItem>Sunflower</TreeItem>
              <TreeItem>Rose</TreeItem>
            </TreeItem>
            <TreeItem>Nested item 2</TreeItem>
            <TreeItem>Nested item 3</TreeItem>
          </TreeItem>
          <TreeItem>Root item 3</TreeItem>
        </TreeView>
      </div>
    </div>
  );
}

function createNode(): HTMLElement {
  const node = document.createElement('div');
  node.insertAdjacentHTML(
    'afterbegin',
    `
<div class="jp-Grid">
    <div class="jp-FlexColumn" style="grid-column: 1;">
      <div class="jp-FlexRow">
        <jp-button appearance="accent">Accent</jp-button>
        <jp-button appearance="neutral">Default</jp-button>
        <jp-button appearance="error">Error</jp-button>
        <jp-button appearance="stealth" aria-label="Confirm"><span class="fa fa-cog"></span></jp-button>
      </div>
      <jp-anchor appearance="outline" href="#">
        Anchor element
      </jp-anchor>
      <jp-search value="Dummy search text">Search Label</jp-search>
      <jp-text-field value="Populated text">Text Field Label</jp-text-field>
      <jp-number-field value="30">Number Field Label</jp-number-field>
      <jp-date-field value="2021-09-12">
        Date Field Label
      </jp-date-field>
      <div class="jp-FlexColumn">
        <label>
          Select
        </label>
        <jp-select>
          <jp-option>Option Label #1</jp-option>
          <jp-option>Option Label #2</jp-option>
          <jp-option>Option Label #3</jp-option>
        </jp-select>
      </div>
      <div class="jp-FlexColumn">
        <label>
          Listbox
        </label>
        <jp-listbox>
          <jp-option>Option Label #1</jp-option>
          <jp-option>Option Label #2</jp-option>
          <jp-option>Option Label #3</jp-option>
        </jp-listbox>
      </div>
      <div class="jp-FlexColumn">
        <label>
          Combobox
        </label>
        <jp-combobox>
          <jp-option>Option Label #1</jp-option>
          <jp-option>Option Label #2</jp-option>
          <jp-option>Option Label #3</jp-option>
        </jp-combobox>
      </div>
    </div>
    <div class="jp-FlexColumn" style="grid-column: 2;">
      <jp-text-area>Text Area Label</jp-text-area>
      <jp-slider min="0" max="100">
        <jp-slider-label position="0">0%</jp-slider-label>
        <jp-slider-label position="50">50%</jp-slider-label>
        <jp-slider-label position="100">100%</jp-slider-label>
      </jp-slider>
      <jp-radio-group orientation="vertical">
        <label slot="label">Label</label>
        <jp-radio value="radio-1" checked>Radio Label</jp-radio>
        <jp-radio value="radio-2">Radio Label</jp-radio>
        <jp-radio value="radio-3" disabled>Radio Label</jp-radio>
      </jp-radio-group>
      <div class="jp-FlexColumn">
        <label>Checkboxes</label>
        <jp-checkbox checked>Label</jp-checkbox>
        <jp-checkbox>Label</jp-checkbox>
        <jp-checkbox disabled>Label</jp-checkbox>
      </div>
      <jp-switch>Switch</jp-switch>
      <jp-disclosure title="Disclosure">
        <p>Very long blablabla to be disclosed.</p>
      </jp-disclosure>
    </div>
    <div class="jp-FlexColumn" style="grid-column: 3;">
      <jp-badge>18</jp-badge>
      <jp-avatar shape="circle">JS</jp-avatar>
      <jp-breadcrumb>
        <jp-breadcrumb-item href="#">Item 1</jp-breadcrumb-item>
        <jp-breadcrumb-item href="#">Item 2</jp-breadcrumb-item>
        <jp-breadcrumb-item href="#">Item 3</jp-breadcrumb-item>
      </jp-breadcrumb>
      <jp-card>This is a card</jp-card>
      <div class="jp-FlexColumn">
        <label>Divider</label>
        <jp-divider></jp-divider>
      </div>
      <div class="jp-FlexColumn">
        <label>Progress</label>
        <jp-progress></jp-progress>
        <jp-progress min="0" max="50" value="30"></jp-progress>
      </div>
      <div class="jp-FlexColumn">
        <label>Progress Ring</label>
        <jp-progress-ring></jp-progress-ring>
        <jp-progress-ring min="0" max="50" value="30"></jp-progress-ring>
      </div>
      <div class="jp-FlexColumn">
        <label>Tooltip</label>
        <jp-tooltip anchor="anchored-button">Beautiful tooltip</jp-tooltip>
        <jp-button id="anchored-button">Anchor</jp-button>
      </div>

      <jp-menu>
        <jp-menu-item role="menuitemcheckbox">
            Menu item 1
        </jp-menu-item>
        <jp-menu-item>
            Menu item 2
            <jp-menu>
                <jp-menu-item role="menuitemcheckbox">Checkbox 1</jp-menu-item>
                <jp-menu-item>Nested Menu item 1.1</jp-menu-item>
                <jp-menu-item>Nested Menu item 1.2</jp-menu-item>
                <jp-menu-item>Nested Menu item 1.3</jp-menu-item>
            </jp-menu>
        </jp-menu-item>
        <jp-menu-item>
            Menu item 3
            <div slot="end">
                Shortcut text
            </div>
        </jp-menu-item>
      </jp-menu>

    </div>
    <div class="jp-FlexColumn" style="grid-column: 4;">
      <jp-toolbar>
        <label slot="start">Toolbar</label>
        <jp-button>Button</jp-button>
        <jp-checkbox>Choice 1</jp-checkbox>
        <jp-checkbox>Choice 2</jp-checkbox>
      </jp-toolbar>

      <jp-accordion expand-mode="single">
          <jp-accordion-item expanded>
              <span slot="heading">Panel one</span>
              Panel one content
          </jp-accordion-item>
          <jp-accordion-item>
              <span slot="heading">Panel two</span>
              Panel two content
          </jp-accordion-item>
          <jp-accordion-item>
              <span slot="heading">Panel three</span>
              Panel three content
          </jp-accordion-item>
      </jp-accordion>
      
      <jp-data-grid id="basic-grid" generate-header="sticky" aria-label="With Sticky Header"></jp-data-grid>

      <div style="display: block; width: 100%;">
        <jp-skeleton
          style="border-radius: 4px; width: 50px; height: 50px;"
          shape="circle"
          shimmer
        ></jp-skeleton>
        <jp-skeleton
            style="border-radius: 4px; margin-top: 10px; height: 10px;"
            shape="rect"
            shimmer
        ></jp-skeleton>
      </div>

      <jp-tabs aria-label="Default">
        <jp-tab id="tab-1">Tab 1</jp-tab>
        <jp-tab id="tab-2">Tab 2</jp-tab>
        <jp-tab id="tab-3">Tab 3</jp-tab>
        <jp-tab id="tab-4">Tab 4</jp-tab>
        <jp-tab-panel id="view-1">
          Tab 1 Content
        </jp-tab-panel>
        <jp-tab-panel id="view-2">
          Tab 2 Content
        </jp-tab-panel>
        <jp-tab-panel id="view-3">
          Tab 3 Content
        </jp-tab-panel>
        <jp-tab-panel id="view-4">
          Tab 4 Content
        </jp-tab-panel>
      </jp-tabs>

      <jp-tree-view>
        <jp-tree-item>
          Root item 1
          <jp-tree-item expanded>
            Flowers
            <jp-tree-item>Daisy</jp-tree-item>
            <jp-tree-item disabled>Sunflower</jp-tree-item>
            <jp-tree-item>
              Rose
              <jp-tree-item>Pink</jp-tree-item>
              <jp-tree-item>Red</jp-tree-item>
              <jp-tree-item>White</jp-tree-item>
            </jp-tree-item>
          </jp-tree-item>
          <jp-tree-item>Nested item 2</jp-tree-item>
          <jp-tree-item>Nested item 3</jp-tree-item>
        </jp-tree-item>
        <jp-tree-item>
          Root item 2
          <jp-tree-item>
            Flowers
            <jp-tree-item disabled>Daisy</jp-tree-item>
            <jp-tree-item>Sunflower</jp-tree-item>
            <jp-tree-item>Rose</jp-tree-item>
          </jp-tree-item>
          <jp-tree-item>Nested item 2</jp-tree-item>
          <jp-tree-item>Nested item 3</jp-tree-item>
        </jp-tree-item>
        <jp-tree-item>
          Root item 3
        </jp-tree-item>
      </jp-tree-view>
    </div>
</div>
`
  );

  return node;
}

export default plugin;
