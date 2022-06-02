import styled from "styled-components";
import { Typography } from "../../ui/Typography/Typography.styled";
import { RecipeBox } from "../../ui/RecipeBox/RecipeBox.styled";

export const RecipeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled(RecipeBox)`
  display: flex;
  flex-wrap: wrap;
  height: 90%;
  width: 30%;
  box-shadow: ${({ theme }) => theme.colors.card.boxShadow};
  justify-content: center;
`;

export const TitleRecipe = styled.h1`
  font-size: ${({ theme }) => theme.fontsize.desktop.xxl}px;
  text-align: left;
`;

export const RecipeShortDescription = styled(Typography)`
  font-size: ${({ theme }) => theme.fontsize.desktop.xs}px;
  text-align: left;
  padding: 1rem 0;
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
`;

export const RecipeDescriptionContainer = styled.div`
  display: flex;
  height: auto;
  padding-top: 1rem;
  border-top: 1px solid;
`;

export const DescriptionContainer = styled.div`
  width: 65%;
  height: 100%;
`;

export const IngredientsContainer = styled.div`
  width: 35%;
  height: 100%;
`;

export const IngredientList = styled.ul`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontsize.desktop.xs}px;
`;

export const Ingredient = styled.li`
  list-style: none;
  text-align: left;
`;
