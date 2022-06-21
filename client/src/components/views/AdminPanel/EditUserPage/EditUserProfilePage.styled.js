import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import { FlexWrapper } from "../../../global-styles/Flex.styled";
import { Button } from "../../../ui/Button/Button.styled";

export const FormWrapper = styled(FlexWrapper)`
  background-color: hsl(0 20% 88%);
  max-width: 33vw;
  min-height: 80vh;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.colors.card.boxShadow};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : theme.fontsize.xl)}px;

  @media (max-width: 1280px) {
    max-width: 90%;
  }
`;

export const Title = styled.h2`
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.xxl}px;
  font-weight: ${({ theme }) => theme.weight.regular};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "0")};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 90%;
  min-height: 20vh;
  padding: 1rem;
`;

export const LabelName = styled.label`
  text-align: left;
  margin: 1rem 0 0 0;
`;

export const SaveButton = styled(Button)`
  min-width: 8rem;
  margin: 2.5rem 0 0 0;
  padding: 1rem 0;
  align-self: center;
  text-transform: capitalize;
  color: #000;
  background-color: ${({ theme }) => theme.colors.button.secondary};
  letter-spacing: 0.2px;
  font-size: ${({ theme }) => theme.fontsize.desktop.l}px;

  :hover {
    background-color: ${({ theme }) => theme.colors.button.active};
    letter-spacing: 1px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
