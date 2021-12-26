# Jupyter Dropdown

The `jp-dropdown` is a web component implementation of a [select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).

## Attributes

| Attribute  | Type    | Description                                                                                  |
| ---------- | ------- | -------------------------------------------------------------------------------------------- |
| `disabled` | boolean | Disables the dropdown and child options.                                                     |
| `open`     | boolean | If true, toggles the dropdown to the open position.                                          |
| `position` | string  | Reflects the placement for the listbox when the dropdown is open. Options: `above`, `below`. |

## Usage

The `jp-dropdown` component must be used with the `jp-option` component.

### Basic Usage

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-dropdown--default)

```html
<jp-dropdown>
  <jp-option>Option Label #1</jp-option>
  <jp-option>Option Label #2</jp-option>
  <jp-option>Option Label #3</jp-option>
</jp-dropdown>
```

### Disabled Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-dropdown--with-disabled)

```html
<jp-dropdown disabled>
  <jp-option>Option Label #1</jp-option>
  <jp-option>Option Label #2</jp-option>
  <jp-option>Option Label #3</jp-option>
</jp-dropdown>
```

### Open Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-dropdown--with-open)

```html
<jp-dropdown open>
  <jp-option>Option Label #1</jp-option>
  <jp-option>Option Label #2</jp-option>
  <jp-option>Option Label #3</jp-option>
</jp-dropdown>
```

### Position Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-dropdown--with-position-above)

```html
<jp-dropdown position="above">
  <jp-option>Option Label #1</jp-option>
  <jp-option>Option Label #2</jp-option>
  <jp-option>Option Label #3</jp-option>
</jp-dropdown>
```

```html
<jp-dropdown position="below">
  <jp-option>Option Label #1</jp-option>
  <jp-option>Option Label #2</jp-option>
  <jp-option>Option Label #3</jp-option>
</jp-dropdown>
```

### Custom Indicator

The default indicator is a downward facing chevron, but it can customized by adding an element with the attribute `slot="indicator"`.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-dropdown--with-custom-indicator)

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<jp-dropdown>
  <span slot="indicator" class="codicon codicon-settings"></span>
  <jp-option>Option Label #1</jp-option>
  <jp-option>Option Label #2</jp-option>
  <jp-option>Option Label #3</jp-option>
</jp-dropdown>
```
