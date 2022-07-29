import styled from "styled-components";

export const CategoryCircle = styled.div`
  width: 10vw;
  margin: 2rem 0.5rem;

  @media (max-width: 1280px) {
    width: 80%;
    margin: 0.2rem;
  }

  @media (max-width: 576px) {
    width: 30%;
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
  width: 6.5rem;
  height: 6.5rem;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;

  @media (max-width: 1280px) {
    width: 7rem;
    height: 7rem;
  }

  @media (max-width: 992px) {
    width: 6rem;
    height: 6rem;
  }

  @media (max-width: 599px) {
    width: 4rem;
    height: 4rem;
  }
`;
