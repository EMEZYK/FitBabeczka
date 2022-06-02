import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    /* height: fit-content; */
    flex-wrap: wrap;
  }
`;
