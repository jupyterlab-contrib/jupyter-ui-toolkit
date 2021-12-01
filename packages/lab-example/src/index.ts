import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

import {
  allComponents,
  provideJupyterDesignSystem
} from '@jupyter-notebook/ui-components';

import { Widget } from '@lumino/widgets';

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

    const obs = new MutationObserver(() => {
      console.log(`Dummy observer called...`);
    });
    obs.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-jp-theme-name'],
      childList: false,
      characterData: false
    });

    const widget = new Widget({ node: createNode() });
    widget.addClass('jp-Artwork');
    widget.id = 'artwork-ui-components';
    widget.title.label = 'Toolkit Gallery';
    app.restored.then(() => {
      // TODO we need to fix something upstream here
      if (theme) {
        theme.themeChanged.connect(() => {
          document.body.classList.toggle('jp-mod-theme');
        });
        document.body.classList.toggle('jp-mod-theme');
      }

      app.shell.add(widget, 'main');

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
