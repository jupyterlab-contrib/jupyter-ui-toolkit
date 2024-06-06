import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpDataGrid } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpDataGrid());
import { useProperties } from "./react-utils.js";

export const DataGrid = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    noTabbing,
    generateHeader,
    gridTemplateColumns,
    rowsData,
    columnDefinitions,
    rowItemTemplate,
    cellItemTemplate,
    headerCellItemTemplate,
    focusRowIndex,
    focusColumnIndex,
    rowElementTag,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "rowsData", props.rowsData);
  useProperties(ref, "columnDefinitions", props.columnDefinitions);
  useProperties(ref, "rowItemTemplate", props.rowItemTemplate);
  useProperties(ref, "cellItemTemplate", props.cellItemTemplate);
  useProperties(ref, "headerCellItemTemplate", props.headerCellItemTemplate);
  useProperties(ref, "focusRowIndex", props.focusRowIndex);
  useProperties(ref, "focusColumnIndex", props.focusColumnIndex);
  useProperties(ref, "rowElementTag", props.rowElementTag);
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this, elementDefinition) =>
      ref.current.compose(this, elementDefinition),
  }));

  return React.createElement(
    "jp-data-grid",
    {
      ref,
      ...filteredProps,
      "generate-header": props.generateHeader || props["generate-header"],
      "grid-template-columns":
        props.gridTemplateColumns || props["grid-template-columns"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "no-tabbing": props.noTabbing ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
