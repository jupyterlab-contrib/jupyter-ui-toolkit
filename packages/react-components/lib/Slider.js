import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpSlider } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpSlider());
import { useEventListener, useProperties } from "./react-utils.js";

export const Slider = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    readonly,
    orientation,
    mode,
    readOnly,
    valueAsNumber,
    valueTextFormatter,
    min,
    max,
    step,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "change", props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "readOnly", props.readOnly);
  useProperties(ref, "valueAsNumber", props.valueAsNumber);
  useProperties(ref, "valueTextFormatter", props.valueTextFormatter);
  useProperties(ref, "min", props.min);
  useProperties(ref, "max", props.max);
  useProperties(ref, "step", props.step);
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    increment: () => ref.current.increment(),
    decrement: () => ref.current.decrement(),
    setThumbPositionForOrientation: (direction) =>
      ref.current.setThumbPositionForOrientation(direction),
    compose: (this, elementDefinition) =>
      ref.current.compose(this, elementDefinition),
  }));

  return React.createElement(
    "jp-slider",
    {
      ref,
      ...filteredProps,
      orientation: props.orientation,
      mode: props.mode,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      readonly: props.readonly ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
