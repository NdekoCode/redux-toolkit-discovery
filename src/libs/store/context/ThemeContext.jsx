import {
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useToggle } from "../../hooks/useToggle";

const ThemeContext = createContext();
export const ThemeContextProvider = memo(({ children }) => {
  const [darkToggle, setDarkToggle] = useToggle();
  const [theme, setTheme] = useState("light");
  const handleTheme = useCallback(() => {
    setDarkToggle();
    setTheme(darkToggle ? "light" : "dark");
  }, [darkToggle]);
  const value = useMemo(() => ({
    darkToggle,
    theme,
    handleTheme,
  }));
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
});
const UseThemeContext = () => useContext(ThemeContext);
export default UseThemeContext;
