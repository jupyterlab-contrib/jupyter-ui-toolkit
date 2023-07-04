# Jupyter Button

The `jp-button` is a web component implementation of a [button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). The `jp-button` also supports several visual appearances; primary, secondary, and icon.

## Attributes

| Attribute        | Type    | Description                                                                             |
| ---------------- | ------- | --------------------------------------------------------------------------------------- |
| `appearance`     | string  | Determines the visual appearance _(primary, secondary, icon)_ of the button.            |
| `aria-label`     | string  | Defines a label for buttons that screen readers can use.                                |
| `autofocus`      | boolean | Determines if the element should receive document focus on page load.                   |
| `disabled`       | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.    |
| `minimal`        | boolean | Compact layout                                                                          |
| `form`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes). |
| `formaction`     | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes). |
| `formenctype`    | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes). |
| `formmethod`     | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes). |
| `formnovalidate` | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes). |
| `formtarget`     | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes). |
| `name`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes). |
| `type`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes). |
| `value`          | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes). |

## Usage

### Basic Usage

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-button--default)

```html
<jp-button>Button Text</jp-button>
```

### Appearance Attribute

There are a number of visual appearances that the `jp-button` can have. The default appearance is `primary`.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-button--default)

```html
<jp-button appearance="primary">Button Text</jp-button>
<jp-button appearance="secondary">Button Text</jp-button>
<jp-button appearance="icon">
  <span class="codicon codicon-check"></span>
</jp-button>
```

### Autofocus Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-button--with-autofocus)

```html
<jp-button autofocus>Button Text</jp-button>
```

### Disabled Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-button--with-disabled)

```html
<jp-button disabled>Button Text</jp-button>
```

### Start Icon

An icon can be added to the left of Button text by adding an element with the attribute `slot="start"`.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-button--with-start-icon)

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<jp-button>
  Button Text
  <span slot="start" class="codicon codicon-add"></span>
</jp-button>
```

### Icon Only

An icon can also fill the default slot of the Button component (instead of text) to create an icon button by using the `appearance="icon"` attribute and value.

**❗️❗️❗️ Important ❗️❗️❗️**

Because icon buttons do not have text that can be used by screen readers, they are not meaningfully/semantically accessible by default.

An `aria-label` of "Icon Button" is automatically defined on all icon buttons so they are still technically accessible out of the box, however, a descriptive and meaningful label that fits the use case or context of the icon button should be defined to replace the default label.

For example, if you're using an icon button to confirm a state change, adding an `aria-label` with the value "Confirm" or "Confirm Changes" would be appropriate.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-button--with-icon-only)

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<jp-button appearance="icon" aria-label="Confirm">
  <span class="codicon codicon-check"></span>
</jp-button>
```
