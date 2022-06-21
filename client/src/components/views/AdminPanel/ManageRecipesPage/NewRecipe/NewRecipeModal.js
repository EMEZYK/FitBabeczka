import ReactDOM from "react-dom";
import { Fragment } from "react";
import { ModalWrapper, Backdrop } from "../Modal.styled";
import { AddRecipe } from "./AddRecipe";

const modal = document.getElementById("modal");

export const NewRecipeModal = ({ setOpenModal }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop>
          <ModalWrapper topDistance="5vh">
            <AddRecipe setOpenModal={setOpenModal} />
          </ModalWrapper>
        </Backdrop>,
        modal
      )}
    </Fragment>
  );
};
