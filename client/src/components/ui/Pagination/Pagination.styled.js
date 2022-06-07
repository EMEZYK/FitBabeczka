import styled from "styled-components";

export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 0 0.5rem;
`;

export const PageNumber = styled.li`
  width: 2rem;
  justify-items: center;
  text-align: center;
  padding: 0.3rem;
  margin: 0 0.5rem 0 0;
  background-color: #fff;
  border: 1px solid #aaa;
  cursor: pointer;

  &.active {
    background-color: #cc9933;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #000;

    &.active {
      color: #fff;
    }
  }
`;
