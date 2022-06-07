import styled from "styled-components";

export const PaginatedList = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
`;

export const NextPrevButton = styled.button`
  width: 2rem;
  padding: 0.3rem;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ddd;

  a {
    text-decoration: none;
    color: #000;
  }
`;