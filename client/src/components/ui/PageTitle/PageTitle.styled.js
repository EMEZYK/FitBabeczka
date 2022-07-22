import styled from "styled-components";
import { themes } from "../../../theme/theme";

export const PageTitle = styled.h1`
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "15vw")};
  padding: ${({ padding }) => (padding ? padding : "0.4rem 1.2rem")};
  margin: ${({ margin }) => (margin ? margin : "2rem 0")};
  font-size: ${({ theme }) => theme.fontsize.desktop.xxxl}px;
  font-weight: normal;
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "0.4rem"};
  font-family: "Kaushan Script", cursiv;
  background-color: ${({ theme }) => theme.colors.common.body};
  border: 2px solid ${({ color }) => themes.colors.common.heading};
`;
