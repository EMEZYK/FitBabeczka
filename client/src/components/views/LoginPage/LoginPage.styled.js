import styled from "styled-components";
import { themes } from "../../../theme/theme";
import { FlexWrapper } from "../../global-styles/Flex.styled";

export const SignInWrapper = styled(FlexWrapper)`
  flex-direction: column;
  min-height: 60vh;
  height: 60vh;
  width: 30vw;
  background-color: #fffa;
  background-color: #fff;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.colors.card.loginBoxShadow};

  @media (max-width: 1080px) {
    min-width: 40vw;
    min-height: 80vh;
  }

  @media (max-width: 876px) {
    min-width: 60vw;
  }

  @media (max-width: 600px) {
    min-width: 90vw;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.8rem, 0.75rem + 1vw, 3rem);
  margin: 0 0 2.5rem 0;
  letter-spacing: 2px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 24vw;
  min-height: 30vh;
  width: 100%;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.common.body};
  border-radius: 0.3rem;
  box-shadow: ${({ theme }) => theme.colors.card.boxShadow};

  @media (max-width: 599px) {
    padding: 2rem 0.6rem;
  }
`;

export const TextArea = styled.textarea`
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "8rem")};
  max-width: 100%;
  padding: 0.6rem;
  border: ${({ border }) => (border ? border : "0.2px solid #aaa")};
  border-radius: 0.2rem;
  text-align: left;
  resize: none;
`;

export const LoginButton = styled.button`
  min-height: 2.4rem;
  padding: 0.4rem;
  margin: 2rem 0 0 0;
  background-color: ${({ theme }) => theme.colors.button.secondary};
  color: #363434;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : themes.fontsize.desktop.s}px;
  font-weight: ${({ theme }) => theme.weight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 0;
  border-radius: 0.2rem;
  box-shadow: ${({ theme }) => theme.colors.card.boxShadow};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.button.active};
  }
`;
