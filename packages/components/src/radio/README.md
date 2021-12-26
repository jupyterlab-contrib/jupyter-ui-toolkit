# Jupyter Radio

The `jp-radio` is a web component implementation of a [radio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio).

## Attributes

| Attribute  | Type    | Description                                                                         |
| ---------- | ------- | ----------------------------------------------------------------------------------- |
| `checked`  | boolean | When true, the radio is toggled on.                                                 |
| `disabled` | boolean | Prevents the user from interacting with the radio––it cannot be pressed or focused. |
| `readonly` | boolean | Indicates whether the radio is checked or not.                                      |
| `value`    | string  | The string to use as the value of the radio.                                        |

## Usage

### Basic Usage

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-radio--default)

```html
<jp-radio>Radio Label</jp-radio>
```

### Checked Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-radio--with-checked)

```html
<jp-radio checked>Radio Label</jp-radio>
```

### Read Only Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-radio--with-read-only)

```html
<jp-radio readonly>Radio Label</jp-radio>
```

### Disabled Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-radio--with-disabled)

```html
<jp-radio disabled>Radio Label</jp-radio>
```
