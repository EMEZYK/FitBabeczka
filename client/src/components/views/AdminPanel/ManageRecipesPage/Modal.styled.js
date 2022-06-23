import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: ${({ topDistance }) => (topDistance ? topDistance : "20vh")};
  left: 25%;
  width: 50%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fff"};
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  z-index: 10;
  overflow-y: ${({ scroll }) => (scroll ? scroll : "scroll")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "80vh")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "90vh")};

  p {
    margin: 0 0 1rem 0;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff0000;
  margin: 0 0.4rem 0 0;
  padding: 0.4rem;
  color: #fff;

  :hover {
    background-color: #d10000;
  }
`;

export const CancelButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button.cancel};
  padding: 0.4rem;
  :hover {
    background-color: #b1b1b1;
  }
`;

export const CloseModalButton = styled.button`
  max-height: 6vh;
  width: 8%;
  background-color: hsl(0 20% 88%);
  font-size: 3rem;
  align-self: flex-end;
  text-align: center;
`;
