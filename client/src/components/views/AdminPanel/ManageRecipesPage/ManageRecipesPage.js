import React from "react";

import {
  AddRecipeButton,
  AddIcon,
  AddRecipeWrapper,
  FlexAddWrapper,
} from "./ManageRecipes.styled";
import { NewRecipeModal } from "./NewRecipe/NewRecipeModal";
import { useState } from "react";

import AllRecipesPage from "../../AllRecipesPage/AllRecipes";
import { FlexWrapper } from "../../../global-styles/Flex.styled";

const EditMenuPage = ({ setContext, categories }) => {
  const [openModal, setOpenModal] = useState(false);

  const onAddRecipeButtonClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <FlexWrapper>
        <FlexAddWrapper>
          <AddRecipeWrapper>
            <AddRecipeButton onClick={onAddRecipeButtonClick}>
              <AddIcon
                src="/icons/addRecipe.svg"
                width="4vw"
                hoverWidth="3.5vw"
                margin="0"
              />
            </AddRecipeButton>
            <p>Dodaj przepis</p>
            {openModal && (
              <NewRecipeModal
                setOpenModal={setOpenModal}
                setContext={setContext}
                modalRecipeTitle="Dodaj przepis"
              />
            )}
          </AddRecipeWrapper>
        </FlexAddWrapper>
        <AllRecipesPage
          categories={categories}
          isEditable={true}
          openModal={openModal}
        ></AllRecipesPage>
      </FlexWrapper>
    </>
  );
};

export default EditMenuPage;
