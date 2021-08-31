import { useState } from "react";
import { setPersistState, getPersistState } from "./persistStateHandler";

export const usePersistState = (key: string, initialValue?: any) => {
  const [value, _setValue] = useState(() => {
    try {
      const data = getPersistState(key);
      return data !== null ? JSON.parse(data) : initialValue;
    } catch (error) {
      console.log("Persist State Error :>> ", error);
      return initialValue;
    }
  });

  const setValue = (_value: any) => {
    _setValue(_value);
    setPersistState(key, _value);
  };

  return [value, setValue];
};
