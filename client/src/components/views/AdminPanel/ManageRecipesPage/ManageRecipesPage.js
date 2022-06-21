import React from "react";

import {
  AddRecipeButton,
  AddRecipeIcon,
  AddRecipeWrapper,
  FlexAddWrapper,
} from "./ManageRecipes.styled";
import { NewRecipeModal } from "./NewRecipe/NewRecipeModal";
import { useState } from "react";

import AllRecipesPage from "../../AllRecipesPage/AllRecipes";

const EditMenuPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const onAddRecipeButtonClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <FlexAddWrapper>
        <AddRecipeWrapper>
          <AddRecipeButton onClick={onAddRecipeButtonClick}>
            <AddRecipeIcon src="/icons/addRecipe.svg" />
          </AddRecipeButton>
          <p>Dodaj przepis</p>
          {openModal && <NewRecipeModal setOpenModal={setOpenModal} />}
        </AddRecipeWrapper>
      </FlexAddWrapper>
      <AllRecipesPage isEditable={true}></AllRecipesPage>
    </>
  );
};

export default EditMenuPage;
