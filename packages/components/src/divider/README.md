# Jupyter Divider

The `jp-divider` is a web component implementation of a [horiztonal rule element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr).

## Attributes

| Attribute | Type   | Description                                    |
| --------- | ------ | ---------------------------------------------- |
| role      | string | Indicates the semantic meaning of the divider. |

## Usage

### Basic Usage

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-divider--default)

```html
<jp-divider></jp-divider>
```

### Role Attribute

The role attribute determines the semantic meaning (or lack there of) of a Jupyter Divider. The two options are `separator` and `presentation`.

The `separator` option is the default value and indicates that the divider semantically separates content.

The `presentation` option indicates that the divider has no semantic value and is for visual presentation only.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-divider--with-role)

```html
<!-- Indicates that the divider semantically separates content -->
<jp-divider role="separator"></jp-divider>

<!-- Indicates that the divider has no semantic value and is for visual presentation only -->
<jp-divider role="presentation"></jp-divider>
```
