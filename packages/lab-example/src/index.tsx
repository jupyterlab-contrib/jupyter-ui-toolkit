import { Button } from '@jupyter-notebook/react-components';
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
          <Button appearance="accent" onClick={onClick}>
            Button
          </Button>
          <Button appearance="neutral">Button</Button>
          <Button>
            <i className="fas fa-cog"></i>
          </Button>
        </div>
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
        <jp-button appearance="accent">Button</jp-button>
        <jp-button appearance="neutral">Button</jp-button>
        <jp-button><i class="fas fa-cog"></i></jp-button>
      </div>
    </div>
</div>

`
  );

  return node;
}

export default plugin;
