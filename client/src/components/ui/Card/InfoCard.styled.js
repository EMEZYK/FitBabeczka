import styled from "styled-components";

export const RecipeInfo = styled.div`
  width: 30%;
  height: 10%;
  border-right: 1px solid #3c3c43;

  img {
    height: 1.5rem;
    width: 1.5rem;
  }

  &:last-child {
    border-right: none;
  }
`;
