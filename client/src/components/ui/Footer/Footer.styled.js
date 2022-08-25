import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const FooterComponent = styled.footer`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.footer.primary};
  color: #ffff;

  @media (max-width: 876px) {
    height: 15vh;
    align-content: center;
  }

  p {
    width: 100%;
    font-size: 0.8rem;
    color: white;

    @media (max-width: 876px) {
      font-size: 0.8rem;
    }
  }
`;
