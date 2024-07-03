import { useEffect, useLayoutEffect } from 'react';

export function useProperties(targetElement, propName, value) {
  useEffect(() => {
    if (
      value !== undefined &&
      targetElement.current &&
      targetElement.current[propName] !== value
    ) {
      // add try catch to avoid errors when setting read-only properties
      try {
        targetElement.current[propName] = value;
      } catch (e) {
        console.warn(e);
      }
    }
  }, [value, targetElement.current]);
}

export function useEventListener(targetElement, eventName, eventHandler) {
  useLayoutEffect(() => {
    if (eventHandler !== undefined) {
      targetElement?.current?.addEventListener(eventName, eventHandler);
    }

    return () => {
      if (eventHandler?.cancel) {
        eventHandler.cancel();
      }

      targetElement?.current?.removeEventListener(eventName, eventHandler);
    };
  }, [eventName, eventHandler, targetElement.current]);
}
