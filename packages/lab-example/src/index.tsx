import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  Combobox,
  DataGrid,
  NumberField,
  Option,
  Progress,
  ProgressRing,
  Search,
  Select,
  Slider,
  SliderLabel,
  Tab,
  TabPanel,
  Tabs,
  TextField,
  Tooltip,
  TreeItem,
  TreeView
} from '@jupyter-notebook/react-components';
import {
  addJupyterLabThemeChangeListener,
  allComponents,
  DataGrid as WebDataGrid,
  provideJupyterDesignSystem
} from '@jupyter-notebook/web-components';
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { IThemeManager, ReactWidget } from '@jupyterlab/apputils';
import { Widget } from '@lumino/widgets';
import React from 'react';

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

    const select = widget.node.querySelector('jp-select');
    select?.addEventListener('change', changeListener('Select'));

    const combobox = widget.node.querySelector('jp-combobox');
    combobox?.addEventListener('change', changeListener('Combobox'));
    combobox?.addEventListener('input', changeConsoleListener('Combobox'));

    const slider = widget.node.querySelector('jp-slider');
    slider?.addEventListener('change', changeConsoleListener('Slider'));

    const checkbox = widget.node.querySelectorAll('jp-checkbox');
    checkbox.forEach(box => {
      box.addEventListener('change', eventListener('Checkbox', true));
    });

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
      app.shell.add(reactWidget, 'main', { mode: 'split-bottom' });
      app.shell.activateById(widget.id);

      const dataGrid: WebDataGrid | null =
        widget.node.querySelector('#basic-grid');
      if (dataGrid?.isConnected) {
        dataGrid.rowsData = TABLE_DATA;
        if (dataRef.current) {
          dataRef.current.rowsData = TABLE_DATA;
        }
      }
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
  const onChangeConsole = (event: any) => {
    console.log(`React on React change event: ${event?.target?.value}`);
  };
  const onClick = () => {
    alert('Reacting on React click event.');
  };

  return (
    <div className="jp-Grid">
      <div className="jp-FlexColumn" style={{ gridColumn: 1 }}>
        <div className="jp-FlexRow">
          <Button appearance="accent" onClick={onClick}>
            Button
          </Button>
          <Button appearance="neutral" onClick={onClick}>
            Button
          </Button>
          <Button appearance="stealth" aria-label="Confirm" onClick={onClick}>
            <span className="fa fa-cog"></span>
          </Button>
        </div>
        <Search
          value="Dummy search text"
          onChange={onChange}
          onInput={onChangeConsole}
        >
          Search Label
        </Search>
        <TextField value="Populated text" onChange={onChange}>
          Text Field Label
        </TextField>
        <NumberField value="10" onChange={onChange}>
          Number Field Label
        </NumberField>
        <div className="jp-FlexColumn">
          <label>Select</label>
          <Select onChange={onChange}>
            <Option>Option Label #1</Option>
            <Option>Option Label #2</Option>
            <Option>Option Label #3</Option>
          </Select>
        </div>
        <div className="jp-FlexColumn">
          <label>Combobox</label>
          <Combobox onChange={onChange} onInput={onChangeConsole}>
            <Option>Option Label #1</Option>
            <Option>Option Label #2</Option>
            <Option>Option Label #3</Option>
          </Combobox>
        </div>
        {/* <TextArea>Text Area Label</TextArea>
        <Link href="#">Link Text</Link> */}
      </div>
      <div className="jp-FlexColumn" style={{ gridColumn: 2 }}>
        <Slider min="0" max="100" onChange={onChangeConsole}>
          <SliderLabel position="0">0%</SliderLabel>
          <SliderLabel position="50">50%</SliderLabel>
          <SliderLabel position="100">100%</SliderLabel>
        </Slider>
        {/* <RadioGroup orientation="vertical">
          <label slot="label">Label</label>
          <Radio checked>Radio Label</Radio>
          <Radio>Radio Label</Radio>
          <Radio disabled>Radio Label</Radio>
        </RadioGroup> */}
        <div className="jp-FlexColumn">
          <label>Checkboxes</label>
          <Checkbox onChange={onEvent} checked>
            Label
          </Checkbox>
          <Checkbox onChange={onEvent}>Label</Checkbox>
          <Checkbox onChange={onEvent} disabled>
            Label
          </Checkbox>
        </div>
        {/* <div>
          <Tag>Tag</Tag>
        </div> */}
      </div>
      <div className="jp-FlexColumn" style={{ gridColumn: 3 }}>
        <Avatar shape="circle">JS</Avatar>
        <Breadcrumb>
          <BreadcrumbItem href="#">Item 1</BreadcrumbItem>
          <BreadcrumbItem href="#">Item 2</BreadcrumbItem>
          <BreadcrumbItem href="#">Item 3</BreadcrumbItem>
        </Breadcrumb>
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
            ref={(anchor: HTMLElement) => {
              setTooltipAnchor(anchor);
            }}
          >
            Anchor
          </Button>
          <Tooltip anchorElement={tooltipAnchor}>React tooltip</Tooltip>
        </div>
      </div>
      <div className="jp-FlexColumn" style={{ gridColumn: 4 }}>
        <DataGrid ref={props.dataRef}></DataGrid>

        <Tabs onChange={onEvent}>
          <Tab id="one">One</Tab>
          <Tab id="two">Two</Tab>
          <Tab id="three">Three</Tab>
          <TabPanel id="panelOne">This is panel one content.</TabPanel>
          <TabPanel id="panelTwo">This is panel two content.</TabPanel>
          <TabPanel id="panelThree">This is panel three content.</TabPanel>
        </Tabs>

        <TreeView>
          {/* @ts-expect-error unknown event onExpand */}
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
        <jp-button appearance="accent">Button</jp-button>
        <jp-button appearance="neutral">Button</jp-button>
        <jp-button appearance="stealth" aria-label="Confirm"><span class="fa fa-cog"></span></jp-button>
      </div>
      <jp-search value="Dummy search text">Search Label</jp-search>
      <jp-text-field value="Populated text">Text Field Label</jp-text-field>
      <jp-number-field value="30">Number Field Label</jp-number-field>
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
          Combobox
        </label>
        <jp-combobox>
          <jp-option>Option Label #1</jp-option>
          <jp-option>Option Label #2</jp-option>
          <jp-option>Option Label #3</jp-option>
        </jp-combobox>
      </div>
      <!-- <jp-text-area>Text Area Label</jp-text-area>
      <jp-link href="#">Link Text</jp-link> -->
    </div>
    <div class="jp-FlexColumn" style="grid-column: 2;">
      <jp-slider min="0" max="100">
        <jp-slider-label position="0">0%</jp-slider-label>
        <jp-slider-label position="50">50%</jp-slider-label>
        <jp-slider-label position="100">100%</jp-slider-label>
      </jp-slider>
      <!--
      <jp-radio-group orientation="vertical">
        <label slot="label">Label</label>
        <jp-radio checked>Radio Label</jp-radio>
        <jp-radio>Radio Label</jp-radio>
        <jp-radio disabled>Radio Label</jp-radio>
      </jp-radio-group>
      -->
      <div class="jp-FlexColumn">
        <label>Checkboxes</label>
        <jp-checkbox checked>Label</jp-checkbox>
        <jp-checkbox>Label</jp-checkbox>
        <jp-checkbox disabled>Label</jp-checkbox>
      </div>
      <!--
        <jp-badge>1</jp-badge>
        <jp-tag>Tag</jp-tag>
      -->
    </div>
    <div class="jp-FlexColumn" style="grid-column: 3;">
      <jp-avatar shape="circle">JS</jp-avatar>
      <jp-breadcrumb>
        <jp-breadcrumb-item href="#">Item 1</jp-breadcrumb-item>
        <jp-breadcrumb-item href="#">Item 2</jp-breadcrumb-item>
        <jp-breadcrumb-item href="#">Item 3</jp-breadcrumb-item>
      </jp-breadcrumb>
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
    </div>
    <div class="jp-FlexColumn" style="grid-column: 4;">
      <jp-data-grid id="basic-grid" generate-header="sticky" aria-label="With Sticky Header"></jp-data-grid>

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
