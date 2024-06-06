import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpPickerMenuOption } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpPickerMenuOption());
import { useProperties } from "./react-utils.js";

export const PickerMenuOption = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    value,
    contentsTemplate,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "contentsTemplate", props.contentsTemplate);
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this, elementDefinition) =>
      ref.current.compose(this, elementDefinition),
  }));

  return React.createElement(
    "jp-draft-picker-menu-option",
    {
      ref,
      ...filteredProps,
      value: props.value,
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
