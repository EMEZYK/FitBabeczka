import ReactDOM from "react-dom";
import { Fragment } from "react";
import { ModalWrapper, Backdrop } from "../Modal.styled";
import { AddRecipe as RecipeForm } from "./AddRecipe";

const modal = document.getElementById("modal");

export const NewRecipeModal = ({
  setOpenModal,
  setContext,
  modalRecipeTitle,
  recipeId,
  addOperation,
  categories,
  imageName,
  newRecipe,
}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop>
          <ModalWrapper topDistance="5vh">
            <RecipeForm
              setOpenModal={setOpenModal}
              setContext={setContext}
              modalRecipeTitle={modalRecipeTitle}
              recipeId={recipeId}
              addOperation={addOperation}
              categories={categories}
              imageName={imageName}
              newRecipe={newRecipe}
            />
          </ModalWrapper>
        </Backdrop>,
        modal
      )}
    </Fragment>
  );
};
