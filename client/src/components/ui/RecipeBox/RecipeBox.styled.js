import styled from "styled-components";
import { Typography } from "../Typography/Typography.styled";
import { theme } from "../../../theme/theme";
import { FlexWrapper } from "../../global-styles/Flex.styled";
import { Button } from "../Button/Button.styled";

export const RecipeBox = styled.div`
  width: ${({ width }) => (width ? width : "16vw")};
  height: ${({ height }) => (height ? height : "48vh")};
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.card.primary};
  padding: ${({ padding }) => (padding ? padding : "0")};
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "0")};
  margin: ${({ margin }) => (margin ? margin : "0")};

  @media (max-width: 1440px) {
    min-width: 25vw;
  }
  @media (max-width: 1280px) {
    min-width: 35vw;
  }

  @media (max-width: 576px) {
    min-width: 95vw;
  }
`;

export const Image = styled.img`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "80%")};
  object-fit: cover;
  cursor: pointer;
  margin: 0;
`;

export const RecipeNameWrapper = styled(FlexWrapper)`
  width: 100%;
  padding: 0 0.3rem 0.5rem 0.3rem;
  background-color: #fff;

  @media (max-width: 576px) {
    flex-direction: row;
    min-height: 8vh;
    padding: 0.3rem 0.6rem 0.6rem 0;
  }
`;

export const RecipeName = styled(Typography)`
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : theme.fontsize.desktop.m}px;

  @media (max-width: 576px) {
    min-width: 70%;
    font-size: ${({ fontSize }) =>
      fontSize ? fontSize : theme.fontsize.desktop.l}px;
  }
`;

export const ReadMoreButton = styled(Button)`
  margin: 0.4rem 0;
  padding: 0.2rem;
  text-transform: lowercase;
  font-weight: normal;
  background-color: #6f6c6c;

  &:hover {
    letter-spacing: 0.1rem;
  }
  @media (max-width: 576px) {
    padding: 0.4rem;
  }
`;
