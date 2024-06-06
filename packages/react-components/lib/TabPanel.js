import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpTabPanel } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpTabPanel());
import { useProperties } from "./react-utils.js";

export const TabPanel = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { $presentation, template, styles, ...filteredProps } = props;

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
    "jp-tab-panel",
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
