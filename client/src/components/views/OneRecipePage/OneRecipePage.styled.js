import styled from "styled-components";
import { Typography } from "../../ui/Typography/Typography.styled";
import { RecipeBox } from "../../ui/RecipeBox/RecipeBox.styled";

export const RecipeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: auto;

  @media (max-width: 991px) {
    align-items: flex-start;
    max-width: 100%;
  }
`;

export const ImageContainer = styled(RecipeBox)`
  display: flex;
  flex-wrap: wrap;
  height: 90%;
  background-color: #fff;
  width: 30%;
  box-shadow: ${({ theme }) => theme.colors.card.boxShadow};
  justify-content: center;

  @media (max-width: 991px) {
    align-items: flex-start;
    margin: 0;
  }

  @media (max-width: 991px) {
    align-items: flex-start;
    margin: 0;
  }

  @media (min-width: 769px) and (max-width: 991px) {
    width: 60%;
  }
  @media (min-width: 601px) and (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    min-height: 50vh;
    width: 100%;
  }
`;

export const RecipeInfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

export const TitleRecipe = styled.h1`
  font-size: ${({ theme }) => theme.fontsize.desktop.xxl}px;
  text-align: left;

  @media (max-width: 876px) {
    font-size: ${({ theme }) => theme.fontsize.mobile.xxl}px;
  }
`;

export const RecipeShortDescription = styled(Typography)`
  font-size: ${({ theme }) => theme.fontsize.desktop.xs}px;
  text-align: left;
  padding: 1rem 0;

  @media (max-width: 876px) {
    font-size: ${({ theme }) => theme.fontsize.desktop.s}px;
  }
`;
export const RecipePreparation = styled(Typography)`
  font-size: ${({ theme }) => theme.fontsize.desktop.xs}px;
  text-align: left;
  margin-top: 1rem;
`;

export const RecipeHeader = styled(Typography)`
  font-size: ${({ theme }) => theme.fontsize.desktop.m}px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.weight.bold};
  text-align: left;

  @media (max-width: 876px) {
    font-size: ${({ theme }) => theme.fontsize.mobile.l}px;
  }
`;

export const RecipeDescriptionContainer = styled.div`
  display: flex;
  height: auto;
  padding: 1rem 0 0 0;
  border-top: 1px solid;

  @media (max-width: 876px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const DescriptionContainer = styled.div`
  width: 65%;
  height: 100%;

  @media (max-width: 876px) {
    width: 100%;

    p:first-child {
      text-align: center;
    }

    p:nth-child(2) {
      font-size: ${({ theme }) => theme.fontsize.mobile.m}px;
      margin: 1rem 0;
    }
  }
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 35%;
  height: 100%;
  margin: 0 1rem 0 0;

  @media (max-width: 876px) {
    width: 100%;
    margin: 0 0 1rem 0;

    p {
      text-align: center;
    }
  }
`;

export const IngredientList = styled.ul`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontsize.desktop.xs}px;

  @media (max-width: 876px) {
    font-size: ${({ theme }) => theme.fontsize.mobile.s}px;
  }
`;

export const Ingredient = styled.li`
  list-style: none;
  text-align: left;
`;
