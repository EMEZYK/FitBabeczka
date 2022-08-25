import styled from "styled-components";

export const NotFoundPageContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #c07461);

  @media (max-width: 1024px) {
    background: #fff;
  }
`;

export const NotFoundPageImage = styled.img`
  max-height: 80%;
  width: 85vw;
  object-fit: cover;
  object-position: 20% 69%;

  @media (max-width: 1024px) {
    min-height: 100vh;
    width: 100vw;
  }

  @media (max-width: 991px) {
    object-fit: contain;
    object-position: bottom;
  }
`;
