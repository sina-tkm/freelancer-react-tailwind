import { useEffect, useState } from "react";

export function useLoacaleStorageState(key, intialState) {
  const [value, setValue] = useState(() => {
    const StoreValue = localStorage.getItem(key);
    return StoreValue ? JSON.parse(StoreValue) : intialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}
