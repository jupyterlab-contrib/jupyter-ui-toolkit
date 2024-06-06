import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpBreadcrumbItem } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpBreadcrumbItem());
import { useProperties } from "./react-utils.js";

export const BreadcrumbItem = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    download,
    href,
    hreflang,
    ping,
    referrerpolicy,
    rel,
    target,
    type,
    control,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "control", props.control);
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    compose: (this, elementDefinition) =>
      ref.current.compose(this, elementDefinition),
  }));

  return React.createElement(
    "jp-breadcrumb-item",
    {
      ref,
      ...filteredProps,
      download: props.download,
      href: props.href,
      hreflang: props.hreflang,
      ping: props.ping,
      referrerpolicy: props.referrerpolicy,
      rel: props.rel,
      target: props.target,
      type: props.type,
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
