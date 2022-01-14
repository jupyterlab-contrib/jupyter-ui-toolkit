# Jupyter Text Field

The `jp-text-field` is a web component implementation of a [text field element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/text).

## Attributes

| Attribute     | Type    | Description                                                                                |
| ------------- | ------- | ------------------------------------------------------------------------------------------ |
| `autofocus`   | boolean | Indicates that this component should get focus after the page finishes loading.            |
| `disabled`    | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.       |
| `maxlength`   | number  | The maximum number of characters a user can enter.                                         |
| `name`        | string  | The name of the component.                                                                 |
| `placeholder` | string  | Sets the placeholder value of the component, generally used to provide a hint to the user. |
| `readonly`    | boolean | When true, the control will be immutable by any user interaction.                          |
| `size`        | number  | Sets the width of the element to a specified number of characters.                         |
| `value`       | string  | The value (i.e. content) of the text field.                                                |

## Usage

### Basic Usage

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-field--default)

```html
<jp-text-field>Text Field Label</jp-text-field>
```

### Autofocus Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-field--with-autofocus)

```html
<jp-text-field autofocus>Text Field Label</jp-text-field>
```

### Disabled Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-field--with-disabled)

```html
<jp-text-field disabled>Text Field Label</jp-text-field>
```

### Max Length Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-field--with-max-length)

```html
<jp-text-field maxlength="10">Text Field Label</jp-text-field>
```

### Name Attribute

```html
<jp-text-field name="example-jp-text-field">Text Field Label</jp-text-field>
```

### Placeholder Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-field--with-placeholder)

```html
<jp-text-field placeholder="Placeholder Text">Text Field Label</jp-text-field>
```

### Read Only Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-field--with-readonly)

```html
<jp-text-field readonly>Text Field Label</jp-text-field>
```

### Size Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-field--with-custom-size)

```html
<jp-text-field size="50">Text Field Label</jp-text-field>
```

### Start Icon

An icon can be added to the left of the text field by adding an element with the attribute `slot="start"`.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-field--with-start-icon)

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<jp-text-field>
  Text Field Label
  <span slot="start" class="codicon codicon-git-merge"></span>
</jp-text-field>
```

### End Icon

An icon can be added to the right of the text field by adding an element with the attribute `slot="end"`.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-field--with-end-icon)

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<jp-text-field>
  Text Field Label
  <span slot="end" class="codicon codicon-chevron-right"></span>
</jp-text-field>
```
