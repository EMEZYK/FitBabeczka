import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { FlexWrapper } from "../../global-styles/Flex.styled";

export const SignInWrapper = styled(FlexWrapper)`
  background-color: #fffa;
  max-width: 30vw;
  height: 60vh;
  box-shadow: ${({ theme }) => theme.colors.card.loginBoxShadow};
`;

export const Title = styled.h2`
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.xxxl}px;
  margin: 0 0 2.5rem 0;
  /* text-transform: uppercase; */
  letter-spacing: 2px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 24vw;
  min-height: 30vh;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.common.body};
  border-radius: 0.3rem;
  box-shadow: ${({ theme }) => theme.colors.card.boxShadow};
`;

export const Input = styled.input`
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "2.4rem")};
  text-align: left;
  padding: 0 0 0 0.6rem;
  margin: 0.6rem 0 0 0;
  border: ${({ border }) => (border ? border : "0.2px solid #aaa")};
  border-radius: 0.2rem;

  ::placeholder {
    text-transform: uppercase;
  }
`;

export const LoginButton = styled.button`
  min-height: 2.4rem;
  padding: 0.4rem;
  margin: 2rem 0 0 0;
  background-color: ${({ theme }) => theme.colors.button.secondary};
  color: #363434;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.s}px;
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
