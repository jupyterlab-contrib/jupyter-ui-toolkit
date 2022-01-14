# Jupyter Data Grid

The `jp-data-grid` enables developers to display data in a tabular layout. The data grid is created using three components that work together:

- `<jp-data-grid>`: The top level container element.
- `<jp-data-grid-row>`: Displays a single row of data associated with a single record or a header row.
- `<jp-data-grid-cell>`: Displays a single cell of data within a row.

## Data Grid Attributes

| Attribute               | Type   | Description                                                                            |
| ----------------------- | ------ | -------------------------------------------------------------------------------------- |
| `generate-header`       | string | The type of header row that should be generated. Options: `default`, `sticky`, `none`. |
| `grid-template-columns` | string | A string that gets applied to the `grid-template-columns` attribute of child rows.     |

## Data Grid Row Attributes

| Attribute               | Type   | Description                                                          |
| ----------------------- | ------ | -------------------------------------------------------------------- |
| `grid-template-columns` | string | A CSS Grid string that defines the column widths of a data grid row. |
| `row-type`              | string | The type of row. Options: `default`, `header`, `sticky-header`.      |

## Data Grid Cell Attributes

| Attribute     | Type   | Description                                           |
| ------------- | ------ | ----------------------------------------------------- |
| `cell-type`   | string | The type of cell. Options: `default`, `columnheader`. |
| `grid-column` | string | The column index of the cell.                         |

## Usage

❗️❗️❗️ Important ❗️❗️❗️

An aria-label of "Data Grid" is automatically defined on all data grids so they are technically accessible out of the box. However, a descriptive and meaningful label that fits the use case or context of the data grid should always be defined to replace the default label so those viewing your data grid with a screen reader can better understand the meaning of the data.

For example, if you're using a data grid to display real-time earthquake data, adding an aria-label with the value "Real-Time Earthquakes" would be appropriate.

### Basic Usage

The recommended basic usage of the `jp-data-grid` is to use JavaScript (or TypeScript) to programmatically populate the rows and cells of the grid using the `rowsData` property as shown below.

With that said, a data grid can still be created with HTML only (also shown below).

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-data-grid--default)

_Using HTML & JavaScript_

Note that when using this method of data grid creation, the header row is automatically generated based on the data passed to `rowsData`.

```html
<jp-data-grid id="basic-grid" aria-label="Basic"></jp-data-grid>
```

```javascript
// A row is automatically generated for each object in the rowsData array.
// A column is automatically generated for each key in the first object in the rowsData array.
document.getElementById('basic-grid').rowsData = [
  {
    Header1: 'Cell Data',
    Header2: 'Cell Data',
    Header3: 'Cell Data',
    Header4: 'Cell Data'
  },
  {
    Header1: 'Cell Data',
    Header2: 'Cell Data',
    Header3: 'Cell Data',
    Header4: 'Cell Data'
  },
  {
    Header1: 'Cell Data',
    Header2: 'Cell Data',
    Header3: 'Cell Data',
    Header4: 'Cell Data'
  }
];
```

_Using Only HTML_

Note that when using this method of data grid creation, the `generate-header` attribute should be set to `none` and the header row must be manually defined using HTML.

```html
<jp-data-grid generate-header="none" aria-label="Basic">
  <jp-data-grid-row row-type="header">
    <jp-data-grid-cell cell-type="columnheader" grid-column="1"
      >Header 1</jp-data-grid-cell
    >
    <jp-data-grid-cell cell-type="columnheader" grid-column="2"
      >Header 2</jp-data-grid-cell
    >
    <jp-data-grid-cell cell-type="columnheader" grid-column="3"
      >Header 3</jp-data-grid-cell
    >
    <jp-data-grid-cell cell-type="columnheader" grid-column="3"
      >Header 4</jp-data-grid-cell
    >
  </jp-data-grid-row>
  <jp-data-grid-row>
    <jp-data-grid-cell grid-column="1">Cell Data</jp-data-grid-cell>
    <jp-data-grid-cell grid-column="2">Cell Data</jp-data-grid-cell>
    <jp-data-grid-cell grid-column="3">Cell Data</jp-data-grid-cell>
    <jp-data-grid-cell grid-column="4">Cell Data</jp-data-grid-cell>
  </jp-data-grid-row>
  <jp-data-grid-row>
    <jp-data-grid-cell grid-column="1">Cell Data</jp-data-grid-cell>
    <jp-data-grid-cell grid-column="2">Cell Data</jp-data-grid-cell>
    <jp-data-grid-cell grid-column="3">Cell Data</jp-data-grid-cell>
    <jp-data-grid-cell grid-column="4">Cell Data</jp-data-grid-cell>
  </jp-data-grid-row>
  <jp-data-grid-row>
    <jp-data-grid-cell grid-column="1">Cell Data</jp-data-grid-cell>
    <jp-data-grid-cell grid-column="2">Cell Data</jp-data-grid-cell>
    <jp-data-grid-cell grid-column="3">Cell Data</jp-data-grid-cell>
    <jp-data-grid-cell grid-column="4">Cell Data</jp-data-grid-cell>
  </jp-data-grid-row>
</jp-data-grid>
```

### Generate Header Attribute

The `generate-header` attribute is applied to the `<jp-data-grid>` component and can be used to automatically generate a header row when data is passed to the `rowsData` property in JavaScript.

There are three values that can be passed to the attribute:

- `default`: A default header row will be automatically generated. This is the default value if the `generate-header` is not defined on the component.
- `sticky`: A sticky header row will be automatically generated.
- `none`: No header row will be generated.

**Important Note**

As shown above in the Basic Usage example, if the `jp-data-grid` is defined using only HTML this attribute should be set to `none` and the header row should be manually created with HTML.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-data-grid--with-no-header)

```html
<jp-data-grid
  id="basic-grid"
  generate-header="default"
  aria-label="Default Header"
></jp-data-grid>
<jp-data-grid
  id="basic-grid"
  generate-header="sticky"
  aria-label="Sticky Header"
></jp-data-grid>
<jp-data-grid
  id="basic-grid"
  generate-header="none"
  aria-label="No Header"
></jp-data-grid>
```

```javascript
document.getElementById('basic-grid').rowsData = [
  {
    Header1: 'Cell Data',
    Header2: 'Cell Data',
    Header3: 'Cell Data',
    Header4: 'Cell Data'
  },
  {
    Header1: 'Cell Data',
    Header2: 'Cell Data',
    Header3: 'Cell Data',
    Header4: 'Cell Data'
  },
  {
    Header1: 'Cell Data',
    Header2: 'Cell Data',
    Header3: 'Cell Data',
    Header4: 'Cell Data'
  }
];
```

### Grid Template Columns Attribute

The `grid-template-columns` attribute can be applied to either the `<jp-data-grid>` or `<jp-data-grid-row>` component and can be used to define the width of each column in either all rows or a given row.

Each row of a data grid is rendered using CSS Grid layout. As a result, the value passed to the `grid-template-columns` attribute of these components can be the same as a the `grid-template-columns` CSS Grid property (i.e. `grid-template-columns="1fr 1fr 1fr 1fr"`).

By default the data grid automatically sets the width of each column to `"1fr"`.

**Differences Between Components**

The primary difference between using the `grid-template-columns` attribute on the `<jp-data-grid>` versus the `<jp-data-grid-row>` is how the value of the attribute is applied.

When defined on a `<jp-data-grid>` component, the value of the attribute is automatically applied to every child row inside the component.

When defined on a `<jp-data-grid-row>` component, the value of the attribute is applied to only that row.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-data-grid--with-custom-column-widths)

```html
<jp-data-grid
  id="basic-grid"
  grid-template-columns="100px 10vw 3fr 30%"
  aria-label="Custom Column Widths"
></jp-data-grid>
```

```javascript
document.getElementById('basic-grid').rowsData = [
  {
    Header1: 'Cell Data',
    Header2: 'Cell Data',
    Header3: 'Cell Data',
    Header4: 'Cell Data'
  },
  {
    Header1: 'Cell Data',
    Header2: 'Cell Data',
    Header3: 'Cell Data',
    Header4: 'Cell Data'
  },
  {
    Header1: 'Cell Data',
    Header2: 'Cell Data',
    Header3: 'Cell Data',
    Header4: 'Cell Data'
  }
];
```

### Row Type Attribute

The `row-type` attribute is used to define what type of row should be rendered. There are three values that can be passed to the attribute:

- `default`: A default row will be rendered. This is the default value if the `row-type` is not defined on the component.
- `header`: A header row will be rendered.
- `sticky`: A sticky header row will be rendered.

**Usage Note**

Use this attribute when defining a data grid using only HTML. This attribute is automatically applied when rendering a data grid using JavaScript and the `rowsData` property.

```html
<jp-data-grid-row row-type="default"></jp-data-grid-row>
<jp-data-grid-row row-type="header"></jp-data-grid-row>
<jp-data-grid-row row-type="sticky-header"></jp-data-grid-row>
```

### Cell Type Attribute

The `cell-type` attribute is used to define what type of cell should be rendered. There are two values that can be passed to the attribute:

- `default`: A default cell will be rendered. This is the default value if the `cell-type` is not defined on the component.
- `columnheader`: A column header cell will be rendered.

**Usage Note**

Use this attribute when defining a data grid using only HTML. This attribute is automatically applied when rendering a data grid using JavaScript and the `rowsData` property.

```html
<jp-data-grid-cell cell-type="default"></jp-data-grid-cell>
<jp-data-grid-cell cell-type="columnheader"></jp-data-grid-cell>
```

### Grid Column Attribute

The `grid-column` attribute is used to define the column index (i.e. the order) of a given cell inside a row.

**Usage Note**

Use this attribute when defining a data grid using only HTML. This attribute is automatically applied when rendering a data grid using JavaScript and the `rowsData` property.

```html
<jp-data-grid-row>
  <jp-data-grid-cell grid-column="1">Cell Data</jp-data-grid-cell>
  <jp-data-grid-cell grid-column="2">Cell Data</jp-data-grid-cell>
  <jp-data-grid-cell grid-column="3">Cell Data</jp-data-grid-cell>
  <jp-data-grid-cell grid-column="4">Cell Data</jp-data-grid-cell>
</jp-data-grid-row>
```

### Custom Column Titles

By default, when defining a data grid programmatically using the `rowsData` property in JavaScript, the key of each object in the given array is used as the header text for each column.

This behavior can be overridden, however, by defining a new array of objects that is passed to the `columnDefinitions` property.

The array should contain an object for each column in the data grid that contains the following:

**`columnDataKey` Property**

This should contain the key from the `rowsData` object (representing a specific column) that you want the new custom title to override.

**`title` Property**

This is where you define the custom title for a given column.

[Interactive Storybook Example](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/?path=/story/library-data-grid--with-custom-titles)

```html
<jp-data-grid id="basic-grid" aria-label="Custom Column Titles"></jp-data-grid>
```

```javascript
const basicGrid = document.getElementById('basic-grid');

// Populate grid with data
basicGrid.rowsData = [
  {
    ColumnKey1: 'Cell Data',
    ColumnKey2: 'Cell Data',
    ColumnKey3: 'Cell Data',
    ColumnKey4: 'Cell Data'
  },
  {
    ColumnKey1: 'Cell Data',
    ColumnKey2: 'Cell Data',
    ColumnKey3: 'Cell Data',
    ColumnKey4: 'Cell Data'
  },
  {
    ColumnKey1: 'Cell Data',
    ColumnKey2: 'Cell Data',
    ColumnKey3: 'Cell Data',
    ColumnKey4: 'Cell Data'
  }
];

// Add custom column titles to grid
basicGrid.columnDefinitions = [
  { columnDataKey: 'ColumnKey1', title: 'A Custom Header Title' },
  { columnDataKey: 'ColumnKey2', title: 'Another Custom Title' },
  { columnDataKey: 'ColumnKey3', title: 'Title Is Custom' },
  { columnDataKey: 'ColumnKey4', title: 'Custom Title' }
];
```
