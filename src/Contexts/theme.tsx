import React from "react";
import { dark, light } from "assets/pallet/themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeProps {
  toggleTheme: (theme: string) => void;
  colors: typeof dark | typeof light;
}

export const ThemeContext = React.createContext({} as ThemeProps);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colors, setColors] = React.useState(light);

  const toggleTheme = (theme: string) => {
    const color = theme === "light" ? light : theme === "dark" ? dark : light;
    setColors(color);
  };

  return (
    <ThemeContext.Provider value={{
      toggleTheme,
      colors
    }}>
      {children}
    </ThemeContext.Provider>
  )
};