import { Icon as IconElement } from '@jupyter/web-components';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useProperties } from './react-utils.js';

/**
 * Icon component
 *
 * Icon must first be registered: `Icon.register({ name, svgStr });`
 *
 * Then you can use it with `<Icon name="{name}" />` .
 *
 * To style your icon, you should set `fill` and/or `stroke` attributes to `currentColor`.
 * Then the icon will be colored with the active text color.
 */
export const Icon = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { className, name, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, 'name', props.name);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);

  return React.createElement('jp-icon', {
    ref,
    ...filteredProps,
    class: props.className,
    style: { ...props.style }
  });
});

/**
 * Register a new icon.
 *
 * @param {IconDefinition} options Icon definition
 */
Icon.register = options => {
  IconElement.register(options);
};

/**
 * Set the default icon.
 *
 * @param svgStr The SVG string to be used as the default icon.
 */
Icon.setDefaultIcon = svgStr => {
  IconElement.setDefaultIcon(svgStr);
};
