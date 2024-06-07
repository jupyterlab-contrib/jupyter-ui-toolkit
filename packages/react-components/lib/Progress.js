import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpProgress } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpProgress());
import { useProperties } from "./react-utils.js";

export const Progress = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    value,
    min,
    max,
    paused,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "value", props.value);
  useProperties(ref, "min", props.min);
  useProperties(ref, "max", props.max);
  useProperties(ref, "paused", props.paused);
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition),
  }));

  return React.createElement(
    "jp-progress",
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
