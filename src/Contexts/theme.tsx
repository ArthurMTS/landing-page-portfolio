import React from "react";
import { dark, light } from "assets/pallet/themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeProps {
  toggleTheme: (theme: string) => void;
  theme: "light" | "dark" | string;
  getTheme: () => typeof dark | typeof light;
}

export const ThemeContext = React.createContext({} as ThemeProps);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState(
    localStorage?.getItem("theme") || "light"
  );

  const toggleTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  const getTheme = () => {
    return theme === "light" ? light : theme === "dark" ? dark : light;
  };

  return (
    <ThemeContext.Provider value={{
      toggleTheme,
      theme,
      getTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
};