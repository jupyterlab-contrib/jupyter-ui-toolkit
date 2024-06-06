import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { provideJupyterDesignSystem, jpTextField } from "@jupyter/web-components";
provideJupyterDesignSystem().register(jpTextField());
import { useEventListener, useProperties } from "./react-utils.js";

export const TextField = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    readonly,
    appearance,
    placeholder,
    type,
    list,
    pattern,
    readOnly,
    autofocus,
    maxlength,
    minlength,
    size,
    spellcheck,
    $presentation,
    template,
    styles,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "change", props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "readOnly", props.readOnly);
  useProperties(ref, "autofocus", props.autofocus);
  useProperties(ref, "maxlength", props.maxlength);
  useProperties(ref, "minlength", props.minlength);
  useProperties(ref, "size", props.size);
  useProperties(ref, "spellcheck", props.spellcheck);
  useProperties(ref, "$presentation", props.$presentation);
  useProperties(ref, "template", props.template);
  useProperties(ref, "styles", props.styles);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    select: () => ref.current.select(),
    validate: () => ref.current.validate(),
    compose: (this, elementDefinition) =>
      ref.current.compose(this, elementDefinition),
  }));

  return React.createElement(
    "jp-text-field",
    {
      ref,
      ...filteredProps,
      appearance: props.appearance,
      placeholder: props.placeholder,
      type: props.type,
      list: props.list,
      pattern: props.pattern,
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
