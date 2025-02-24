import React, { useContext, useState } from "react";

import { changeCss } from "@services/changeCss";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState("light");

  const change = (name) => {
    setTheme(name);
    changeCss(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change,
      }}
      {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
