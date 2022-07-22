import styled from "styled-components";
import { themes } from "../../../theme/theme";

export const BlogName = styled.h1`
  font-family: "Kaushan Script", cursiv;
  font-weight: 500;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : themes.fontsize.desktop.xxxl}px;
  white-space: nowrap;

  @media (max-width: 876px) {
    font-size: ${({ fontSize }) =>
      fontSize ? fontSize : themes.fontsize.desktop.xl}px;
  }
`;
