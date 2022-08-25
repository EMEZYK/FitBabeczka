import ReactDOM from "react-dom";
import { Fragment } from "react";
import { ModalWrapper, Backdrop } from "../EditDeleteModal/Modal.styled";
import { NewRecipeForm } from "./AddRecipeForm/NewRecipeForm";

const modal = document.getElementById("modal");

export const NewRecipeModal = ({
  setOpenModal,
  modalRecipeTitle,
  recipeId,
  addOperation,
  categories,
  imageName,
  onEdit,
  setEditedRecipeId,
}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop>
          <ModalWrapper topDistance="5vh">
            <NewRecipeForm
              setOpenModal={setOpenModal}
              modalRecipeTitle={modalRecipeTitle}
              recipeId={recipeId}
              addOperation={addOperation}
              categories={categories}
              imageName={imageName}
              onEdit={onEdit}
              setEditedRecipeId={setEditedRecipeId}
            />
          </ModalWrapper>
        </Backdrop>,
        modal
      )}
    </Fragment>
  );
};
