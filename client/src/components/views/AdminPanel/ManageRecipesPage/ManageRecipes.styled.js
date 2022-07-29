import styled from "styled-components";
import { FlexWrapper } from "../../../global-styles/Flex.styled";

export const FlexAddWrapper = styled(FlexWrapper)`
  align-items: flex-end;
  min-height: auto;
  padding: 0 3rem 0 0;
  height: auto;

  @media (max-width: 991px) {
    padding: 0;
    margin: 0 0 1rem 0;
  }
`;

export const AddRecipeWrapper = styled(FlexWrapper)`
  margin: 1rem 0;
  width: 15vw;

  @media (max-width: 991px) {
    min-width: 70vw;
  }

  p {
    font-size: clamp(1.4rem, 2vw, 1.4rem);
  }
`;

export const AddRecipeButton = styled.button`
  height: 10vh;
  cursor: pointer;
  border: 0;
  background-color: #f4f1f4;
  width: 30%;

  @media (max-width: 991px) {
    width: 20%;
  }

  @media (min-width: 1200px) {
    width: ${({ mediaWidth }) => (mediaWidth ? mediaWidth : "60%")};
  }
`;
export const AddIcon = styled.img`
  width: ${({ width }) => (width ? width : "20%")};
  max-width: 100%;
  max-height: 100%;
  margin: ${({ margin }) => (margin ? margin : "0 0.4rem 0 0")};

  :hover {
    width: ${({ hoverWidth }) => (hoverWidth ? hoverWidth : "none")};
  }

  @media (max-width: 599px) {
    width: 60%;
  }

  @media (min-width: 600px) and (max-width: 991px) {
    width: 50%;
  }

  @media (max-width: 991px) {
    width: ${({ mediaWidth }) => (mediaWidth ? mediaWidth : "50%")};
  }
`;

export const AddIngredientsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.2rem, 1vw, 1.8rem);
  padding: 0.2rem;
  margin: 1rem auto;
  border: 2px solid green;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  @media (max-width: 991px) {
    width: 40%;
    height: 5vh;
  }

  @media (max-width: 600px) {
    width: 60%;
  }
`;

export const IngredientsList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const OneIngredient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 0 0.4rem 0;
`;

export const IngredientListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ErrorInfo = styled.div`
  font-size: clamp(1rem, 2vw, 1.1rem);
`;

export const RecipeImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 0 0;
`;

export const RecipePhoto = styled.img`
  max-width: 20vw;
  max-height: 50vh;

  @media (max-width: 599px) {
    max-height: fit-content;
    max-width: fit-content;
  }
`;
