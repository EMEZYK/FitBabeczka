import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const Typography = styled.p`
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.s}px;

  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : theme.weight.regular};

  @media (max-width: 576px) {
    font-size: ${({ fontSizeMobile }) =>
      fontSizeMobile ? fontSizeMobile : theme.fontsize.mobile.s}px;
  }
`;
