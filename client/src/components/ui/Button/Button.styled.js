import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const Button = styled.button`
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "6rem")};
  min-height: ${({ height }) => (height ? height : "1.4rem")};
  padding: ${({ padding }) => (padding ? padding : "0.5rem")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  background-color: ${({ background }) =>
    background ? background : "#e4caca"};
  color: ${({ color }) => (color ? color : "#fff")};
  border: ${({ border }) => (border ? border : "0")};
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.s}px;
  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : theme.weight.bold};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "0"};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "uppercase"};
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
`;