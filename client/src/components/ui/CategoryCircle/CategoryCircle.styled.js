import styled from "styled-components";

export const CategoryCircle = styled.div`
  width: 10vw;
  margin-top: 10px;

  .category-name {
    color: #000000;
  }

  .category-name:hover {
    color: #e65c00;
    text-decoration: underline;
  }
`;

export const CategoryImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
`;
