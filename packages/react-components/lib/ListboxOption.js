import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpOption } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpOption());
import { useProperties } from "./react-utils.js";

export const ListboxOption = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    selected,
    value,
    checked,
    content,
    defaultSelected,
    disabled,
    selectedAttribute,
    dirtyValue,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "checked", props.checked);
  useProperties(ref, "content", props.content);
  useProperties(ref, "defaultSelected", props.defaultSelected);
  useProperties(ref, "disabled", props.disabled);
  useProperties(ref, "selectedAttribute", props.selectedAttribute);
  useProperties(ref, "dirtyValue", props.dirtyValue);
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    checkedChanged: (prev, next) => ref.current.checkedChanged(prev, next),
    compose: (this, elementDefinition) =>
      ref.current.compose(this, elementDefinition),
  }));

  return React.createElement(
    "jp-option",
    {
      ref,
      ...filteredProps,
      value: props.value,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      selected: props.selected ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
