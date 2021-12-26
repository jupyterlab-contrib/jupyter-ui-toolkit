# Jupyter Text Area

The `jp-text-area` is a web component implementation of a [text area element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

## Attributes

| Attribute     | Type    | Description                                                                                |
| ------------- | ------- | ------------------------------------------------------------------------------------------ |
| `autofocus`   | boolean | Indicates that this component should get focus after the page finishes loading.            |
| `cols`        | number  | Sizes the component horizontally by a number of character columns. Defaults to 20.         |
| `disabled`    | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.       |
| `form`        | string  | The `id` of the `form` that the component is associated with.                              |
| `maxlength`   | number  | The maximum number of characters a user can enter.                                         |
| `name`        | string  | The name of the component.                                                                 |
| `placeholder` | string  | Sets the placeholder value of the component, generally used to provide a hint to the user. |
| `readonly`    | boolean | When true, the control will be immutable by any user interaction.                          |
| `resize`      | string  | The resize mode of the component. Options: `none`, `vertical`, `horizontal`, `both`.       |
| `rows`        | number  | Sizes the component vertically by a number of character rows.                              |
| `value`       | string  | The value (i.e. content) of the text area.                                                 |

## Usage

### Basic Usage

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--default)

```html
<jp-text-area>Text Area Label</jp-text-area>
```

### Autofocus Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--with-autofocus)

```html
<jp-text-area autofocus>Text Area Label</jp-text-area>
```

### Cols Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--with-custom-cols)

```html
<jp-text-area cols="50">Text Area Label</jp-text-area>
```

### Disabled Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--with-disabled)

```html
<jp-text-area disabled>Text Area Label</jp-text-area>
```

### Form Attribute

The `form` attribute should contain the `id` value of the form element that the `jp-text-area` is associated with. The associated form element should be in the same document as the `jp-text-area`.

This attribute allows you to place the `jp-text-area` component anywhere within a document, not just as the child of a form element.

**Note**

If this attribute is not specified, the `jp-text-area` should be a child of a form element.

```html
<form id="sample-form"></form>
<!-- ... arbitrary HTML between the form and jp-text-area ... -->
<jp-text-area form="sample-form">Text Area Label</jp-text-area>
```

### Max Length Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--with-max-length)

```html
<jp-text-area maxlength="10">Text Area Label</jp-text-area>
```

### Name Attribute

```html
<jp-text-area name="example-jp-text-area">
  Text Area Label
</jp-text-area>
```

### Placeholder Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--with-placeholder)

```html
<jp-text-area placeholder="Placeholder Text">
  Text Area Label
</jp-text-area>
```

### Read Only Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--with-readonly)

```html
<jp-text-area readonly>Text Area Label</jp-text-area>
```

### Resize Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--with-resize-none)

```html
<jp-text-area resize="none">Text Area Label</jp-text-area>
```

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--with-resize-both)

```html
<jp-text-area resize="both">Text Area Label</jp-text-area>
```

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--with-resize-vertical)

```html
<jp-text-area resize="vertical">Text Area Label</jp-text-area>
```

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--with-resize-horizontal)

```html
<jp-text-area resize="horizontal">Text Area Label</jp-text-area>
```

### Rows Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-text-area--with-custom-rows)

```html
<jp-text-area rows="20">Text Area Label</jp-text-area>
```
