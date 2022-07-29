import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeStore";
import { ThemeProvider } from "styled-components";
import { ThemeOfPage } from "../components/global-styles/Theme.styled";

const PageTheme = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <ThemeProvider theme={ThemeOfPage[theme]}>{children}</ThemeProvider>;
};

export default PageTheme;
