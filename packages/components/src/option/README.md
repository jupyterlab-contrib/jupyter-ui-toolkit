# Jupyter Option

The `jp-option` is a web component implementation of an [option](https://w3c.github.io/aria/#option).

The `jp-option` component will only provide internals related to form association when used within a form-associated component. See the `jp-dropdown` component for more details.

## Attributes

| Attribute  | Type    | Description                                                         |
| ---------- | ------- | ------------------------------------------------------------------- |
| `disabled` | boolean | The disabled state of the option.                                   |
| `selected` | boolean | The selected attribute value. This sets the initial selected value. |
| `value`    | string  | The initial value of the option.                                    |

## Usage

### Basic Usage

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-option--default)

```html
<jp-option>Option Label</jp-option>
```

### Disabled Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-option--with-disabled)

```html
<jp-option disabled>Option Label</jp-option>
```

### Selected Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-option--with-selected)

```html
<jp-option selected>Option Label</jp-option>
```

### Value Attribute

```html
<jp-option value="example-option-value">Option Label</jp-option>
```
