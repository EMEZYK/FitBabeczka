import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
