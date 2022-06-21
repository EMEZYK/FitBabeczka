import React from "react";
import {
  AddRecipeButton,
  AddRecipeIcon,
  AddRecipeWrapper,
} from "./AddRecipeButton.styled";

export const AddRecipe = (displayAddRecipe) => {
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
