import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpRadio } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpRadio());
import { useEventListener, useProperties } from "./react-utils.js";

export const Radio = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    readonly,
    readOnly,
    name,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "change", props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "readOnly", props.readOnly);
  useProperties(ref, "name", props.name);
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this, elementDefinition) =>
      ref.current.compose(this, elementDefinition),
  }));

  return React.createElement(
    "jp-radio",
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
