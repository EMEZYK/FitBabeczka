import styled from "styled-components";
import { FormWrapper } from "../EditUserPage/EditUserProfilePage.styled";

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 50vw;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fff"};
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  z-index: 10;
  overflow-y: ${({ scroll }) => (scroll ? scroll : "scroll")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "80vh")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "90vh")};
  align-items: center;
  justify-content: center;

  p {
    margin: 0 0 1rem 0;
  }

  @media (max-width: 991px) {
    max-width: 90vw;
    padding: 0;
  }

  @media (min-width: 992px) and (max-width: 1280px) {
    max-width: 70vw;
  }
`;

export const NewRecipeFormWrapper = styled(FormWrapper)`
  margin: auto 0;
  min-width: 40vw;

  @media (max-width: 767px) {
    min-width: 90vw;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    min-width: 60vw;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    min-width: 45vw;
  }
`;

export const DeleteButton = styled.button`
  width: ${({ width }) => (width ? width : "15%")};
  height: ${({ height }) => (height ? height : "100%")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#ff0000"};
  margin: ${({ margin }) => (margin ? margin : "0 0.4rem 0 0")};
  padding: ${({ padding }) => (padding ? padding : "0.4rem")};
  color: ${({ color }) => (color ? color : "#fff")};
  border: ${({ border }) => (border ? border : "2px solid #ff0000")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0")};
  cursor: pointer;

  :hover {
    background-color: ${({ hoverColor }) =>
      hoverColor ? hoverColor : "#d10000"};
  }

  img {
    min-width: 2rem;
  }
`;

export const MobileDeleteButton = styled(DeleteButton)`
  height: auto;
  width: auto;
  padding: 0;
  margin: 0 0 0 0.2rem;
  border: 1px solid #ff0000;
  background-color: #fff;

  :hover {
    background-color: #fff;
    border-color: #7f0000;
  }
`;

export const CancelButton = styled.button`
  width: 10%;
  height: ${({ height }) => (height ? height : "100%")};
  background-color: ${({ theme }) => theme.colors.button.cancel};
  padding: 0.4rem;
  cursor: pointer;
  border: 0;

  :hover {
    background-color: #b1b1b1;
  }
`;

export const CloseModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  padding: 0.3rem;
  max-height: 6vh;
  /* width: 8%; */
  background-color: hsl(0 20% 88%);
  font-size: 3rem;
  align-self: flex-end;
  text-align: center;
  cursor: pointer;
`;
