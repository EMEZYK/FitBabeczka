import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const Typography = styled.p`
  font-size: clamp (1rem, 2vw, 3rem);

  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : theme.weight.regular};

  @media (max-width: 576px) {
    font-size: ${({ fontSizeMobile }) =>
      fontSizeMobile ? fontSizeMobile : theme.fontsize.mobile.s}px;
  }
`;
