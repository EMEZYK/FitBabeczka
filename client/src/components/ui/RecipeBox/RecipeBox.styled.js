import styled from "styled-components";
import { Typography } from "../Typography/Typography.styled";
import { Button } from "../Button/Button.styled";

export const RecipeBox = styled.div`
  width: ${({ width }) => (width ? width : "18vw")};

  height: auto;
  min-height: 90%;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.card.primary};
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin: 1rem;

  @media (max-width: 1440px) {
    min-width: 25vw;
  }
  @media (max-width: 1280px) {
    max-width: 65vw;
    margin: 1rem;
  }

  @media (max-width: 992px) {
    min-width: 90%;
  }
  @media (max-width: 600px) {
    margin: 0.5rem 0 0 0;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "80%")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
  object-fit: cover;
  cursor: pointer;
  margin: 0;
`;

export const RecipeNameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 14vh;
  background-color: #fff;
  padding: 0 0 0.2rem 0;

  @media (max-width: 599px) {
    justify-content: space-around;
  }
`;

export const RecipeName = styled(Typography)`
  width: 100%;
  max-height: 50%;
  font-size: clamp(1.2rem, 2vw, 1.2rem);
`;

export const ReadMoreButton = styled(Button)`
  text-transform: capitalize;
  font-weight: normal;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  background-color: #6d6d6c;
  padding: 0.3rem 2rem;
  margin: 0.4rem 0 0.2rem 0;

  &:hover {
    letter-spacing: 0.1rem;
  }
  @media (max-width: 576px) {
    padding: 0.4rem;
  }
`;
