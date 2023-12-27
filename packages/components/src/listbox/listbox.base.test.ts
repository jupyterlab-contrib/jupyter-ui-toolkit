// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import type {
  ListboxElement as FASTListboxType,
  ListboxOption as FASTOption
} from '@microsoft/fast-foundation';
import test, { expect } from '@playwright/test';

type jpListbox = HTMLElement & FASTListboxType;

test.describe('jpListbox', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=components-listbox--default');
    await page.locator('body.sb-show-main').waitFor();
    await page.evaluate(() => {
      document.body.innerHTML = '';
      const element = document.createElement('jp-listbox') as jpListbox;

      for (let i = 1; i <= 3; i++) {
        const option = document.createElement('jp-option') as FASTOption;
        option.value = `${i}`;
        option.textContent = `option ${i}`;
        element.appendChild(option);
      }

      document.body.appendChild(element);
    });
  });

  // jpListbox should render on the page
  test('should render on the page', async ({ page }) => {
    const element = page.locator('jp-listbox');

    await expect(element).toHaveCount(1);
  });

  test.describe('should change the `selectedIndex` when focused and receives keyboard interaction', () => {
    test('via arrow down key', async ({ page }) => {
      const element = page.locator('jp-listbox');
      element.waitFor();

      expect(
        await element.evaluate<number, jpListbox>(node => node.selectedIndex)
      ).toEqual(-1);

      await element.press('ArrowDown');

      expect(
        await element.evaluate<number, jpListbox>(node => node.selectedIndex)
      ).toEqual(0);
    });

    test('via arrow up key', async ({ page }) => {
      const element = page.locator('jp-listbox');
      element.waitFor();

      await element.evaluate<number, jpListbox>(
        node => (node.selectedIndex = 1)
      );

      expect(
        await element.evaluate<number, jpListbox>(node => node.selectedIndex)
      ).toEqual(1);

      await element.press('ArrowUp');

      expect(
        await element.evaluate<number, jpListbox>(node => node.selectedIndex)
      ).toEqual(0);
    });

    test('via home key', async ({ page }) => {
      const element = page.locator('jp-listbox');
      element.waitFor();

      await element.evaluate<number, jpListbox>(
        node => (node.selectedIndex = 2)
      );

      expect(
        await element.evaluate<number, jpListbox>(node => node.selectedIndex)
      ).toEqual(2);

      await element.press('Home');

      expect(
        await element.evaluate<number, jpListbox>(node => node.selectedIndex)
      ).toEqual(0);
    });

    test('via end key', async ({ page }) => {
      const element = page.locator('jp-listbox');
      element.waitFor();

      expect(
        await element.evaluate<number, jpListbox>(node => node.selectedIndex)
      ).toEqual(-1);

      await element.press('End');

      expect(
        await element.evaluate<number, jpListbox>(node => node.selectedIndex)
      ).toEqual(2);
    });
  });
});
