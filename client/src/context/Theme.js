import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeStore";
import { ThemeProvider } from "styled-components";
import { themeDark } from "../components/global-styles/Flex.styled";

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext); // get the current theme ('light' or 'dark')
  console.log("theme in Theme", theme);

  return <ThemeProvider theme={themeDark[theme]}>{children}</ThemeProvider>;
};

export default Theme;
