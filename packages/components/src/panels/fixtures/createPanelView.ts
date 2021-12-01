// Copyright (c) Jupyter Development Team.
// Copyright (c) Microsoft Corporation.
// Distributed under the terms of the Modified BSD License.

import { PanelView } from '../index';

export type PanelViewArgs = {
  label?: string;
  hasComplexContent?: boolean;
};

export function createPanelView({ label, hasComplexContent }: PanelViewArgs) {
  const panelView = new PanelView();

  if (label && !hasComplexContent) {
    panelView.textContent = label;
  }
  if (hasComplexContent) {
    const emojis = ['🍓', '🍎', '🍊', '🍍', '🥭', '🍋', '🍇'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    panelView.innerHTML = /*html*/ `
            <section style="display: flex; flex-direction: column; width: 100%;">
                <h1 style="margin-top: 0;">Smoothie Maker ${randomEmoji}</h1>
                <jp-checkbox>Apples</jp-checkbox>
                <jp-checkbox>Oranges</jp-checkbox>
                <jp-checkbox>Grapes</jp-checkbox>
                <jp-checkbox disabled>Blueberries</jp-checkbox>
                <jp-checkbox>Pineapple</jp-checkbox>
                <jp-checkbox>Mango</jp-checkbox>
                <jp-checkbox>Lemon</jp-checkbox>
                <jp-button style="margin-top: 1rem;">Make Smoothie!</jp-button>
            </section>
        `;
  }

  return panelView;
}
