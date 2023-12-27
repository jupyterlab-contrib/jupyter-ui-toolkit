import type {
  ListboxOption as JpOption,
  Select as JpSelectType
} from '@microsoft/fast-foundation';
import { ArrowKeys } from '@microsoft/fast-web-utilities';
import test, { expect } from '@playwright/test';

type JpSelect = HTMLElement & JpSelectType;

test.describe('JpSelect', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => {
      const element = document.createElement('jp-select') as JpSelect;

      for (let i = 1; i <= 3; i++) {
        const option = document.createElement('jp-option') as JpOption;
        option.value = `${i}`;
        option.textContent = `option ${i}`;
        element.appendChild(option);
      }

      document.body.appendChild(element);
    });
  });

  // jpSelect should render on the page
  test('should render on the page', async ({ page }) => {
    await expect(page.locator('jp-select')).toHaveCount(1);
  });

  // jpSelect should have a value of 'one'
  test("should have a value of 'one'", async ({ page }) => {
    expect(await page.locator('jp-select').inputValue()).toEqual('1');
  });

  // jpSelect should have a text content of 'option 1'
  test("should have a text content of 'option 1'", async ({ page }) => {
    await expect(page.locator('jp-select .selected-value')).toHaveText(
      'option 1'
    );
  });

  // jpSelect should open when focused and receives keyboard interaction
  test.describe('should open when focused and receives keyboard interaction', () => {
    // jpSelect should open when focused and receives keyboard interaction via space key
    test('via Space key', async ({ page }) => {
      const element = page.locator('jp-select');

      expect(
        await element.evaluate<boolean, JpSelect>(node => node.open)
      ).toEqual(false);

      await element.focus();

      await page.keyboard.press(' ');

      expect(
        await element.evaluate<boolean, JpSelect>(node => node.open)
      ).toEqual(true);

      await page.keyboard.press(' ');

      expect(
        await element.evaluate<boolean, JpSelect>(node => node.open)
      ).toEqual(false);
    });

    // jpSelect should open when focused and receives keyboard interaction via enter key
    test('via Enter key', async ({ page }) => {
      const element = page.locator('jp-select');

      expect(
        await element.evaluate<boolean, JpSelect>(node => node.open)
      ).toEqual(false);

      await element.focus();

      await element.press('Enter');

      expect(
        await element.evaluate<boolean, JpSelect>(node => node.open)
      ).toEqual(true);

      await element.press('Enter');

      expect(
        await element.evaluate<boolean, JpSelect>(node => node.open)
      ).toEqual(false);
    });
  });

  // jpSelect should close
  test.describe('should close', () => {
    // FASTSelect should close when focused and keyboard interaction is received
    test.describe('when focused and keyboard interaction is received', () => {
      // FASTSelect should close when focused and keyboard interaction is received via space key
      test('via Space key', async ({ page }) => {
        const element = page.locator('jp-select');

        await element.press(' ');

        expect(
          await element.evaluate<boolean, JpSelect>(node => node.open)
        ).toEqual(true);

        await element.press(' ');

        expect(
          await element.evaluate<boolean, JpSelect>(node => node.open)
        ).toEqual(false);
      });

      // FASTSelect should close when focused and keyboard interaction is received via enter key
      test('via Enter key', async ({ page }) => {
        const element = page.locator('jp-select');

        await element.press('Enter');

        expect(
          await element.evaluate<boolean, JpSelect>(node => node.open)
        ).toEqual(true);

        await element.press('Enter');

        expect(
          await element.evaluate<boolean, JpSelect>(node => node.open)
        ).toEqual(false);
      });

      // FASTSelect should close when focused and keyboard interaction is received via escape key
      test('via Escape key', async ({ page }) => {
        const element = page.locator('jp-select');

        await element.click();

        expect(
          await element.evaluate<boolean, JpSelect>(node => node.open)
        ).toEqual(true);

        await page.keyboard.press('Escape');

        expect(
          await element.evaluate<boolean, JpSelect>(node => node.open)
        ).toEqual(false);
      });

      // FASTSelect should close when focused and keyboard interaction is received via tab key
      test('via Tab key', async ({ page }) => {
        const element = page.locator('jp-select');

        await element.click();

        expect(
          await element.evaluate<boolean, JpSelect>(node => node.open)
        ).toEqual(true);

        await element.press('Tab');

        expect(
          await element.evaluate<boolean, JpSelect>(node => node.open)
        ).toEqual(false);
      });
    });

    test.describe('when focus is lost', () => {
      test('via click', async ({ page }) => {
        const element = page.locator('jp-select');

        await element.click();

        expect(
          await element.evaluate<boolean, JpSelect>(node => node.open)
        ).toEqual(true);

        await page.click('body');

        expect(
          await element.evaluate<boolean, JpSelect>(
            element => element === document.activeElement
          )
        ).toEqual(false);

        expect(
          await element.evaluate<boolean, JpSelect>(node => node.open)
        ).toEqual(false);
      });
    });
  });

  test.describe('should emit an event when focused and receives keyboard interaction', () => {
    test.describe('while closed', () => {
      for (const direction of Object.values(ArrowKeys)) {
        test.describe(`via ${direction} key`, () => {
          for (const eventName of ['change', 'input']) {
            test(`of type '${eventName}'`, async ({ page }) => {
              const element = page.locator('jp-select');

              await page.exposeFunction('sendEvent', (type: string) =>
                expect(type).toEqual(eventName)
              );

              await element.evaluate((node, eventName) => {
                node.addEventListener(
                  eventName,
                  // @ts-expect-error no index
                  async e => await window['sendEvent'](e.type)
                );
              }, eventName);

              await element.press(direction);
            });
          }
        });
      }
    });
  });

  test.describe('should change the value when focused and receives keyboard interaction', () => {
    test('via arrow down key', async ({ page }) => {
      const element = page.locator('jp-select');

      expect(
        await element.evaluate<string, JpSelect>(node => node.value)
      ).toEqual('1');

      await element.press('ArrowDown');

      expect(
        await element.evaluate<string, JpSelect>(node => node.value)
      ).toEqual('2');
    });

    test('via arrow up key', async ({ page }) => {
      const element = page.locator('jp-select');

      await element.evaluate<string, JpSelect>(node => (node.value = '2'));

      expect(
        await element.evaluate<string, JpSelect>(node => node.value)
      ).toEqual('2');

      await element.press('ArrowUp');

      expect(
        await element.evaluate<string, JpSelect>(node => node.value)
      ).toEqual('1');
    });

    test('via home key', async ({ page }) => {
      const element = page.locator('jp-select');

      await element.evaluate<string, JpSelect>(node => (node.value = '3'));

      expect(
        await element.evaluate<string, JpSelect>(node => node.value)
      ).toEqual('3');

      await element.press('Home');

      expect(
        await element.evaluate<string, JpSelect>(node => node.value)
      ).toEqual('1');
    });

    test('via end key', async ({ page }) => {
      const element = page.locator('jp-select');

      expect(
        await element.evaluate<string, JpSelect>(node => node.value)
      ).toEqual('1');

      await element.press('End');

      expect(
        await element.evaluate<string, JpSelect>(node => node.value)
      ).toEqual('3');
    });
  });

  test.describe('when opened', () => {
    test('should scroll the selected option into view', async ({ page }) => {
      const element = page.locator('jp-select');

      await element.evaluate<void, JpSelect>(element => {
        element.innerHTML = '';
        for (let i = 0; i < 50; i++) {
          const option = document.createElement('jp-option') as JpOption;
          option.value = `${i}`;
          option.textContent = `option ${i}`;
          element.appendChild(option);
        }
      });

      const selectedOption = element.locator('.listbox');

      await element.evaluate<number, JpSelect>(
        node => (node.selectedIndex = 35)
      );

      expect(
        await element.evaluate<string, JpSelect>(
          node => node.firstSelectedOption.value
        )
      ).toEqual('35');

      await element.click();

      await selectedOption.waitFor();

      expect(
        await selectedOption.evaluate<number, JpOption>(node => node.scrollTop)
      ).toEqual(451);

      await element.evaluate<number, JpSelect>(
        node => (node.selectedIndex = 0)
      );

      await element.waitFor();

      expect(
        await selectedOption.evaluate<number, JpOption>(node => node.scrollTop)
      ).toEqual(6);
    });
  });
});
