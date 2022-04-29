import styled from "styled-components";

export const RecipeBox = styled.div`
  width: ${({ width }) => (width ? width : "16vw")};
  height: ${({ height }) => (height ? height : "48vh")};
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.card.primary};
  padding: ${({ padding }) => (padding ? padding : "0")};
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "0")};

  .recipeName {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: clamp(0.6rem, 2vw, 1.2rem);
    font-weight: 500;
  }

  button {
    width: 7vw;
    cursor: pointer;
    background-color: #6f6c6c;
    color: #ffff;
    border-style: none;
    padding: 0.2rem;
    font-size: clamp(0.2rem, 3vw, 0.9rem);
    margin-top: 0.4em;
  }

  @media (max-width: 1280px) {
    width: 80%;
    height: 40vh;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  cursor: pointer;
`;
