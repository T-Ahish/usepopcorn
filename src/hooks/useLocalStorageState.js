import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, name) {
  const [value, setValue] = useState(function () {
    const item = localStorage.getItem(name)
      ? JSON.parse(localStorage.getItem(name))
      : initialState;
    return item;
  });

  useEffect(
    function () {
      localStorage.setItem(name, JSON.stringify(value));
    },
    [value, name],
  );

  return [value, setValue];
}
