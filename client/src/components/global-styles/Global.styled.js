import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align: center;
}

body {
    background-color: ${({ theme }) => theme.colors.common.body};
    font-family:'Open Sans', sans-serif;
    font-size: 1.13em;
    max-width: 100%;
  overflow-x: hidden;
}

img {
    max-width: 100%;
}




`;
export default GlobalStyles;
