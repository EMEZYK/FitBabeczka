import ReactDOM from "react-dom";
import { Fragment } from "react";
import {
  ModalWrapper,
  Backdrop,
  DeleteButton,
  CancelButton,
} from "./Modal.styled";

const modal = document.getElementById("modal");

export const Modal = ({ onDelete, onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop>
          <ModalWrapper minHeight="10vh" maxHeight="20vh" scroll="none">
            <p>Czy na pewno chcesz usunąć ten przepis?</p>
            <div>
              <DeleteButton onClick={onDelete}>Usuń</DeleteButton>
              <CancelButton onClick={onClose}>Anuluj</CancelButton>
            </div>
          </ModalWrapper>
        </Backdrop>,
        modal
      )}
    </Fragment>
  );
};
