import React from "react";
import { useState, useEffect } from "react";

export const useDetectOutsideClick = (
  el: React.MutableRefObject<any>,
  initialState: any
) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      // If the active element exists and is clicked outside of
      if (el?.current !== null && !el?.current?.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
