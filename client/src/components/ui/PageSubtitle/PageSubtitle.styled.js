import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const PageSubtitle = styled.h1`
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "15vw")};
  padding: ${({ padding }) => (padding ? padding : "0.4rem 1.2rem")};
  margin: ${({ margin }) => (margin ? margin : "2rem 0")};
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.xxxl}px;
  font-weight: normal;
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "0.4rem"};
  font-family: "Kaushan Script", cursiv;
  background-color: ${({ bgc }) => (bgc ? bgc : theme.colors.common.body)};
  border: 2px solid
    ${({ borderColor }) =>
      borderColor ? borderColor : theme.colors.common.heading};
`;
