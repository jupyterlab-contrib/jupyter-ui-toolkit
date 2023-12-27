// FIXME
test('temporary test', () => {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  expect(sum(1, 2)).toBe(3);
});

/* TODO FIXME
    jupyter-ui-toolkit/node_modules/@microsoft/fast-element/dist/esm/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){export * from "./platform";

    SyntaxError: Unexpected token 'export'

import { DOM } from '@microsoft/fast-element';
import { fixture } from '@microsoft/fast-foundation/dist/esm/test-utilities/fixture';
import { DateField, dateFieldTemplate as template } from './index.js';

const JPDateField = DateField.compose({
  baseName: 'date-field',
  template
});

async function setup(props?: any) {
  const { element, connect, disconnect, parent } = await fixture(JPDateField());

  if (props) {
    for (const key in props) {
      element[key] = props[key].toString();
    }
  }

  await connect();

  return { element, connect, disconnect, parent };
}

describe('DateField', () => {
  it('should set the `autofocus` attribute on the internal control equal to the value provided', async () => {
    const { element, disconnect } = await setup({ autofocus: true });

    expect(
      element.shadowRoot?.querySelector('.control')?.hasAttribute('autofocus')
    ).toEqual(true);

    await disconnect();
  });

  it('should set the `disabled` attribute on the internal control equal to the value provided', async () => {
    const { element, disconnect } = await setup({ disabled: true });

    expect(
      element.shadowRoot?.querySelector('.control')?.hasAttribute('disabled')
    ).toEqual(true);

    await disconnect();
  });

  it('should set the `list` attribute on the internal control equal to the value provided', async () => {
    const list = 'listId';
    const { element, disconnect } = await setup({ list });

    expect(
      element.shadowRoot?.querySelector('.control')?.getAttribute('list')
    ).toEqual(list);

    await disconnect();
  });

  it('should set the `readonly` attribute on the internal control equal to the value provided', async () => {
    const { element, disconnect } = await setup({ readOnly: true });

    expect(
      element.shadowRoot?.querySelector('.control')?.hasAttribute('readonly')
    ).toEqual(true);

    await disconnect();
  });

  it('should set the `required` attribute on the internal control equal to the value provided', async () => {
    const { element, disconnect } = await setup({ required: true });

    expect(
      element.shadowRoot?.querySelector('.control')?.hasAttribute('required')
    ).toEqual(true);

    await disconnect();
  });

  it('should initialize to the initial value if no value property is set', async () => {
    const { element, disconnect } = await setup();

    expect(element.value).toEqual(element['initialValue']);

    await disconnect();
  });

  it('should initialize to the provided value attribute if set pre-connection', async () => {
    const value = '2022-10-08';
    const { element, disconnect } = await setup({ value });

    expect(element.value).toEqual(value);

    await disconnect();
  });

  it('should initialize to the provided value attribute if set post-connection', async () => {
    const value = '2022-10-08';
    const { element, disconnect } = await setup();

    element.setAttribute('value', value);

    expect(element.value).toEqual(value);

    await disconnect();
  });

  it('should initialize to the provided value property if set pre-connection', async () => {
    const value = '2022-10-08';
    const { element, disconnect } = await setup({ value });

    expect(element.value).toEqual(value);

    await disconnect();
  });

  describe('Delegates ARIA textbox', () => {
    it('should set the `aria-atomic` attribute on the internal control when provided', async () => {
      const ariaAtomic = 'true';
      const { element, disconnect } = await setup({ ariaAtomic });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-atomic')
      ).toEqual(ariaAtomic);

      await disconnect();
    });

    it('should set the `aria-busy` attribute on the internal control when provided', async () => {
      const ariaBusy = 'false';
      const { element, disconnect } = await setup({ ariaBusy });

      expect(
        element.shadowRoot?.querySelector('.control')?.getAttribute('aria-busy')
      ).toEqual(ariaBusy);

      await disconnect();
    });

    it('should set the `aria-controls` attribute on the internal control when provided', async () => {
      const ariaControls = 'testId';
      const { element, disconnect } = await setup({ ariaControls });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-controls')
      ).toEqual(ariaControls);

      await disconnect();
    });

    it('should set the `aria-current` attribute on the internal control when provided', async () => {
      const ariaCurrent = 'page';
      const { element, disconnect } = await setup({ ariaCurrent });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-current')
      ).toEqual(ariaCurrent);

      await disconnect();
    });

    it('should set the `aria-describedby` attribute on the internal control when provided', async () => {
      const ariaDescribedby = 'testId';
      const { element, disconnect } = await setup({ ariaDescribedby });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-describedby')
      ).toEqual(ariaDescribedby);

      await disconnect();
    });

    it('should set the `aria-details` attribute on the internal control when provided', async () => {
      const ariaDetails = 'testId';
      const { element, disconnect } = await setup({ ariaDetails });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-details')
      ).toEqual(ariaDetails);

      await disconnect();
    });

    it('should set the `aria-disabled` attribute on the internal control when provided', async () => {
      const ariaDisabled = 'true';
      const { element, disconnect } = await setup({ ariaDisabled });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-disabled')
      ).toEqual(ariaDisabled);

      await disconnect();
    });

    it('should set the `aria-errormessage` attribute on the internal control when provided', async () => {
      const ariaErrormessage = 'test';
      const { element, disconnect } = await setup({ ariaErrormessage });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-errormessage')
      ).toEqual(ariaErrormessage);

      await disconnect();
    });

    it('should set the `aria-flowto` attribute on the internal control when provided', async () => {
      const ariaFlowto = 'testId';
      const { element, disconnect } = await setup({ ariaFlowto });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-flowto')
      ).toEqual(ariaFlowto);

      await disconnect();
    });

    it('should set the `aria-haspopup` attribute on the internal control when provided', async () => {
      const ariaHaspopup = 'true';
      const { element, disconnect } = await setup({ ariaHaspopup });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-haspopup')
      ).toEqual(ariaHaspopup);

      await disconnect();
    });

    it('should set the `aria-hidden` attribute on the internal control when provided', async () => {
      const ariaHidden = 'true';
      const { element, disconnect } = await setup({ ariaHidden });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-hidden')
      ).toEqual(ariaHidden);

      await disconnect();
    });

    it('should set the `aria-invalid` attribute on the internal control when provided', async () => {
      const ariaInvalid = 'spelling';
      const { element, disconnect } = await setup({ ariaInvalid });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-invalid')
      ).toEqual(ariaInvalid);

      await disconnect();
    });

    it('should set the `aria-keyshortcuts` attribute on the internal control when provided', async () => {
      const ariaKeyshortcuts = 'F4';
      const { element, disconnect } = await setup({ ariaKeyshortcuts });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-keyshortcuts')
      ).toEqual(ariaKeyshortcuts);

      await disconnect();
    });

    it('should set the `aria-label` attribute on the internal control when provided', async () => {
      const ariaLabel = 'Foo label';
      const { element, disconnect } = await setup({ ariaLabel });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-label')
      ).toEqual(ariaLabel);

      await disconnect();
    });

    it('should set the `aria-labelledby` attribute on the internal control when provided', async () => {
      const ariaLabelledby = 'testId';
      const { element, disconnect } = await setup({ ariaLabelledby });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-labelledby')
      ).toEqual(ariaLabelledby);

      await disconnect();
    });

    it('should set the `aria-live` attribute on the internal control when provided', async () => {
      const ariaLive = 'polite';
      const { element, disconnect } = await setup({ ariaLive });

      expect(
        element.shadowRoot?.querySelector('.control')?.getAttribute('aria-live')
      ).toEqual(ariaLive);

      await disconnect();
    });

    it('should set the `aria-owns` attribute on the internal control when provided', async () => {
      const ariaOwns = 'testId';
      const { element, disconnect } = await setup({ ariaOwns });

      expect(
        element.shadowRoot?.querySelector('.control')?.getAttribute('aria-owns')
      ).toEqual(ariaOwns);

      await disconnect();
    });

    it('should set the `aria-relevant` attribute on the internal control when provided', async () => {
      const ariaRelevant = 'removals';
      const { element, disconnect } = await setup({ ariaRelevant });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-relevant')
      ).toEqual(ariaRelevant);

      await disconnect();
    });

    it('should set the `aria-roledescription` attribute on the internal control when provided', async () => {
      const ariaRoledescription = 'slide';
      const { element, disconnect } = await setup({ ariaRoledescription });

      expect(
        element.shadowRoot
          ?.querySelector('.control')
          ?.getAttribute('aria-roledescription')
      ).toEqual(ariaRoledescription);

      await disconnect();
    });
  });

  describe('events', () => {
    it('should fire a change event when the internal control emits a change event', async () => {
      const { element, disconnect } = await setup();
      const event = new Event('change', {
        key: '1'
      } as KeyboardEventInit);
      let wasChanged = false;

      element.addEventListener('change', (e: Event) => {
        e.preventDefault();

        wasChanged = true;
      });

      const input = element.shadowRoot?.querySelector('input');
      input?.dispatchEvent(event);

      expect(wasChanged).toEqual(true);

      await disconnect();
    });

    it('should fire an input event when incrementing or decrementing', async () => {
      const { element, disconnect } = await setup();
      let wasInput = false;

      element.addEventListener('input', (e: Event) => {
        e.preventDefault();

        wasInput = true;
      });

      element.stepUp();

      expect(wasInput).toEqual(true);

      wasInput = false;

      element.stepDown();

      expect(wasInput).toEqual(true);

      await disconnect();
    });
  });

  describe("when the owning form's reset() method is invoked", () => {
    it("should reset it's value property to an empty string if no value attribute is set", async () => {
      const { element, disconnect, parent } = await setup();

      const form = document.createElement('form');
      form.appendChild(element);
      parent.appendChild(form);

      const value = '2022-10-22';
      element.value = value;
      expect(element.value).toEqual(value);

      form.reset();

      expect(element.value).toEqual('');

      await disconnect();
    });

    it("should reset it's value property to the value of the value attribute if it is set", async () => {
      const { element, disconnect, parent } = await setup();

      const form = document.createElement('form');
      form.appendChild(element);
      parent.appendChild(form);

      element.setAttribute('value', '2022-10-22');

      element.value = '2022-10-05';
      expect(element.getAttribute('value')).toEqual('2022-10-22');
      expect(element.value).toEqual('2022-10-05');

      form.reset();
      expect(element.value).toEqual('2022-10-22');

      await disconnect();
    });

    it('should update input field when script sets value', async () => {
      const { element, disconnect } = await setup();
      const value = '2022-10-22';

      expect(
        (element.shadowRoot?.querySelector('.control') as HTMLInputElement)
          .value
      ).toBeUndefined();

      element.setAttribute('value', value);

      await DOM.nextUpdate();

      expect(
        (element.shadowRoot?.querySelector('.control') as HTMLInputElement)
          .value
      ).toEqual(value);

      await disconnect();
    });

    it('should put the control into a clean state, where value attribute changes the property value prior to user or programmatic interaction', async () => {
      const { element, disconnect, parent } = await setup();
      const form = document.createElement('form');
      form.appendChild(element);
      parent.appendChild(form);
      element.setAttribute('value', '2022-10-22');

      element.value = '2022-10-05';
      expect(element.value).toEqual('2022-10-05');

      form.reset();

      expect(element.value).toEqual('2022-10-22');

      element.setAttribute('value', '2022-02-22');
      expect(element.value).toEqual('2022-02-22');

      await disconnect();
    });
  });

  describe('min and max values', () => {
    it('should set min value', async () => {
      const min = '2020-10-22';
      const { element, disconnect } = await setup({ min });

      expect(
        element.shadowRoot?.querySelector('.control')?.getAttribute('min')
      ).toEqual(min);

      await disconnect();
    });

    it('should set max value', async () => {
      const max = '2025-10-22';
      const { element, disconnect } = await setup({ max });

      expect(
        element.shadowRoot?.querySelector('.control')?.getAttribute('max')
      ).toEqual(max);

      await disconnect();
    });

    it('should set value to max when value is greater than max', async () => {
      const max = '2022-10-22';
      const value = '2023-10-22';
      const { element, disconnect } = await setup({ value, max });

      expect(element.value).toEqual(max);

      await disconnect();
    });

    it('should set value to max if the max changes to a value less than the value', async () => {
      const max = '2022-10-22';
      const value = '2023-10-22';
      const { element, disconnect } = await setup({ value });

      expect(element.value).toEqual(value);

      element.setAttribute('max', max);
      await DOM.nextUpdate();

      expect(element.value).toEqual(max);

      await disconnect();
    });

    it('should set value to min when value is less than min', async () => {
      const min = '2022-10-22';
      const value = '2022-03-22';
      const { element, disconnect } = await setup({ value, min });

      expect(element.value).toEqual(min);

      element.value = '2022-10-19';
      await DOM.nextUpdate();

      expect(element.value).toEqual(min);
      await disconnect();
    });

    it('should set value to min if the min changes to a value more than the value', async () => {
      const min = '2022-10-22';
      const value = '2022-10-12';
      const { element, disconnect } = await setup({ value });

      expect(element.value).toEqual(value);

      element.setAttribute('min', min);
      await DOM.nextUpdate();

      expect(element.value).toEqual(min);

      await disconnect();
    });

    it('should set max to highest when min is greater than max', async () => {
      const min = '2022-10-22';
      const max = '2022-05-22';
      const { element, disconnect } = await setup({ min, max });

      expect(
        element.shadowRoot?.querySelector('.control')?.getAttribute('max')
      ).toEqual(min);

      await disconnect();
    });
  });

  describe('step and increment/decrement', () => {
    it('should set step to a default of 1', async () => {
      const { element, disconnect } = await setup();

      expect(
        element.shadowRoot?.querySelector('.control')?.getAttribute('step')
      ).toEqual('1');

      await disconnect();
    });

    it('should update step', async () => {
      const step = 2;
      const { element, disconnect } = await setup({ step });

      expect(
        element.shadowRoot?.querySelector('.control')?.getAttribute('step')
      ).toEqual(step.toString());

      await disconnect();
    });

    it('should increment the value by the step amount', async () => {
      const step = 2;
      const value = '2022-10-22';
      const { element, disconnect } = await setup({ step, value });

      element.stepUp();

      expect(element.value).toEqual('2022-10-24');

      await disconnect();
    });

    it('should decrement the value by the step amount', async () => {
      const step = 2;
      const value = '2022-10-22';
      const { element, disconnect } = await setup({ step, value });

      element.stepDown();

      expect(element.value).toEqual('2022-10-20');

      await disconnect();
    });

    it('should increment no value to the first valid date', async () => {
      const step = 2;
      const { element, disconnect } = await setup({ step });

      element.stepUp();

      expect(element.value).toEqual('1970-01-01');

      await disconnect();
    });

    it('should decrement no value to the first valid date', async () => {
      const step = 2;
      const { element, disconnect } = await setup({ step });

      element.stepDown();
      await DOM.nextUpdate();

      expect(element.value).toEqual('1970-01-01');

      await disconnect();
    });

    it('should update the proxy value when incrementing the value', async () => {
      const step = 2;
      const value = '2022-10-30';
      const { element, disconnect } = await setup({ step, value });

      element.stepUp();

      expect(element.value).toEqual('2022-11-01');
      expect(element.proxy.value).toEqual('2022-11-01');

      await disconnect();
    });

    it('should update the proxy value when decrementing the value', async () => {
      const step = 2;
      const value = '2022-10-01';
      const { element, disconnect } = await setup({ step, value });

      element.stepDown();

      expect(element.value).toEqual('2022-09-29');
      expect(element.proxy.value).toEqual('2022-09-29');

      await disconnect();
    });
  });

  describe('value validation', () => {
    it('should allow date entry', async () => {
      const value = '2022-10-22';
      const { element, disconnect } = await setup();

      element.setAttribute('value', value);

      expect(element.value).toEqual(value);

      await disconnect();
    });

    it('should not allow non-number entry', async () => {
      const { element, disconnect } = await setup();

      element.setAttribute('value', 'hello');
      expect(element.value).toEqual(null);

      await disconnect();
    });
  });

  describe('readonly', () => {
    it('should not render step controls when `readonly` attribute is present', async () => {
      const { element, disconnect } = await setup();

      expect(element.shadowRoot?.querySelector('.controls')).not.toEqual(null);

      element.setAttribute('readonly', '');

      await DOM.nextUpdate();

      expect(element.shadowRoot?.querySelector('.controls')).toEqual(null);

      await disconnect();
    });
  });

  describe('valueAsNumber', () => {
    it('should allow setting value with number', async () => {
      const { element, disconnect } = await setup();

      element.valueAsNumber = 1666396800000;

      expect(element.value).toEqual('2022-10-22');

      await disconnect();
    });

    it('should allow reading value as number', async () => {
      const { element, disconnect } = await setup();

      element.value = '2022-10-22';

      expect(element.valueAsNumber).toEqual(1666396800000);

      await disconnect();
    });
  });

  describe('valueAsDate', () => {
    // TODO
    it.skip('should allow setting value with date', async () => {
      const { element, disconnect } = await setup();

      element.valueAsDate = new Date('2022-10-22');

      expect(element.value).toEqual('2022-10-22');

      await disconnect();
    });

    it.skip('should allow reading value as date', async () => {
      const { element, disconnect } = await setup();

      element.value = '2022-10-22';

      expect(element.valueAsDate).toEqual(new Date('2022-10-22'));

      await disconnect();
    });
  });
});

*/
