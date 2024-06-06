import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpSliderLabel } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpSliderLabel());
import { useProperties } from "./react-utils.js";

export const SliderLabel = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    hideMark,
    disabled,
    position,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this, elementDefinition) =>
      ref.current.compose(this, elementDefinition),
  }));

  return React.createElement(
    "jp-slider-label",
    {
      ref,
      ...filteredProps,
      position: props.position,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "hide-mark": props.hideMark ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
