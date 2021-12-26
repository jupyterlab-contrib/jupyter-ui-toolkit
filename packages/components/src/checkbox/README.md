# Jupyter Checkbox

The `jp-checkbox` is a web component implementation of a [checkbox element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox).

## Attributes

| Attribute   | Type    | Description                                                                              |
| ----------- | ------- | ---------------------------------------------------------------------------------------- |
| `autofocus` | boolean | Determines if the element should receive document focus on page load.                    |
| `checked`   | boolean | When true, the checkbox is toggled on by default.                                        |
| `disabled`  | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.     |
| `readonly`  | boolean | When true, the control will be immutable by user interaction.                            |
| `required`  | boolean | Indicates that the user must check the checkbox before the owning form can be submitted. |
| `value`     | string  | The string to use as the value of the checkbox when submitting the form                  |

## Properties

| Attribute       | Type    | Description                                                               |
| --------------- | ------- | ------------------------------------------------------------------------- |
| `indeterminate` | boolean | Determines if the element should render the indeterminate checkbox state. |

## Usage

### Basic Usage

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-checkbox--default)

```html
<jp-checkbox>Label</jp-checkbox>
```

### Autofocus Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-checkbox--with-autofocus)

```html
<jp-checkbox autofocus>Label</jp-checkbox>
```

### Checked Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-checkbox--with-checked)

```html
<jp-checkbox checked>Label</jp-checkbox>
```

### Disabled Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-checkbox--with-disabled)

```html
<jp-checkbox disabled>Label</jp-checkbox>
```

### Readonly Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-checkbox--with-read-only)

```html
<jp-checkbox readonly>Label</jp-checkbox>
```

### Required Attribute

```html
<jp-checkbox required>Label</jp-checkbox>
```

### Value Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-checkbox--with-value)

```html
<jp-checkbox value="baz">Label</jp-checkbox>
```

### Indeterminate Property

Checkboxes can also render an indeterminate state. This is achieved by getting a reference to a given checkbox using JavaScript and then setting the `indeterminate` property of the checkbox to `true`.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-checkbox--with-indeterminate)

```javascript
const checkbox = document.getElementById('basic-checkbox');
checkbox.indeterminate = true;
```

```html
<jp-checkbox id="basic-checkbox">Label</jp-checkbox>
```

### Form Usage

Here is an example of the Jupyter Checkbox and its various attributes being used in a form.

```html
<form>
  <fieldset>
    <legend>Fieldset Legend</legend>
    <jp-checkbox checked required>Checked + Required</jp-checkbox>
    <jp-checkbox checked readonly>Checked + Readonly</jp-checkbox>
    <jp-checkbox autofocus>Autofocus</jp-checkbox>
    <jp-checkbox disabled>Disabled</jp-checkbox>
    <jp-checkbox value="baz">Value Set To "baz"</jp-checkbox>
  </fieldset>
  <jp-button type="submit">Submit Button</jp-button>
</form>
```
