import {
  Button,
  Checkbox,
  Dropdown,
  Link,
  Option,
  ProgressRing,
  Radio,
  RadioGroup,
  Tag,
  TextArea,
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
  activate: (app: JupyterFrontEnd, theme: IThemeManager | null) => {
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

      (widget.node.querySelector('#basic-grid') as any).rowsData = [
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
    });
  }
};

function Artwork(): JSX.Element {
  const onClick = () => {
    alert('Reacting on React click event.');
  };
  return (
    <div className="jp-FlexRow">
      <div className="jp-FlexColumn">
        <div className="jp-FlexRow">
          <Button appearance="primary" onClick={onClick}>
            Button
          </Button>
          <Button appearance="secondary">Button</Button>
          <Button appearance="icon" aria-label="Confirm">
            <span className="fa fa-cog"></span>
          </Button>
        </div>
        <TextField value="Populated text">Text Field Label</TextField>
        <div className="jp-FlexColumn">
          <label>Label</label>
          <Dropdown>
            <Option>Option Label #1</Option>
            <Option>Option Label #2</Option>
            <Option>Option Label #3</Option>
          </Dropdown>
        </div>
        <TextArea>Text Area Label</TextArea>
        <Link href="#">Link Text</Link>
      </div>
      <div className="jp-FlexColumn">
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
      </div>
    </div>
  );
}

function createNode(): HTMLElement {
  const node = document.createElement('div');
  node.insertAdjacentHTML(
    'afterbegin',
    `
<div class="jp-FlexRow">
    <div class="jp-FlexColumn">
      <div class="jp-FlexRow">
        <jp-button appearance="primary">Button</jp-button>
        <jp-button appearance="secondary">Button</jp-button>
        <jp-button appearance="icon" aria-label="Confirm"><span class="fa fa-cog"></span></jp-button>
      </div>
      <jp-text-field value="Populated text">Text Field Label</jp-text-field>
      <div class="jp-FlexColumn">
        <label>
          Label
        </label>
        <jp-dropdown>
          <jp-option>Option Label #1</jp-option>
          <jp-option>Option Label #2</jp-option>
          <jp-option>Option Label #3</jp-option>
        </jp-dropdown>
      </div>
      <jp-text-area>Text Area Label</jp-text-area>
      <jp-link href="#">Link Text</jp-link>
    </div>
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
    <div class="jp-FlexColumn">
      <div>
        <jp-data-grid id="basic-grid" generate-header="sticky" aria-label="With Sticky Header"></jp-data-grid>
      </div>
      <jp-panels aria-label="Default">
        <jp-panel-tab id="tab-1">Tab 1</jp-panel-tab>
        <jp-panel-tab id="tab-2">Tab 2</jp-panel-tab>
        <jp-panel-tab id="tab-3">Tab 3</jp-panel-tab>
        <jp-panel-tab id="tab-4">Tab 4</jp-panel-tab>
        <jp-panel-view id="view-1">
          Tab 1 Content
        </jp-panel-view>
        <jp-panel-view id="view-2">
          Tab 2 Content
        </jp-panel-view>
        <jp-panel-view id="view-3">
          Tab 3 Content
        </jp-panel-view>
        <jp-panel-view id="view-4">
          Tab 4 Content
        </jp-panel-view>
      </jp-panels>
    </div>
</div>

`
  );

  return node;
}

export default plugin;
