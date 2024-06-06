import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpTreeItem } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpTreeItem());
import { useEventListener, useProperties } from "./react-utils.js";

export const TreeItem = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    expanded,
    selected,
    disabled,
    isNestedItem,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "expanded-change", props.onExpandedChange);
  useEventListener(ref, "selected-change", props.onSelectedChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "expanded", props.expanded);
  useProperties(ref, "selected", props.selected);
  useProperties(ref, "disabled", props.disabled);
  useProperties(ref, "isNestedItem", props.isNestedItem);
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    focusItem: (el) => ref.current.focusItem(el),
    compose: (this, elementDefinition) =>
      ref.current.compose(this, elementDefinition),
  }));

  return React.createElement(
    "jp-tree-item",
    {
      ref,
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style },
    },
    props.children
  );
});
