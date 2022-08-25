import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const NameOfPage = styled.h1`
  font-family: "Kaushan Script", cursiv;
  font-weight: 500;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.xxxl}px;
  white-space: nowrap;

  @media (max-width: 876px) {
    font-size: ${({ fontSize }) =>
      fontSize ? fontSize : theme.fontsize.desktop.xl}px;
  }
`;
