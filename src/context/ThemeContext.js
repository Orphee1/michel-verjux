import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    themeSelected: true,
    themeOne: {
      syntax: "#023254",
      bg: "white",
    },
    themeTwo: {
      syntax: "white",
      bg: "#023254",
    },
  });

  const toggleTheme = (t) => {
    setTheme({
      ...theme,
      themeSelected: t,
    });
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
