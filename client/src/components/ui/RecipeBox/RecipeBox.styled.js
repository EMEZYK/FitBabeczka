import styled from "styled-components";

export const RecipeBox = styled.div`
  width: 16vw;
  max-height: 48vh;
  background-color: #fff;

  .recipeName {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: clamp(0.6rem, 2vw, 0.9rem);
    font-weight: 500;
  }

  button {
    width: 6vw;
    cursor: pointer;
    background-color: #6f6c6c;
    color: #ffff;
    border-style: none;
    padding: 1px;
    font-size: clamp(0.2rem, 2vw, 0.7rem);
    margin: 2px;
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  cursor: pointer;
`;