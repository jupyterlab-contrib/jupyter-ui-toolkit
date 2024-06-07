import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpSelect } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpSelect());
import { useEventListener, useProperties } from "./react-utils.js";

export const Select = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    autowidth,
    minimal,
    open,
    position,
    autoWidth,
    value,
    displayValue,
    multiple,
    size,
    length,
    options,
    disabled,
    selectedIndex,
    selectedOptions,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "input", props.onInput);
  useEventListener(ref, "change", props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "autoWidth", props.autoWidth);
  useProperties(ref, "value", props.value);
  useProperties(ref, "displayValue", props.displayValue);
  useProperties(ref, "multiple", props.multiple);
  useProperties(ref, "size", props.size);
  useProperties(ref, "length", props.length);
  useProperties(ref, "options", props.options);
  useProperties(ref, "disabled", props.disabled);
  useProperties(ref, "selectedIndex", props.selectedIndex);
  useProperties(ref, "selectedOptions", props.selectedOptions);
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    autoWidthChanged: (prev, next) => ref.current.autoWidthChanged(prev, next),
    setAutoWidth: () => ref.current.setAutoWidth(),
    setPositioning: () => ref.current.setPositioning(),
    multipleChanged: (prev, next) => ref.current.multipleChanged(prev, next),
    setSelectedOptions: () => ref.current.setSelectedOptions(),
    selectFirstOption: () => ref.current.selectFirstOption(),
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition),
  }));

  return React.createElement(
    "jp-select",
    {
      ref,
      ...filteredProps,
      position: props.position,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      autowidth: props.autowidth ? "" : undefined,
      minimal: props.minimal ? "" : undefined,
      open: props.open ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
