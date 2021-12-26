# Jupyter Radio Group

The `jp-radio-group` is a web component implementation of a [radio group](https://w3c.github.io/aria-practices/#radiobutton). While any DOM content is permissible as a child of the `jp-radio-group`, only `jp-radio` content and slotted content with a role of `radio` will receive keyboard support.

## Attributes

| Attribute     | Type    | Description                                                                                  |
| ------------- | ------- | -------------------------------------------------------------------------------------------- |
| `disabled`    | boolean | Disables the radio group and child radios.                                                   |
| `name`        | string  | The name of the radio group. This will also set the name value for all child radio elements. |
| `orientation` | string  | The orientation of the group. Options: `horiztonal`, `vertical`.                             |
| `readonly`    | boolean | When true, the child radios will be immutable by user interaction.                           |

## Usage

### Basic Usage

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-radio-group--default)

```html
<jp-radio-group>
  <label slot="label">Radio Group Label</label>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
</jp-radio-group>
```

### Disabled Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-radio-group--with-disabled)

```html
<jp-radio-group disabled>
  <label slot="label">Radio Group Label</label>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
</jp-radio-group>
```

### Name Attribute

```html
<jp-radio-group name="example-radio-group">
  <label slot="label">Radio Group Label</label>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
</jp-radio-group>
```

### Orientation Attribute

If the orientation attribute is not set, the default orientation is `horizontal`.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-radio-group--with-vertical-orientation)

```html
<jp-radio-group orientation="vertical">
  <label slot="label">Radio Group Label</label>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
</jp-radio-group>

<jp-radio-group orientation="horizontal">
  <label slot="label">Radio Group Label</label>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
</jp-radio-group>
```

### Read Only Attribute

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-radio-group--with-read-only)

```html
<jp-radio-group readonly>
  <label slot="label">Radio Group Label</label>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
  <jp-radio>Radio Label</jp-radio>
</jp-radio-group>
```
