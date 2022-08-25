import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import { FlexWrapper } from "../../../global-styles/Flex.styled";
import { Button } from "../../../ui/Button/Button.styled";

export const FormWrapper = styled(FlexWrapper)`
  background-color: hsl(0 20% 88%);
  max-width: 33vw;
  min-width: 30vw;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "80vh")};
  border-radius: 4px;
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? boxShadow : theme.colors.card.boxShadow};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : theme.fontsize.xl)}px;

  @media (max-width: 600px) {
    min-width: 85vw;
    padding: 1rem;
  }

  @media (min-width: 601px) {
    min-width: 65vw;
    padding: 1rem;
    margin: 1rem 0;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    min-width: 50vw;
  }

  @media (min-width: 1200px) {
    min-width: 33vw;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.5rem, 2vw, 1.8rem);
  font-weight: ${({ fotnWeight }) =>
    fotnWeight ? fotnWeight : theme.weight.regular};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "0")};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 90%;
  min-height: 20vh;
  padding: 1rem;

  @media (max-width: 999px) {
    min-width: 100%;
  }
`;

export const LabelName = styled.label`
  text-align: left;
  margin: 1rem 0;
`;

export const SaveButton = styled(Button)`
  min-width: 8rem;
  margin: 2.5rem 0 0 0;
  padding: 0.8rem 0;
  align-self: center;
  text-transform: capitalize;
  color: #000;
  background-color: ${({ bgc }) => (bgc ? bgc : theme.colors.button.secondary)};
  letter-spacing: 0.2px;
  font-size: clamp(1rem, 3vw, 1.2rem);
  border: 1px solid;
  border-radius: 3px;

  :hover {
    background-color: ${({ bgcHover }) =>
      bgcHover ? bgcHover : theme.colors.button.active};
    letter-spacing: 1px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
