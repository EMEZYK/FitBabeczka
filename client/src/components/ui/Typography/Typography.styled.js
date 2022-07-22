import styled from "styled-components";
import { themes } from "../../../theme/theme";

export const Typography = styled.p`
  /* font-size: ${({ fontSize }) =>
    fontSize ? fontSize : themes.fontsize.desktop.s}px; */

  font-size: clamp (1rem, 2vw, 3rem);

  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : themes.weight.regular};

  @media (max-width: 576px) {
    font-size: ${({ fontSizeMobile }) =>
      fontSizeMobile ? fontSizeMobile : themes.fontsize.mobile.s}px;
  }
`;
