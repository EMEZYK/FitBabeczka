import styled from "styled-components";

export const CategoryCircle = styled.div`
  width: 10vw;
  margin: 2rem 0.5rem;
  /* background-color: green; */

  @media (max-width: 1280px) {
    width: 20%;
  }

  @media (max-width: 576px) {
    width: 30%;
    margin: 0.2rem;
  }

  .category-name {
    color: #000000;
  }

  .category-name:hover {
    color: #b12337;
    letter-spacing: 0.1rem;
  }
`;

export const CategoryImage = styled.img`
  border-radius: 50%;
  width: 6.5rem;
  height: 6.5rem;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 1280px) {
    width: 8rem;
    height: 8rem;
  }
`;
