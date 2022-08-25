import styled from "styled-components";

export const Categories = styled.div`
  display: flex;
  min-width: 80%;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;
