# Jupyter Panels

The `jp-panels` component is a web component implementation of a [tab](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role). The component is created using three components that work together to interchangably display different content:

- `<jp-panels>`: The top level container element.
- `<jp-panel-tab>`: Renders the panel tab that will be associated with a panel view.
- `<jp-panel-view>`: The container element that will hold content associated with a given tab.

## Panels Attributes

| Attribute  | Type   | Description                     |
| ---------- | ------ | ------------------------------- |
| `activeid` | string | The id of the active panel tab. |

## Panel Tab Attributes

None

## Panel View Attributes

None

## Usage

**❗️❗️❗️ Important ❗️❗️❗️**

An aria-label of "Panels" is automatically defined on all panels components so they are technically accessible out of the box. However, a descriptive and meaningful label that fits the use case or context of the panels component should always be defined to replace the default label so those viewing your panels component with a screen reader can better understand the meaning of what's being displayed.

For example, if you're using a panels component to display photos of puppies and kittens, adding an aria-label with the value "Puppy and Kitten Photos" would be appropriate.

**A Note About Panel Views**

Panel view components are rendered as a CSS [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) with default values––they will automatically flow any content contained within them horizontally starting from the left side of the container.

This behavior can be overridden, however, by adding custom styles to all `<jp-panel-view>` components or individual components. Below are a couple of examples for common overrides that may be desired.

To completely opt out of `<jp-panel-view>` components rendering as flexbox containers:

```css
jp-panel-view {
  display: block;
}
```

To make the content flow vertically:

```css
jp-panel-view {
  flex-direction: column;
}
```

To center the content within the container:

```css
jp-panel-view {
  justify-content: center;
  align-items: center;
}
```

To apply styling to one `<jp-panel-view>` component:

```html
<jp-panels>
  ...panel tabs...
  <jp-panel-view id="view-1">Problems content.</jp-panel-view>
  <jp-panel-view id="view-2">Output content.</jp-panel-view>
  <jp-panel-view id="view-3">Debug content.</jp-panel-view>
  <jp-panel-view id="view-4">Terminal content.</jp-panel-view>
</jp-panels>
```

```css
#view-1 {
  justify-content: center;
  align-items: center;
}
```

To apply styling to multiple `<jp-panel-view>` components (but not all):

```html
<jp-panels>
  ...panel tabs...
  <jp-panel-view id="view-1"> Problems content. </jp-panel-view>
  <jp-panel-view id="view-2" class="custom-styles">
    Output content.
  </jp-panel-view>
  <jp-panel-view id="view-3" class="custom-styles">
    Debug content.
  </jp-panel-view>
  <jp-panel-view id="view-4" class="custom-styles">
    Terminal content.
  </jp-panel-view>
</jp-panels>
```

```css
.custom-styles {
  justify-content: center;
  align-items: center;
}
```

_Finally, an important detail to be aware of is that `<br/>` tags are [known to not to play well with flexboxes](https://stackoverflow.com/questions/45087054/br-is-not-friendly-with-the-flexbox). So if you absolutely need that tag you should likely opt out of the default flexbox behavior._

### Basic Usage

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-panels--default)

```html
<jp-panels>
  <jp-panel-tab id="tab-1">PROBLEMS</jp-panel-tab>
  <jp-panel-tab id="tab-2">OUTPUT</jp-panel-tab>
  <jp-panel-tab id="tab-3">DEBUG CONSOLE</jp-panel-tab>
  <jp-panel-tab id="tab-4">TERMINAL</jp-panel-tab>
  <jp-panel-view id="view-1">Problems content.</jp-panel-view>
  <jp-panel-view id="view-2">Output content.</jp-panel-view>
  <jp-panel-view id="view-3">Debug content.</jp-panel-view>
  <jp-panel-view id="view-4">Terminal content.</jp-panel-view>
</jp-panels>
```

### Active ID Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-panels--with-active-tab)

```html
<jp-panels activeid="tab-4">
  <jp-panel-tab id="tab-1">PROBLEMS</jp-panel-tab>
  <jp-panel-tab id="tab-2">OUTPUT</jp-panel-tab>
  <jp-panel-tab id="tab-3">DEBUG CONSOLE</jp-panel-tab>
  <jp-panel-tab id="tab-4">TERMINAL</jp-panel-tab>
  <jp-panel-view id="view-1">Problems content.</jp-panel-view>
  <jp-panel-view id="view-2">Output content.</jp-panel-view>
  <jp-panel-view id="view-3">Debug content.</jp-panel-view>
  <jp-panel-view id="view-4">Terminal content.</jp-panel-view>
</jp-panels>
```

### With Jupyter Badge

In addition to text, a Jupyter Badge can be used in a panel tab to highlight an item, attract attention, and/or flag status.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-panels--with-badge)

```html
<jp-panels>
  <jp-panel-tab id="tab-1">
    PROBLEMS
    <jp-badge appearance="secondary">1</jp-badge>
  </jp-panel-tab>
  <jp-panel-tab id="tab-2">
    OUTPUT
    <jp-badge appearance="secondary">1</jp-badge>
  </jp-panel-tab>
  <jp-panel-tab id="tab-3">
    DEBUG CONSOLE
    <jp-badge appearance="secondary">1</jp-badge>
  </jp-panel-tab>
  <jp-panel-tab id="tab-4">
    TERMINAL
    <jp-badge appearance="secondary">1</jp-badge>
  </jp-panel-tab>
  <jp-panel-view id="view-1"> Problems Content </jp-panel-view>
  <jp-panel-view id="view-2"> Output Content </jp-panel-view>
  <jp-panel-view id="view-3"> Debug Console Content </jp-panel-view>
  <jp-panel-view id="view-4"> Terminal Content </jp-panel-view>
</jp-panels>
```

### Complex Content

A `jp-panel-view` can also contain any valid HTML.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-panels--with-complex-content)

```html
<jp-panels>
  <jp-panel-tab id="tab-1">PROBLEMS</jp-panel-tab>
  <jp-panel-tab id="tab-2">OUTPUT</jp-panel-tab>
  <jp-panel-tab id="tab-3">DEBUG CONSOLE</jp-panel-tab>
  <jp-panel-tab id="tab-4">TERMINAL</jp-panel-tab>
  <jp-panel-view id="view-1">
    <section style="display: flex; flex-direction: column; width: 100%;">
      <h1 style="margin-top: 0;">Smoothie Maker 🍓</h1>
      <jp-checkbox>Apples</jp-checkbox>
      <jp-checkbox>Oranges</jp-checkbox>
      <jp-checkbox>Grapes</jp-checkbox>
      <jp-checkbox disabled>Blueberries</jp-checkbox>
      <jp-checkbox>Pineapple</jp-checkbox>
      <jp-checkbox>Mango</jp-checkbox>
      <jp-checkbox>Lemon</jp-checkbox>
      <jp-button>Make Smoothie!</jp-button>
    </section>
  </jp-panel-view>
  <jp-panel-view id="view-2">
    ... Insert Complex Content ...
  </jp-panel-view>
  <jp-panel-view id="view-3">
    ... Insert Complex Content ...
  </jp-panel-view>
  <jp-panel-view id="view-4">
    ... Insert Complex Content ...
  </jp-panel-view>
</jp-panels>
```
