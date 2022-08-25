import React from "react";
import {
  AddRecipeButton,
  AddRecipeIcon,
  AddRecipeWrapper,
} from "./NewRecipeButton.styled";

export const NewRecipeButton = (displayAddRecipe) => {
  return (
    <>
      {displayAddRecipe ? (
        <AddRecipeWrapper>
          <AddRecipeButton>
            <AddRecipeIcon src="/icons/addRecipe.svg" />
          </AddRecipeButton>
        </AddRecipeWrapper>
      ) : null}
    </>
  );
};
