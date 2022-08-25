import ReactDOM from "react-dom";
import { Fragment } from "react";
import {
  ModalWrapper,
  Backdrop,
  DeleteButton,
  CancelButton,
  RemovEditButtonsWrapper,
} from "./Modal.styled";

const modal = document.getElementById("modal") || document.createElement("div");

export const Modal = ({ onDelete, onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop data-testid="backdrop">
          <ModalWrapper
            minHeight="10vh"
            maxHeight="20vh"
            scroll="none"
            padding="1rem"
            margin="0"
          >
            <p>Czy na pewno chcesz usunąć ten przepis?</p>
            <RemovEditButtonsWrapper>
              <DeleteButton width="auto" border="0" onClick={onDelete}>
                Usuń
              </DeleteButton>
              <CancelButton onClick={onClose}>Anuluj</CancelButton>
            </RemovEditButtonsWrapper>
          </ModalWrapper>
        </Backdrop>,
        modal
      )}
    </Fragment>
  );
};
