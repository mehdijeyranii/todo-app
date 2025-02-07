import React, { createContext, useEffect, useReducer } from "react";
import { Theme, themeReducer } from "../reducers/themeReducer";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
});

const getSystemTheme = (): Theme => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, dispatch] = useReducer(themeReducer, "system", () => {
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  useEffect(() => {
    if (theme === "system") {
      document.documentElement.classList.toggle(
        "dark",
        getSystemTheme() === "dark"
      );
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        dispatch({ type: "SET_THEME", payload: getSystemTheme() });
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
