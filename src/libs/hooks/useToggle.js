import { useCallback, useState } from "react";

export function useToggle(initialValue = false) {
  const [isActive, setActive] = useState(initialValue);
  const toggleActive = useCallback(
    (value = null) => {
      console.log("Lolg", isActive);
      value ? setActive(value) : setActive((d) => !d);
    },
    [isActive]
  );
  return [isActive, toggleActive];
}
