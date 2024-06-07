import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpSwitch } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpSwitch());
import { useEventListener, useProperties } from "./react-utils.js";

export const Switch = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    readonly,
    readOnly,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "change", props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "readOnly", props.readOnly);
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this_, elementDefinition) =>
      ref.current.compose(this_, elementDefinition),
  }));

  return React.createElement(
    "jp-switch",
    {
      ref,
      ...filteredProps,
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
