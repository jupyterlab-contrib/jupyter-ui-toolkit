import { VDomModel } from '@jupyterlab/apputils';
import { Widget } from '@lumino/widgets';
import {
  customElement,
  FASTElement,
  html,
  Observable,
  observable
} from '@microsoft/fast-element';

export class BasicModel extends VDomModel {
  get counter(): number {
    return this._counter;
  }

  incrementCounter(): void {
    this._counter += 1;
    this.stateChanged.emit();
  }
  private _counter = 0;
}

const template = html<ObservableView>`<div>
  <button
    @click=${x => {
      x.model?.incrementCounter();
    }}
  >
    Increment
  </button>
  <span>${x => x.model?.counter ?? '0'}</span>
</div>`;

@customElement({
  name: 'jp-test-observable-view',
  template
})
export class ObservableView extends FASTElement {
  public model: ObservableModel | BasicModel | null = null;
}

@customElement({
  name: 'jp-test-view-wrapper',
  template: html`<jp-test-observable-view
    :model=${x => x.model}
  ></jp-test-observable-view>`
})
export class ViewWrapper extends FASTElement {
  @observable model: BasicModel | null = null;
  modelChanged(prev: BasicModel | null, next: BasicModel | null): void {
    prev?.stateChanged.disconnect(this.update, this);
    next?.stateChanged.connect(this.update, this);
  }

  disconnectedCallback(): void {
    this.model?.stateChanged.disconnect(this.update, this);
  }

  update(): void {
    Observable.notify(this, 'model');
  }
}

export class BasicView extends Widget {
  /**
   * Create a new VDomRenderer
   */
  constructor(model: BasicModel) {
    const node = new ViewWrapper();
    node.model = model;
    super({ node });
  }
}

/*
 * Model - view using FAST observable
 */

export class ObservableModel extends VDomModel {
  get counter(): number {
    return this._counter;
  }

  incrementCounter(): void {
    this._counter += 1;
    this.stateChanged.emit();
  }

  @observable
  private _counter = 0;
}
