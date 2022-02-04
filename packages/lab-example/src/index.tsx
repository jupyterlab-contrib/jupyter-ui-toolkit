import {
  Avatar,
  Button,
  Option,
  Progress,
  Search,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TextField
} from '@jupyter-notebook/react-components';
import {
  allComponents,
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

    // Add listener
    const firstButton = widget.node.querySelector('jp-button');
    if (firstButton) {
      firstButton.addEventListener('click', () => {
        alert('Reacting to vanilla click event.');
      });
    }

    const reactWidget = ReactWidget.create(<Artwork />);
    reactWidget.addClass('jp-Artwork');
    reactWidget.id = 'artwork-react-ui-components';
    reactWidget.title.label = 'React Toolkit Gallery';

    app.restored.then(() => {
      app.shell.add(widget, 'main');
      app.shell.add(reactWidget, 'main', { mode: 'split-right' });
      app.shell.activateById(widget.id);

      // (widget.node.querySelector('#basic-grid') as any).rowsData = [
      //   {
      //     Header1: 'Data 1 1',
      //     Header2: 'Data 2 1',
      //     Header3: 'Data 3 1',
      //     Header4: 'Cell Data 4 1'
      //   },
      //   {
      //     Header1: 'Data 1 2',
      //     Header2: 'Data 2 2',
      //     Header3: 'Data 3 2',
      //     Header4: 'Cell Data 4 2'
      //   },
      //   {
      //     Header1: 'Data 1 3',
      //     Header2: 'Data 2 3',
      //     Header3: 'Data 3 3',
      //     Header4: 'Cell Data 4 3'
      //   }
      // ];
    });
  }
};

function Artwork(): JSX.Element {
  const onChange = (event: any) => {
    alert(`React on React change event: ${event?.target?.value}`);
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
          <Button appearance="neutral">Button</Button>
          <Button appearance="stealth" aria-label="Confirm">
            <span className="fa fa-cog"></span>
          </Button>
        </div>
        <Search value="Dummy search text" onChange={onChange}>
          Search Label
        </Search>
        <TextField value="Populated text" onChange={onChange}>
          Text Field Label
        </TextField>
        <div className="jp-FlexColumn">
          <label>Label</label>
          <Select>
            <Option>Option Label #1</Option>
            <Option>Option Label #2</Option>
            <Option>Option Label #3</Option>
          </Select>
        </div>
        {/* <TextArea>Text Area Label</TextArea>
        <Link href="#">Link Text</Link> */}
      </div>
      <div className="jp-FlexColumn" style={{ gridColumn: 2 }}>
        <Avatar shape="circle">JS</Avatar>
        <div className="jp-FlexColumn">
          <label>Progress</label>
          <Progress></Progress>
          <Progress min={0} max={50} value={30}></Progress>
        </div>
      </div>
      <div className="jp-FlexColumn" style={{ gridColumn: 3 }}>
        <Tabs>
          <Tab id="one">One</Tab>
          <Tab id="two">Two</Tab>
          <Tab id="three">Three</Tab>
          <TabPanel id="panelOne">This is panel one content.</TabPanel>
          <TabPanel id="panelTwo">This is panel two content.</TabPanel>
          <TabPanel id="panelThree">This is panel three content.</TabPanel>
        </Tabs>
      </div>
      {/* <div className="jp-FlexColumn">
        <RadioGroup orientation="vertical">
          <label slot="label">Label</label>
          <Radio checked>Radio Label</Radio>
          <Radio>Radio Label</Radio>
          <Radio disabled>Radio Label</Radio>
        </RadioGroup>
        <div>
          <label>Label</label>
          <div className="jp-FlexColumn">
            <Checkbox autofocus checked>
              Label
            </Checkbox>
            <Checkbox checked>Label</Checkbox>
            <Checkbox disabled>Label</Checkbox>
          </div>
        </div>
        <div>
          <Tag>Tag</Tag>
        </div>
        <ProgressRing></ProgressRing>
      </div> */}
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
      <div class="jp-FlexColumn">
        <label>
          Label
        </label>
        <jp-select>
          <jp-option>Option Label #1</jp-option>
          <jp-option>Option Label #2</jp-option>
          <jp-option>Option Label #3</jp-option>
        </jp-select>
      </div>
      <!-- <jp-text-area>Text Area Label</jp-text-area>
      <jp-link href="#">Link Text</jp-link> -->
    </div>
    <!--
    <div class="jp-FlexColumn">
      <jp-radio-group orientation="vertical">
        <label slot="label">Label</label>
        <jp-radio checked>Radio Label</jp-radio>
        <jp-radio>Radio Label</jp-radio>
        <jp-radio disabled>Radio Label</jp-radio>
      </jp-radio-group>
      <div>
        <label>Label</label>
        <div class="jp-FlexColumn">
          <jp-checkbox autofocus checked>Label</jp-checkbox>
          <jp-checkbox checked>Label</jp-checkbox>
          <jp-checkbox disabled>Label</jp-checkbox>
        </div>
      </div>
      <div>
        <jp-badge>1</jp-badge>
        <jp-tag>Tag</jp-tag>
      </div>
      <jp-progress-ring></jp-progress-ring>
    </div>
    -->
    <div class="jp-FlexColumn" style="grid-column: 2;">
      <jp-avatar shape="circle">JS</jp-avatar>
      <div class="jp-FlexColumn">
        <label>Progress</label>
        <jp-progress></jp-progress>
        <jp-progress min="0" max="50" value="30"></jp-progress>
      </div>
    </div>
    <div class="jp-FlexColumn" style="grid-column: 3;">
      <!--
      <div>
        <jp-data-grid id="basic-grid" generate-header="sticky" aria-label="With Sticky Header"></jp-data-grid>
      </div>
      -->
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
    </div>
</div>

`
  );

  return node;
}

export default plugin;
