import { VDomModel } from '@jupyterlab/apputils';
import {
  customElement,
  FASTElement,
  html,
  Observable,
  observable
} from '@microsoft/fast-element';

/*
 * Common HTML template
 */
const template = html<ObservableView | BasicView>`<div>
  <button
    @click=${x => {
      x.model?.incrementCounter();
    }}
  >
    Increment
  </button>
  <span>${x => x.model?.counter ?? '0'}</span>
</div>`;

/*
 * VDOM model with Lumino signal
 */

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

@customElement({
  name: 'jp-test-basic-view',
  template
})
export class BasicView extends FASTElement {
  get model(): BasicModel | null {
    Observable.track(this, 'model');
    return this._model;
  }
  set model(m: BasicModel | null) {
    this._model?.stateChanged.disconnect(this._onStateChanged, this);
    this._model = m;
    this._model?.stateChanged.connect(this._onStateChanged, this);
    this._onStateChanged();
  }

  private _onStateChanged(): void {
    this.$fastController.notify('model');
  }

  private _model: BasicModel | null = null;
}

/*
 * Model - view using FAST observable
 */

export class ObservableModel {
  get counter(): number {
    return this._counter;
  }

  incrementCounter(): void {
    this._counter += 1;
  }

  @observable
  private _counter = 0;
}

@customElement({
  name: 'jp-test-observable-view',
  template
})
export class ObservableView extends FASTElement {
  public model: ObservableModel | null = null;
}
